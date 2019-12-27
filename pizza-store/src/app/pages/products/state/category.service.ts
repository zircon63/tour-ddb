import { Injectable } from '@angular/core';
import { CategoryStore, CategoryState } from './category.store';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
@NgEntityServiceConfig({
  resourceName: 'categories'
})
export class CategoryService extends NgEntityService<CategoryState> {

  constructor(protected store: CategoryStore) {
    super(store);
  }

}
