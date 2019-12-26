import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';
import { isNil, Query } from '@datorama/akita';
import { Account } from './models/account.model';

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
}
