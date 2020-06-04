import { Injectable } from '@angular/core';
import { ClientStore, ClientState } from './client.store';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
@NgEntityServiceConfig({
  resourceName: 'clients'
})
export class ClientService extends NgEntityService<ClientState> {

  constructor(protected store: ClientStore) {
    super(store);
  }

}
