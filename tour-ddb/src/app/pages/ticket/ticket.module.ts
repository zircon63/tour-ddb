import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { UiModule } from '@ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateTicketComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    UiModule,
    ReactiveFormsModule,
  ],
})
export class TicketModule {
}
