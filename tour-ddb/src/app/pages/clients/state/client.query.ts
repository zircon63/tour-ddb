import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ClientStore, ClientState } from './client.store';

@Injectable({ providedIn: 'root' })
export class ClientQuery extends QueryEntity<ClientState> {

  constructor(protected store: ClientStore) {
    super(store);
  }

}
