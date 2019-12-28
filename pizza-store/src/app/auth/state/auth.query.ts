import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';
import { isNil, Query } from '@datorama/akita';
import { Account } from './models/account.model';
import { MENU } from '@pages/shared/menu';
import { map } from 'rxjs/operators';
import { Role } from '@backend/users/user-role.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthQuery extends Query<Account> {
  constructor(protected store: AuthStore) {
    super(store);
  }

  get user$() {
    return this.select();
  }

  get user() {
    return this.getValue();
  }

  get isAuth$() {
    return this.select(user => !!user.login);
  }

  get isAuth() {
    return !isNil(this.store.getValue().login);
  }

  get menu$() {
    return this.user$.pipe(
      map(user => {
        return MENU.filter(item => {
          if (item.roles) {
            return this.hasRoles(item.roles, user.roles);
          } else {
            return true;
          }
        });
      }),
    );
  }

  hasRoles$(roles: Role[]) {
    return this.user$.pipe(
      map(user => this.hasRoles(roles, user.roles)),
    );
  }

  private hasRoles(roles: Role[], userRoles: Role[]): boolean {
    return roles.every(role => userRoles.includes(role));
  }
}
