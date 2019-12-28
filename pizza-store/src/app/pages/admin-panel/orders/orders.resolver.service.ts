import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { OrderService } from '@pages/orders/state/order.service';
import { Order } from '@pages/orders/state/order.model';

@Injectable()
export class OrdersResolver implements Resolve<Order[]> {
  constructor(private orderService: OrderService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.orderService.get<Order[]>();
  }
}
