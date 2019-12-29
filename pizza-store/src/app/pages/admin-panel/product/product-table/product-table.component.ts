import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CrudOperation, CrudTableDataProvider, provideCrudOperation } from '@ui/ui-components/crud-table/crudOperation';
import { ProductService } from '@pages/products/state/product.service';
import { ProductState } from '@pages/products/state/product.store';
import { ColumnDefinition } from '@ui/ui-components/crud-table/column.definition';
import { Product } from '@pages/products/state/product.model';
import { Observable } from 'rxjs';
import { ProductQuery } from '@pages/products/state/product.query';
import { CategoryQuery } from '@pages/products/state/category.query';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideCrudOperation(ProductService),
  ],
})
export class ProductTableComponent implements CrudTableDataProvider<ProductState> {
  columnDefinitions: ColumnDefinition[] = [
    {
      name: 'id',
      header: 'ID',
    },
    {
      name: 'name',
      header: 'Название',
    },
    {
      name: 'description',
      header: 'Описание',
    },
    {
      name: 'price',
      header: 'Цена',
    },
    {
      name: 'category.name',
      header: 'Категория',
    },
  ];
  data$: Observable<Product[]> = this.productQuery.selectAll();
  categories$ = this.categoryQuery.selectAll();
  compareWith: (o1: any, o2: any) => boolean = (o1, o2) => {
    return o1.id === o1.id;
  };

  constructor(private productQuery: ProductQuery,
              private categoryQuery: CategoryQuery,
              public crud: CrudOperation<ProductState>) {
  }
}
