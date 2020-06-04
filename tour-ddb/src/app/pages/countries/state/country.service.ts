import { Injectable } from '@angular/core';
import { CountryStore, CountryState } from './country.store';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
@NgEntityServiceConfig({
  resourceName: 'countries'
})
export class CountryService extends NgEntityService<CountryState> {

  constructor(protected store: CountryStore) {
    super(store);
  }

}
