import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '@pages/orders/state/order.model';
import { OrderQuery } from '@pages/orders/state/order.query';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  items$: Observable<Order[]> = this.orderQuery.selectAll();
  displayedColumns: Array<keyof Order> = ['date', 'status'];

  constructor(private orderQuery: OrderQuery) {
  }

  ngOnInit() {
  }

}
