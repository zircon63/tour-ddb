import { Injectable } from '@angular/core';
import { TourState, TourStore } from './tour.store';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
@NgEntityServiceConfig({
  resourceName: 'tours',
})
export class TourService extends NgEntityService<TourState> {

  constructor(protected store: TourStore) {
    super(store);
  }

}
