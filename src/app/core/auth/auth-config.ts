import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../../environments/environment';

export const authCodeFlowConfig: AuthConfig = {
  issuer: environment.SSO_URL,
  clientId: environment.CLIENT_ID,
  responseType: 'code',
  dummyClientSecret: environment.CLIENT_SECRET,
  redirectUri: environment.WEB_REDIRECT_URL,
  scope: 'openid profile email offline_access',
  timeoutFactor: 0.6,
  clearHashAfterLogin: false,
};
