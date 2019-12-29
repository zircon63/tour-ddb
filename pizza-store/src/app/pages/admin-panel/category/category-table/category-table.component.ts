import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { CategoryQuery } from '@pages/products/state/category.query';
import { CategoryService } from '@pages/products/state/category.service';
import { CrudOperation, CrudTableDataProvider, provideCrudOperation } from '@ui/ui-components/crud-table/crudOperation';
import { CategoryState } from '@pages/products/state/category.store';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideCrudOperation(CategoryService),
  ],
})
export class CategoryTableComponent implements CrudTableDataProvider<CategoryState> {
  data$ = this.categoryQuery.selectAll();
  columnDefinitions: ColumnDefinition[] = [
    {
      name: 'id',
      header: 'ID',
    },
    {
      name: 'name',
      header: 'Название',
    },
  ];

  constructor(private categoryQuery: CategoryQuery,
              public crud: CrudOperation<CategoryState>) {
  }

}
