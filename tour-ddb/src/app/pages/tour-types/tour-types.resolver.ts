import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '@pages/countries/state/country.model';
import { TourTypeService } from '@pages/tour-types/state/tour-type.service';

@Injectable()
export class TourTypesResolver implements Resolve<Country[]> {
  constructor(private tourTypeService: TourTypeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country[]> {
    return this.tourTypeService.get();
  }

}
