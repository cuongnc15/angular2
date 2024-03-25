import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideNzIcons } from './icons-provider';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { APP_INITIALIZER } from '@angular/core';
import { authAppInitializerFactory } from './core/auth/auth-app-initializer.factory';
import { AuthService } from './core/auth/auth.service';
import {
  AuthConfig,
  OAuthModule,
  OAuthModuleConfig,
  OAuthStorage,
} from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './core/auth/auth-config';
import { authModuleConfig } from './core/auth/auth-module-config';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

registerLocaleData(en);

export function storageFactory(): OAuthStorage {
  return localStorage;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNzIcons(),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    importProvidersFrom(RouterModule),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(OAuthModule.forRoot()),
    provideAnimations(),
    {
        provide: APP_INITIALIZER,
        useFactory: authAppInitializerFactory,
        deps: [AuthService],
        multi: true,
    },
    { provide: AuthConfig, useValue: authCodeFlowConfig },
    { provide: OAuthModuleConfig, useValue: authModuleConfig },
    { provide: OAuthStorage, useFactory: storageFactory },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    provideAnimations(),
    provideAnimations(),
    provideAnimations()
],
};
