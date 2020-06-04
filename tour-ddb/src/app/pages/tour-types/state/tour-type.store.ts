import { Injectable } from '@angular/core';
import { TourType } from './tour-type.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface TourTypeState extends EntityState<TourType> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tour-type' })
export class TourTypeStore extends EntityStore<TourTypeState> {

  constructor() {
    super();
  }

}

