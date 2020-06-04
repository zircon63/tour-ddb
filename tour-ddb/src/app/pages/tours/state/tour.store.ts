import { Injectable } from '@angular/core';
import { Tour } from './tour.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface TourState extends EntityState<Tour> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tour' })
export class TourStore extends EntityStore<TourState> {

  constructor() {
    super();
  }

}

