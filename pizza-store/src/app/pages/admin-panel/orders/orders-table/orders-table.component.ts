import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CrudOperation, CrudTableDataProvider, provideCrudOperation } from '@ui/ui-components/crud-table/crudOperation';
import { OrderState } from '@pages/orders/state/order.store';
import { OrderService } from '@pages/orders/state/order.service';
import { OrderQuery } from '@pages/orders/state/order.query';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { ORDER_STATUS } from '@backend/orders/status.enum';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideCrudOperation(OrderService),
  ],
})
export class OrdersTableComponent implements CrudTableDataProvider<OrderState> {
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

  ORDER_STATUS = ORDER_STATUS;

  constructor(
    protected orderQuery: OrderQuery,
    public crud: CrudOperation<OrderState>,
  ) {
  }

}
