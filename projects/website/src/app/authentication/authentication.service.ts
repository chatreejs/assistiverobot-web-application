import { Inject, Injectable } from '@angular/core'
import { Router } from '@angular/router'
import {
  AuthorizationNotifier,
  AuthorizationRequest,
  AuthorizationServiceConfiguration,
  BaseTokenRequestHandler,
  GRANT_TYPE_AUTHORIZATION_CODE,
  GRANT_TYPE_REFRESH_TOKEN,
  RedirectRequestHandler,
  Requestor,
  StringMap,
  TokenRequest
} from '@openid/appauth'
import { TokenResponse } from '@openid/appauth/built/token_response'
import { BehaviorSubject, combineLatest, Observable, timer } from 'rxjs'
import { distinctUntilChanged, filter, take } from 'rxjs/operators'

import { UserInfo } from '../core/user-info'
import { AUTHENTICATION_CONFIG } from '../core/provider-name-token'
import { AuthenticationConfig } from '../core/authentication-config'

const LS_ISSUER_URI = 'toktak.authentication.service.issuer_uri'
const LS_USER_INFO = 'toktak.authentication.service.user_info'
const LS_OPENID_CONFIG = 'toktak.authentication.service.parsed_openid_configuration'
const LS_TOKEN_RESPONSE = 'toktak.authentication.service.token_response'
const LS_REDIRECT_URL_AFTER_LOGED_IN = 'toktak.authentication.service.redirect_url_after_loged_in'

@Injectable()
export class AuthenticationService {

  public isAuthorized = false

  // Uses a redirect flow.
  private notifier = new AuthorizationNotifier()
  private authorizationHandler = new RedirectRequestHandler()

  private tokenResponsesStream: BehaviorSubject<TokenResponse>
  private userInfosStream: BehaviorSubject<UserInfo>
  private serviceConfigsStream: BehaviorSubject<AuthorizationServiceConfiguration>

  private get issuerUri(): string {
    return this.authenticationConfig.issuerUri
  }

  constructor(
    private requestor: Requestor,
    private router: Router,
    @Inject(AUTHENTICATION_CONFIG) private authenticationConfig: AuthenticationConfig
  ) {
    // Set notifier to deliver responses.
    this.authorizationHandler.setAuthorizationNotifier(this.notifier)

    // attempt to restore previous values of the metadata config, token response, and user info
    let authorizationServiceConfiguration: AuthorizationServiceConfiguration | null = null
    let tokenResponse: TokenResponse | null = null
    let userInfo: UserInfo | null = null

    // verify that we are still working with the same IDP, since a reload may
    // have been due to an underlying configuration change
    if (this.issuerUri === window.localStorage.getItem(LS_ISSUER_URI)) {
      const serviceConfigJSON = JSON.parse(window.localStorage.getItem(LS_OPENID_CONFIG))
      authorizationServiceConfiguration = serviceConfigJSON && new AuthorizationServiceConfiguration(serviceConfigJSON)
      const tokenResponseJSON = JSON.parse(window.localStorage.getItem(LS_TOKEN_RESPONSE))
      tokenResponse = tokenResponseJSON && new TokenResponse(tokenResponseJSON)

      userInfo = JSON.parse(window.localStorage.getItem(LS_USER_INFO))
    } else {
      // new issuer (or first run, or cleared session)
      // make sure we store the issuer, and have no other state
      window.localStorage.setItem(LS_ISSUER_URI, this.issuerUri)
      window.localStorage.removeItem(LS_OPENID_CONFIG)
      window.localStorage.removeItem(LS_TOKEN_RESPONSE)
      window.localStorage.removeItem(LS_USER_INFO)
    }

    // create subjects with the current values (or null)
    this.serviceConfigsStream = new BehaviorSubject(authorizationServiceConfiguration)
    this.tokenResponsesStream = new BehaviorSubject(tokenResponse)
    this.userInfosStream = new BehaviorSubject(userInfo)

    // update local storage on changes
    this.serviceConfigsStream.subscribe((config: AuthorizationServiceConfiguration) => {
      window.localStorage.setItem(LS_OPENID_CONFIG, config && JSON.stringify(config.toJson()))
    })
    this.tokenResponsesStream.subscribe((token: TokenResponse) => {
      window.localStorage.setItem(LS_TOKEN_RESPONSE, token && JSON.stringify(token.toJson()))

      if (token !== null) {
        // silent refresh token.
        const tokenExpireDate = new Date((token.issuedAt + (token.expiresIn - 10)) * 1000)
        console.log('The token will refresh again at: ', tokenExpireDate)
        timer(tokenExpireDate)
          .pipe(take(1))
          .subscribe(() => this.refreshTokenRequest())
        this.isAuthorized = true
      } else {
        this.isAuthorized = false
      }
    })
    this.userInfosStream.subscribe((info: UserInfo) => {
      window.localStorage.setItem(LS_USER_INFO, info && JSON.stringify(info))
    })

    // monitor changes in metadata/tokens to possibly clear dependent values,
    // and to fetch userInfo.
    combineLatest([this.serviceConfigsStream, this.tokenResponsesStream]).subscribe(
      ([configuration, token]: [AuthorizationServiceConfiguration, TokenResponse]) => {

        // if the service config is cleared, we need to invalidate any TokenResponse/userInfo
        if (configuration === null) {
          if (token !== null) {
            this.tokenResponsesStream.next(null)
          }
          this.userInfosStream.next(null)
          return
        }

        // if the token is cleared, assume userinfo is invalidated too
        if (token === null) {
          this.userInfosStream.next(null)
          return
        }

        // if we don't have a user info endpoint, we can't fetch user info
        if (configuration.userInfoEndpoint === null) {
          console.log('userinfo cannot be emitted - userinfo endpoint not specified by metadata')
          this.userInfosStream.next(null)
          return
        }

        // fetch user info, if none
        if (this.userInfosStream.value === null) {
          const accessToken = token.accessToken
          this.requestor.xhr<UserInfo>({
            url: configuration.userInfoEndpoint,
            method: 'GET',
            dataType: 'json',
            headers: { Authorization: `Bearer ${accessToken}` }
          }).then((userinfo) => {
            this.userInfosStream.next(userinfo)
          })
        }
      })

    // start fetching metadata
    if (authorizationServiceConfiguration === null) {
      this.fetchServiceConfiguration()
    }
  }

  /**
   * Get open-id configuration stream.
   */
  public serviceConfiguration(): Observable<AuthorizationServiceConfiguration> {
    return this.serviceConfigsStream.asObservable().pipe(distinctUntilChanged())
  }

  /**
   * Get token response stream.
   */
  public tokenResponse(): Observable<TokenResponse> {
    return this.tokenResponsesStream.asObservable().pipe(distinctUntilChanged())
  }

  /**
   * Get user information stream.
   */
  public userInfos(): Observable<UserInfo> {
    return this.userInfosStream.asObservable().pipe(distinctUntilChanged())
  }

  /**
   * Authorize request to OAuth service (AtlasX Web Service).
   */
  public authorize(): void {
    this.serviceConfigsStream
      .pipe(filter((value: any) => value !== null))
      .pipe(take(1))
      .subscribe((configuration: AuthorizationServiceConfiguration) => {
        const scope = this.authenticationConfig.scope || 'openid'

        // create a request
        const request = new AuthorizationRequest({
          client_id: this.authenticationConfig.clientId,
          redirect_uri: this.authenticationConfig.redirectUri,
          scope,
          response_type: AuthorizationRequest.RESPONSE_TYPE_CODE,
          extras: this.authenticationConfig.extras
        })
        this.authorizationHandler.performAuthorizationRequest(configuration, request)
      })
  }

  /**
   * Navigate to login page.
   *
   * When the `generalEnvironment.fullSecureAuthentication` is:
   *
   * `true`: Navigate to AtlasX Web Service OAuth login form.
   *
   * `false`: Navigate to Angular login form.
   */
  public signIn(): void {
    this.storedRedirectUrlAfterLogedIn()
    this.router.navigate(['login'])
  }

  /**
   * Sign out and then reload page.
   */
  public signOut(): void {
    // Implement preform revoke token.
    // ...

    console.log('signing out')
    this.tokenResponsesStream.next(null)
    window.location.reload()
  }

  /**
   * Complated authorization with code.
   */
  public completeAuthorizationRequest(): Promise<TokenResponse> {
    return new Promise((resolve, reject) => {
      this.serviceConfigsStream
        .pipe(filter((value: any) => value !== null))
        .pipe(take(1))
        .subscribe((configuration: AuthorizationServiceConfiguration) => {
          console.log('setting listener')
          this.notifier.setAuthorizationListener((request, response, error) => {
            console.log('Authorization request complete ', request, response, error)
            if (response && response.code) {
              const tokenHandler = new BaseTokenRequestHandler(this.requestor)

              // use the code to make the token request.
              const extras: StringMap = {}
              if (this.authenticationConfig.clientSecret) {
                extras.client_secret = this.authenticationConfig.clientSecret
              }
              extras.code_verifier = request.internal.code_verifier
              const tokenRequest = new TokenRequest({
                client_id: this.authenticationConfig.clientId,
                redirect_uri: this.authenticationConfig.redirectUri,
                grant_type: GRANT_TYPE_AUTHORIZATION_CODE,
                code: response.code,
                extras
              })

              console.log('making token request:' + JSON.stringify(tokenRequest.toStringMap()))
              tokenHandler.performTokenRequest(configuration, tokenRequest)
                .then((tokenResponse) => {
                  console.log('received token response ', tokenResponse)
                  this.tokenResponsesStream.next(tokenResponse)
                  resolve(tokenResponse)
                })
            } else {
              reject(error)
            }
          })
          console.log('attempt to complete request')
          this.authorizationHandler.completeAuthorizationRequestIfPossible()
        }, reject)
    })
  }

  /**
   * 
   */
  public completeAuthorizationPasswordRequest(username: string, password: string): Promise<TokenResponse> {
    return new Promise((resolve, reject) => {
      this.serviceConfigsStream
        .pipe(filter((value: any) => value !== null))
        .pipe(take(1))
        .subscribe((configuration: AuthorizationServiceConfiguration) => {
          const tokenRequest = {
            client_id: this.authenticationConfig.clientId,
            grant_type: 'password',
            username,
            password
          }

          const requestData = Object.keys(tokenRequest)
            .map(key => encodeURI(`${key}=${tokenRequest[key]}`))
            .join('&')

          this.requestor.xhr<any>({
            url: configuration.tokenEndpoint,
            method: 'POST',
            dataType: 'json',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: requestData
          }).then((response) => {
            response = new TokenResponse(response)
            console.log('received token response ', response)
            this.tokenResponsesStream.next(response)
            resolve(response)
          })
        }, reject)
    })
  }

  /**
   * Renew the access token.
   */
  public refreshTokenRequest(): Promise<TokenResponse> {
    return new Promise((resolve, reject) => {
      this.serviceConfigsStream
        .pipe(filter((value: any) => value !== null))
        .pipe(filter(() => this.tokenResponsesStream.value !== null))
        .pipe(take(1))
        .subscribe((configuration: AuthorizationServiceConfiguration) => {
          const tokenHandler = new BaseTokenRequestHandler(this.requestor)
          const tokenRequest = new TokenRequest({
            client_id: this.authenticationConfig.clientId,
            redirect_uri: this.authenticationConfig.redirectUri,
            grant_type: GRANT_TYPE_REFRESH_TOKEN,
            code: undefined,
            refresh_token: this.tokenResponsesStream.value.refreshToken,
            extras: undefined
          })

          tokenHandler.performTokenRequest(configuration, tokenRequest)
            .then((response) => {
              console.log('received token response ', response)
              this.tokenResponsesStream.next(response)
              resolve(response)
            })
        }, reject)
    })
  }

  /**
   * Get authorization code.
   */
  public getAuthorizationToken(): string {
    const tokenResponse = this.tokenResponsesStream.value
    if (tokenResponse !== null) {
      return `${tokenResponse.tokenType} ${tokenResponse.accessToken}`
    } else {
      return ''
    }
  }

  /**
   * Get authentication state.
   */
  public isAuthenticated(): boolean {
    const tokenResponse = this.tokenResponsesStream.value
    if (tokenResponse !== null) {
      const tokenExpireDate = new Date((tokenResponse.issuedAt + tokenResponse.expiresIn) * 1000)
      return tokenExpireDate.getTime() > Date.now()
    } else {
      return false
    }
  }

  /**
   * Get redirect url after loged in from local storage.
   *
   * Caution!, not recommend to use in your business code!
   */
  public getRedirectUrlAfterLogedIn(): string {
    return window.localStorage.getItem(LS_REDIRECT_URL_AFTER_LOGED_IN)
  }

  /**
   * remove redirect url after loged in from local storage.
   *
   * Caution!, not recommend to use in your business code!
   */
  public removeRedirectUrlAfterLogedIn() {
    window.localStorage.removeItem(LS_REDIRECT_URL_AFTER_LOGED_IN)
  }


  private async fetchServiceConfiguration() {
    const response = await AuthorizationServiceConfiguration.fetchFromIssuer(this.issuerUri, this.requestor)
    this.serviceConfigsStream.next(response)
  }

  private storedRedirectUrlAfterLogedIn() {
    let navigateUrl: string

    if (this.authenticationConfig.redirectUrlAfterLogedIn) {
      navigateUrl = this.authenticationConfig.redirectUrlAfterLogedIn
    } else {
      navigateUrl = window.location.href
    }
    window.localStorage.setItem(LS_REDIRECT_URL_AFTER_LOGED_IN, navigateUrl)
  }
}
