import { Injectable } from '@angular/core';
import { SaleStore, SaleState } from './sale.store';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
@NgEntityServiceConfig({
  resourceName: 'sales',
})
export class SaleService extends NgEntityService<SaleState> {

  constructor(protected store: SaleStore) {
    super(store);
  }

}
