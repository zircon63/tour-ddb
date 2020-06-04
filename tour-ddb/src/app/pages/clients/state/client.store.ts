import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface ClientState extends EntityState<Client> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'client' })
export class ClientStore extends EntityStore<ClientState> {

  constructor() {
    super();
  }

}

