import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '@pages/countries/state/country.model';
import { DiscountService } from '@pages/discounts/state/discount.service';

@Injectable()
export class DiscountsResolver implements Resolve<Country[]> {
  constructor(private discountService: DiscountService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country[]> {
    return this.discountService.get();
  }

}
