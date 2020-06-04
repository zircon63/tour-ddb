import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AllowedCrudOperations, CrudOperation, CrudTableDataProvider, provideCrudOperation } from '@ui/ui-components/crud-table/crudOperation';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { TourTypeState } from '@pages/tour-types/state/tour-type.store';
import { TourTypeService } from '@pages/tour-types/state/tour-type.service';
import { TourTypeQuery } from '@pages/tour-types/state/tour-type.query';

@Component({
  selector: 'app-tour-types-table',
  templateUrl: './tour-types-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideCrudOperation(TourTypeService),
  ],
})
export class TourTypesTableComponent implements CrudTableDataProvider<TourTypeState> {
  data$ = this.tourTypeQuery.selectAll();
  columnDefinitions: ColumnDefinition[] = [
    {
      name: 'id',
      header: 'ID',
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
    protected tourTypeQuery: TourTypeQuery,
    public crud: CrudOperation<TourTypeState>,
  ) {
  }

}
