import { OAuthModuleConfig } from 'angular-oauth2-oidc';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: ['https://api-dev.trueconnect.vn'],
    sendAccessToken: true,
  },
};
