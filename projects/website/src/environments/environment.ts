// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthenticationConfig } from '../app/core/authentication-config';
import { GeneralEnvironmentConfig } from '../app/core/environment-config';
import { WebServiceConfig } from '../app/core/web-service-config';

export const environment:
  GeneralEnvironmentConfig &
  WebServiceConfig &
  AuthenticationConfig = {
  // GeneralEnvironmentConfig
  production: false,
  cookieAcceptExpireDateNumber: 7,
  useHomePage: false,
  requireAuthenticationHomePage: true,
  fullSecureAuthentication: false,

  // WebServiceConfig
  webServiceUrl: 'https://localhost:5001',

  // AuthenticationConfig
  issuerUri: 'https://localhost:5001/api/v1/authen',
  clientId: 'toktak.io',
  clientSecret: null,
  redirectUri: 'http://localhost:4200/callback',
  scope: 'toktak',
  redirectUrlAfterLogedIn: 'http://localhost:4200',
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
