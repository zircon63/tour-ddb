import {Injectable} from '@angular/core';
import {AuthStore} from './auth.store';
import {isNil, Query} from '@datorama/akita';
import {Account} from './models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AuthQuery extends Query<Account> {
  constructor(protected store: AuthStore) {
    super(store);
  }

  get accessToken(): string | null {
    return this.getValue().token;
  }

  get isLoggedIn() {
    return !isNil(this.accessToken);
  }
}
