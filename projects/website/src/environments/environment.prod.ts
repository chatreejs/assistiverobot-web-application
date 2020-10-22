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
  // webServiceUrl: 'http://10.1.136.72/service',
  webServiceUrl: 'http://192.168.1.102/service',

  // AuthenticationConfig
  issuerUri: 'https://localhost:5001/api/v1/authen',
  clientId: 'toktak.io',
  clientSecret: null,
  redirectUri: 'http://localhost:4200/callback',
  scope: 'toktak',
  redirectUrlAfterLogedIn: 'http://localhost:4200',
}
