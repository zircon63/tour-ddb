import { TourTypeInterface } from '@backend/tours/tour-type.interface';

export interface TourType extends TourTypeInterface {
}

export function createTourType(params: Partial<TourType>) {
  return {} as TourType;
}
