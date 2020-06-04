import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Tour } from '@pages/tours/state/tour.model';
import { Client } from '@pages/clients/state/client.model';
import { forkJoin, Observable } from 'rxjs';
import { TourService } from '@pages/tours/state/tour.service';
import { ClientService } from '@pages/clients/state/client.service';

type TicketData = [
  Tour[],
  Client[]
];

export class TicketResolver implements Resolve<TicketData> {
  constructor(private tourService: TourService,
              private clientService: ClientService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TicketData> | Promise<TicketData> | TicketData {
    return forkJoin([
      this.tourService.get<Tour[]>(),
      this.clientService.get<Client[]>(),
    ]);
  }

}
