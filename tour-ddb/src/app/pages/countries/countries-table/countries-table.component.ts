import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AllowedCrudOperations, CrudOperation, CrudTableDataProvider, provideCrudOperation } from '@ui/ui-components/crud-table/crudOperation';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { CountryService } from '@pages/countries/state/country.service';
import { CountryState } from '@pages/countries/state/country.store';
import { CountryQuery } from '@pages/countries/state/country.query';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideCrudOperation(CountryService),
  ],
})
export class CountriesTableComponent implements CrudTableDataProvider<CountryState> {
  data$ = this.countryQuery.selectAll();
  columnDefinitions: ColumnDefinition[] = [
    {
      name: 'id',
      header: 'ID',
      display: true
    },
    {
      name: 'name',
      header: 'Название',
      display: true
    },
  ];
  operations: AllowedCrudOperations = {
    add: true,
    delete: true,
    update: true,
  };

  constructor(
    protected countryQuery: CountryQuery,
    public crud: CrudOperation<CountryState>,
  ) {
  }

}
