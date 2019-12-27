import { Injectable } from '@angular/core';
import { WebApiService } from 'src/app/@core/web-api/shared/services/web-api.service';
import { Credentials } from '../models/credentials.model';
import { map } from 'rxjs/operators';
import { Account } from '../models/account.model';
import { Observable } from 'rxjs';
import { NotificationService } from '@shared/notification.service';
import { catchErrorApi } from '@core/web-api/shared/catchErrorApi';
import { Order } from '@pages/orders/state/order.model';

@Injectable({
  providedIn: 'root',
})
export class AccountApiService {
  constructor(private api: WebApiService,
              private notificationService: NotificationService) {
  }

  login(credentials: Credentials): Observable<Account> {
    return this.api.post<Credentials, Account>('auth/login', credentials).pipe(
      map(user => new Account(user)),
      catchErrorApi(this.notificationService),
    );
  }

  signup(credentials: Credentials): Observable<Account> {
    return this.api.post<Credentials, Account>('auth/signup', credentials).pipe(
      map(user => new Account(user)),
      catchErrorApi(this.notificationService),
    );
  }

  user(): Observable<Account> {
    return this.api.get<Account>('user').pipe(
      map(user => new Account(user)),
    );
  }

  orders() {
    return this.api.get<Order[]>('user/orders').pipe(
      catchErrorApi(this.notificationService),
    );
  }
}
