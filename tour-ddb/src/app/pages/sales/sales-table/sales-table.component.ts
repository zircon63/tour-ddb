import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AllowedCrudOperations, CrudOperation, CrudTableDataProvider, provideCrudOperation } from '@ui/ui-components/crud-table/crudOperation';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { SaleService } from '@pages/sales/state/sale.service';
import { SaleState } from '@pages/sales/state/sale.store';
import { SaleQuery } from '@pages/sales/state/sale.query';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideCrudOperation(SaleService),
  ],
})
export class SalesTableComponent implements CrudTableDataProvider<SaleState> {
  data$ = this.saleQuery.selectAll();
  columnDefinitions: ColumnDefinition[] = [
    {
      name: 'id',
      header: 'ID',
      display: true,
    },
    {
      name: 'date',
      header: 'Дата',
      display: true,
    },
    {
      name: 'client.name',
      header: 'Имя клиента',
      display: true,
    },
    {
      name: 'employee.name',
      header: 'Имя Сотрудника',
      display: true,
    },
    {
      name: 'tour.name',
      header: 'Название тура',
      display: true,
    },
    {
      name: 'tour.price',
      header: 'Цена тура',
      display: true,
    },
  ];
  operations: AllowedCrudOperations = {
    add: false,
    delete: true,
    update: false,
  };

  constructor(
    protected saleQuery: SaleQuery,
    public crud: CrudOperation<SaleState>,
  ) {
  }

}
