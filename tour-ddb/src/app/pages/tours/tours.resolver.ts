import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { Tour } from '@pages/tours/state/tour.model';
import { TourService } from '@pages/tours/state/tour.service';
import { TourTypeService } from '@pages/tour-types/state/tour-type.service';
import { TourType } from '@pages/tour-types/state/tour-type.model';
import { DiscountService } from '@pages/discounts/state/discount.service';
import { CountryService } from '@pages/countries/state/country.service';
import { Country } from '@pages/countries/state/country.model';
import { Discount } from '@pages/discounts/state/discount.model';

type TourData = [Tour[], TourType[], Country[], Discount[]];

@Injectable()
export class ToursResolver implements Resolve<TourData> {
  constructor(private tourService: TourService,
              private tourTypeService: TourTypeService,
              private discountService: DiscountService,
              private countryService: CountryService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TourData> {
    return forkJoin([
      this.tourService.get<Tour[]>(),
      this.tourTypeService.get<TourType[]>(),
      this.countryService.get<Country[]>(),
      this.discountService.get<Discount[]>(),
    ]);
  }

}
