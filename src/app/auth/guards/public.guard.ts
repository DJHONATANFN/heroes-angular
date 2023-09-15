import { Observable, tap, map } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';


const checkAuthStatus = (): boolean | Observable<boolean> => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAutentication().pipe(
    tap((isAuthenticated) => {
      if (isAuthenticated) {
        router.navigate(['./']);
      }
    }),
    map(isAuthenticated => !isAuthenticated)
  );
};

export const publicActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('CanActivate');
  console.log({ route, state });

  return checkAuthStatus();
};

export const publicMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  console.log('CanMatch');
  console.log({ route, segments });

  return checkAuthStatus();
};
