import { Injectable } from '@angular/core';
import { TicketStore, TicketState } from './ticket.store';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';

@Injectable({ providedIn: 'root' })
@NgEntityServiceConfig({
  resourceName: 'sales'
})
export class TicketService extends NgEntityService<TicketState> {

  constructor(protected store: TicketStore) {
    super(store);
  }

}
