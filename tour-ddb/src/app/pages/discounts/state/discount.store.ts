import { Injectable } from '@angular/core';
import { Discount } from './discount.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface DiscountState extends EntityState<Discount> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'discount' })
export class DiscountStore extends EntityStore<DiscountState> {

  constructor() {
    super();
  }

}

