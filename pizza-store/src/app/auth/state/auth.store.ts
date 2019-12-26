import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';
import {Account} from './models/account.model';

export const initialState = Account.empty();

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'auth',
  resettable: true
})
export class AuthStore extends Store<Account> {
  constructor() {
    super(initialState);
  }

  login(account: Account) {
    this.update(account);
  }

  logout() {
    this.update(Account.empty());
  }
}

