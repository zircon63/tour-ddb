import { Injectable } from '@nestjs/common';
import { OrdersService } from '../orders/orders.service';
import { ORDER_VIEW_MAP, OrderStatus } from '../orders/status.enum';

@Injectable()
export class StatsService {
  constructor(private readonly ordersService: OrdersService) {
  }

  async amountByStatus() {
    return Promise.all(
      Object.values(OrderStatus)
        .map(status => this.ordersService.amount(status).then(amount => ({ name: ORDER_VIEW_MAP[status], value: amount }))),
    );
  }
}
