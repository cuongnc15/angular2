import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  _authService = inject(AuthService);
  _router = inject(Router);
  _jwt = inject(JwtHelperService);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this._authService.hasValidToken() &&
      this._jwt
        .decodeToken(localStorage.getItem('access_token')!.toString())
        ?.role?.includes('role_admin') === true
    ) {
      return true;
    } else {
      this._router.navigateByUrl('should-login');
      return false;
    }
  }
}
1;
