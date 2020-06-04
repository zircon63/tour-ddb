import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TicketStore, TicketState } from './ticket.store';

@Injectable({ providedIn: 'root' })
export class TicketQuery extends QueryEntity<TicketState> {

  constructor(protected store: TicketStore) {
    super(store);
  }

}
