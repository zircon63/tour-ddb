import { TourInterface } from '@backend/tours/tour.interface';

export interface Tour extends TourInterface {
}

export function createTour(params: Partial<Tour>) {
  return {} as Tour;
}
