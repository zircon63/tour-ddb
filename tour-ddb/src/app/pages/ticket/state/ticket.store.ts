import { Injectable } from '@angular/core';
import { Ticket } from './ticket.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface TicketState extends EntityState<Ticket> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ticket' })
export class TicketStore extends EntityStore<TicketState> {

  constructor() {
    super();
  }

}

