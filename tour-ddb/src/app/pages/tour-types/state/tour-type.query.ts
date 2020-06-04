import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TourTypeStore, TourTypeState } from './tour-type.store';

@Injectable({ providedIn: 'root' })
export class TourTypeQuery extends QueryEntity<TourTypeState> {

  constructor(protected store: TourTypeStore) {
    super(store);
  }

}
