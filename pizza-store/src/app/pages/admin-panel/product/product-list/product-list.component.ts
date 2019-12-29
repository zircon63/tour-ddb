import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { OrderProduct } from '@pages/orders/state/order.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  @Input() products: OrderProduct[];

  constructor() {
  }

  ngOnInit() {
  }

}
