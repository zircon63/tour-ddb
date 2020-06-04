import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SaleStore, SaleState } from './sale.store';

@Injectable({ providedIn: 'root' })
export class SaleQuery extends QueryEntity<SaleState> {

  constructor(protected store: SaleStore) {
    super(store);
  }

}
