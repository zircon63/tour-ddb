import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CrudComponent } from '@ui/ui-components/crud-table/crud.component';
import { OrderState } from '@pages/orders/state/order.store';
import { OrderService } from '@pages/orders/state/order.service';
import { NotificationService } from '@shared/notification.service';
import { OrderQuery } from '@pages/orders/state/order.query';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { OrderStatus } from '@backend/orders/status.enum';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersTableComponent extends CrudComponent<OrderState> implements OnInit {
  data$ = this.orderQuery.selectAll();
  columnDefinitions: ColumnDefinition[] = [
    {
      name: 'id',
      header: 'ID',
    },
    {
      name: 'date',
      header: 'Дата',
      disabled: true,
    },
    {
      name: 'status',
      header: 'Статус',
    },
  ];

  ORDER_STATUS = [
    {
      value: OrderStatus.Created,
      view: 'Создан',
    },
    {
      value: OrderStatus.Process,
      view: 'В процессе',
    },
    {
      value: OrderStatus.Completed,
      view: 'Завершен',
    },
  ];

  constructor(
    protected orderQuery: OrderQuery,
    protected orderService: OrderService,
    protected notificationService: NotificationService) {
    super(orderService, notificationService);
  }

  ngOnInit() {
  }

}
