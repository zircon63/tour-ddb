import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '@pages/countries/state/country.model';
import { CountryService } from '@pages/countries/state/country.service';

@Injectable()
export class CountriesResolver implements Resolve<Country[]> {
  constructor(private countryService: CountryService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country[]> {
    return this.countryService.get();
  }

}
