import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { DiscountStore, DiscountState } from './discount.store';

@Injectable({ providedIn: 'root' })
export class DiscountQuery extends QueryEntity<DiscountState> {

  constructor(protected store: DiscountStore) {
    super(store);
  }

}
