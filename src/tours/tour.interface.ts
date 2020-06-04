export interface TourInterface {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly departure_date: Date;
  readonly arrival_date: Date;
  readonly tour_type_id: number;
  readonly country_id: number;
  readonly discount_id: number;
}
