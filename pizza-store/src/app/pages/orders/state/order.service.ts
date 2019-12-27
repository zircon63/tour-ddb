import { Injectable } from '@angular/core';
import { OrderStore } from './order.store';
import { WebApiService } from '@core/web-api/shared/services/web-api.service';
import { CartItem } from '@pages/cart/state/cart.model';
import { NotificationService } from '@shared/notification.service';
import { catchErrorApi } from '@core/web-api/shared/catchErrorApi';
import { OrderProductDTO } from '@backend/orders/dto/order-product.dto';

@Injectable({ providedIn: 'root' })
export class OrderService {

  constructor(protected store: OrderStore,
              private notificationService: NotificationService,
              private webApiService: WebApiService) {
  }

  create(items: CartItem[]) {
    const request: OrderProductDTO[] = items.map(item => ({ id: item.id, amount: item.amount } as OrderProductDTO));
    return this.webApiService.post('orders', request).pipe(
      catchErrorApi(this.notificationService),
    );
  }

}
