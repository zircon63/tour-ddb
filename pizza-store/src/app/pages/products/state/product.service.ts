import { Injectable } from '@angular/core';
import { ProductStore, ProductState } from './product.store';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
@NgEntityServiceConfig({
  resourceName: 'products'
})
export class ProductService extends NgEntityService<ProductState> {

  constructor(protected store: ProductStore) {
    super(store);
  }

}
