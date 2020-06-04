import { Injectable } from '@angular/core';
import { Sale } from './sale.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface SaleState extends EntityState<Sale> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'sale' })
export class SaleStore extends EntityStore<SaleState> {

  constructor() {
    super();
  }

}

