import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SaleService } from '@pages/sales/state/sale.service';
import { Sale } from '@pages/sales/state/sale.model';

@Injectable()
export class SalesResolver implements Resolve<Sale[]> {
  constructor(private saleService: SaleService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sale[]> {
    return this.saleService.get();
  }

}
