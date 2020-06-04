import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AllowedCrudOperations, CrudOperation, CrudTableDataProvider, provideCrudOperation } from '@ui/ui-components/crud-table/crudOperation';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { DiscountService } from '@pages/discounts/state/discount.service';
import { DiscountState } from '@pages/discounts/state/discount.store';
import { DiscountQuery } from '@pages/discounts/state/discount.query';

@Component({
  selector: 'app-discounts-table',
  templateUrl: './discounts-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideCrudOperation(DiscountService),
  ],
})
export class DiscountsTableComponent implements CrudTableDataProvider<DiscountState> {
  data$ = this.discountQuery.selectAll();
  columnDefinitions: ColumnDefinition[] = [
    {
      name: 'id',
      header: 'ID',
      display: true
    },
    {
      name: 'amount',
      header: 'Размер скидки - %',
      display: true
    },
    {
      name: 'description',
      header: 'Описание',
      display: true
    },
  ];
  operations: AllowedCrudOperations = {
    add: true,
    delete: true,
    update: true,
  };

  constructor(
    protected discountQuery: DiscountQuery,
    public crud: CrudOperation<DiscountState>,
  ) {
  }

}
