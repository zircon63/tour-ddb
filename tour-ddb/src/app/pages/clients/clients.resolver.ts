import { Injectable } from '@angular/core';
import { Client } from '@pages/clients/state/client.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientService } from '@pages/clients/state/client.service';

@Injectable()
export class ClientsResolver implements Resolve<Client[]> {
  constructor(private clientService: ClientService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Client[]> | Promise<Client[]> | Client[] {
    return this.clientService.get();
  }

}
