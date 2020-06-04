import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AllowedCrudOperations, CrudOperation, CrudTableDataProvider, provideCrudOperation } from '@ui/ui-components/crud-table/crudOperation';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { TourState } from '@pages/tours/state/tour.store';
import { TourQuery } from '@pages/tours/state/tour.query';
import { TourTypeQuery } from '@pages/tour-types/state/tour-type.query';
import { CountryQuery } from '@pages/countries/state/country.query';
import { DiscountQuery } from '@pages/discounts/state/discount.query';
import { TourService } from '@pages/tours/state/tour.service';
import { compareWith } from '@ui/shared/compareWith';

export const TOUR_COLUMNS: ColumnDefinition[] = [
  {
    name: 'id',
    header: 'ID',
    display: true,
  },
  {
    name: 'name',
    header: 'Название',
    display: true,
  },
  {
    name: 'price',
    header: 'Цена',
    display: true,
  },
  {
    name: 'departure_date',
    header: 'Время прибытия',
    display: true,
  },
  {
    name: 'arrival_date',
    header: 'Время отправления',
    display: true,
  },
  {
    name: 'tourType.description',
    header: 'Тип Тура',
    display: true,
  },
  {
    name: 'tourType',
    header: 'Тип Тура',
    display: false,
  },
  {
    name: 'discount.description',
    header: 'Скидка',
    display: true,
  },
  {
    name: 'discount',
    header: 'Скидка',
    display: false,
  },
  {
    name: 'country.name',
    header: 'Страна',
    display: true,
  },
  {
    name: 'country',
    header: 'Страна',
    display: false,
  },
];
@Component({
  selector: 'app-tours-table',
  templateUrl: './tours-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideCrudOperation(TourService),
  ],
})
export class ToursTableComponent implements CrudTableDataProvider<TourState> {
  data$ = this.tourQuery.selectAll();
  tourTypes$ = this.tourTypeQuery.selectAll();
  discounts$ = this.discountQuery.selectAll();
  countries$ = this.countryQuery.selectAll();
  columnDefinitions: ColumnDefinition[] = TOUR_COLUMNS;
  operations: AllowedCrudOperations = {
    add: true,
    delete: true,
    update: true,
  };

  compareWith = compareWith;

  constructor(
    protected tourQuery: TourQuery,
    protected tourTypeQuery: TourTypeQuery,
    protected countryQuery: CountryQuery,
    protected discountQuery: DiscountQuery,
    public crud: CrudOperation<TourState>,
  ) {
  }

}
