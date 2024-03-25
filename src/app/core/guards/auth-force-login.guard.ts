import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { filter, Observable, switchMap, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthForceLoginGuard implements CanActivate {
  _authService = inject(AuthService);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._authService.isDoneLoading$.pipe(
      filter((isDone) => isDone),
      switchMap((_) => this._authService.isAuthenticated$),
      tap(
        (isAuthenticated) =>
          isAuthenticated || this._authService.login(state.url)
      )
    );
  }
}
