import {Injectable} from '@angular/core';
import {WebApiService} from 'src/app/@core/web-api/shared/services/web-api.service';
import {Credentials} from '../models/credentials.model';
import {map} from 'rxjs/operators';
import {Account} from '../models/account.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {
  constructor(private api: WebApiService) {
  }

  login(credentials: Credentials): Observable<Account> {
    return this.api.post<Credentials, Account>('login', credentials).pipe(
      map(user => new Account(user))
    );
  }

  logout(): Observable<void> {
    return this.api.get('logout');
  }

  user(): Observable<Account> {
    return this.api.get<Account>('user').pipe(
      map(user => new Account(user))
    );
  }
}
