import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Order } from '@pages/orders/state/order.model';
import { Observable } from 'rxjs';
import { OrderService } from '@pages/orders/state/order.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersUserResolver implements Resolve<Order[]> {
  constructor(private orderService: OrderService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order[]> | Promise<Order[]> | Order[] {
    return this.orderService.getUser();
  }
}
