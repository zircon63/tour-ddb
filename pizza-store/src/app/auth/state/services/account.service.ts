import { AuthStore } from '../auth.store';
import { Injectable } from '@angular/core';
import { AccountApiService } from './account-api.service';
import { Credentials } from '../models/credentials.model';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  constructor(private authStore: AuthStore,
              private accountApiService: AccountApiService) {
  }

  login(credentials: Credentials) {
    return this.accountApiService.login(credentials).pipe(
      tap((account: Account) => {
        this.authStore.login(account);
      }),
      catchError(error => {
        console.log(error);
        return EMPTY;
      }),
    );
  }

  logout() {
    return this.accountApiService.logout().pipe(
      tap(() => {
        this.authStore.logout();
      }),
      catchError(error => {
        console.log(error);
        return EMPTY;
      }),
    );
  }

  getProfile() {
    return this.accountApiService.user().pipe(
      tap((user: Account) => {
        this.authStore.login(user);
      }),
      catchError(error => {
        console.log(error);
        return EMPTY;
      }),
    );
  }
}
