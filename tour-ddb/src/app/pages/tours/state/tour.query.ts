import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TourStore, TourState } from './tour.store';

@Injectable({ providedIn: 'root' })
export class TourQuery extends QueryEntity<TourState> {

  constructor(protected store: TourStore) {
    super(store);
  }

}
