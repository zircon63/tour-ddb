import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthQuery} from './state';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authQuery: AuthQuery,
              private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authQuery.isAuth) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
