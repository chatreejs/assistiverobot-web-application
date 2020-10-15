import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationConfig } from '../../core/authentication-config';
import { GeneralEnvironmentConfig } from '../../core/environment-config';
import { AuthenticationService } from '../authentication.service';
import { AUTHENTICATION_CONFIG, GENERAL_ENVIRONMENT_CONFIG } from '../../core/provider-name-token';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    @Inject(GENERAL_ENVIRONMENT_CONFIG) private generalEnvironmentConfig: GeneralEnvironmentConfig,
    @Inject(AUTHENTICATION_CONFIG) private authenticationConfig: AuthenticationConfig
  ) { }

  ngOnInit(): void {
    if (this.generalEnvironmentConfig.fullSecureAuthentication === true) {
      if (!window.location.hash || window.location.hash.length === 0) {
        const queryString = window.location.search.substring(1); // substring strips '?'
        const path = [window.location.pathname, queryString].join('#');
        window.location.assign(new URL(path, window.location.href).toString());
      } else if (new URLSearchParams(window.location.hash.substring(1)).has('code')) {
        this.authenticationService.completeAuthorizationRequest()
          .then(() => {
            this.navigateWhenFinishLogedIn();
          })
          .catch(() => {
            console.warn('Please implement loged in fail!');
          });
      } else {
        this.navigateWhenFinishLogedIn();
      }
    } else {
      this.navigateWhenFinishLogedIn();
    }
  }

  private navigateWhenFinishLogedIn() {
    const navigateUrl = this.authenticationService.getRedirectUrlAfterLogedIn();
    this.authenticationService.removeRedirectUrlAfterLogedIn();
    window.location.assign(navigateUrl);
  }

}
