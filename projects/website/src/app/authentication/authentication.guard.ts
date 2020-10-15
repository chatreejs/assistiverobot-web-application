import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationConfig } from '../core/authentication-config';
import { AUTHENTICATION_CONFIG } from '../core/provider-name-token';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {

  constructor(
    private authenticationService: AuthenticationService,
    public router: Router,
    @Inject(AUTHENTICATION_CONFIG) private authenticationConfig: AuthenticationConfig
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivateChild(next, state);
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLogedIn = this.authenticationService.isAuthenticated();

    if (isLogedIn === false) {
      this.authenticationService.signIn();
      return false;
    } else {
      return true;
    }
  }

}
