import { Injectable } from '@angular/core';
import { WebApiService } from '@core/web-api/shared/services/web-api.service';
import { NotificationService } from '@shared/notification.service';
import { catchErrorApi } from '@core/web-api/shared/catchErrorApi';

@Injectable({
  providedIn: 'root',
})
export class StatsService {

  constructor(private api: WebApiService,
              private notificationService: NotificationService) {
  }

  getAmountByStatus() {
    return this.api.get('stats').pipe(
      catchErrorApi(this.notificationService),
    );
  }
}
