import { Injectable } from '@angular/core';
import { DiscountState, DiscountStore } from './discount.store';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
@NgEntityServiceConfig({
  resourceName: 'discounts',
})
export class DiscountService extends NgEntityService<DiscountState> {

  constructor(protected store: DiscountStore) {
    super(store);
  }

}
