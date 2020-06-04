import { Injectable } from '@angular/core';
import { TourTypeStore, TourTypeState } from './tour-type.store';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
@NgEntityServiceConfig({
  resourceName: 'tour-types'
})
export class TourTypeService extends NgEntityService<TourTypeState> {

  constructor(protected store: TourTypeStore) {
    super(store);
  }

}
