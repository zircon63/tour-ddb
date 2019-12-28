import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthQuery } from './state';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class HasRoleGuard implements CanActivate, CanLoad {
  constructor(private authQuery: AuthQuery) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const { roles } = route.data;
    if (!roles) {
      throw new Error('Dont have roles for RolesGuard');
    }
    return this.authQuery.hasRoles$(roles);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    const { roles } = route.data;
    if (!roles) {
      throw new Error('Dont have roles for RolesGuard');
    }
    return this.authQuery.hasRoles$(roles).pipe(
      take(1),
    );
  }
}
