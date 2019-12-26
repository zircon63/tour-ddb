import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthQuery} from './state';

@Injectable()
export class CanActivateAuthGuard implements CanActivate {
  constructor(private authQuery: AuthQuery,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authQuery.isAuth) {
      this.router.navigate(['/']);
    }
    return !this.authQuery.isAuth;
  }
}
