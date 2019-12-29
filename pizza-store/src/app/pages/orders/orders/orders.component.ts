import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '@pages/orders/state/order.model';
import { OrderQuery } from '@pages/orders/state/order.query';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  items$: Observable<Order[]> = this.orderQuery.selectAll();
  displayedColumns: Array<string> = ['date', 'status', 'total', 'products'];
  @ViewChild('productsList', { static: true }) productsList: TemplateRef<any>;

  constructor(private orderQuery: OrderQuery,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
  }

  showProducts(order: Order) {
    this.matDialog.open(this.productsList, {
      data: order.products,
    });
  }

}
