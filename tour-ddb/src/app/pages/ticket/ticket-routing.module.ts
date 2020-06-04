import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketComponent } from '@pages/ticket/create-ticket/create-ticket.component';
import { TicketResolver } from '@pages/ticket/ticket.resolver';

const routes: Routes = [
  {
    path: '',
    component: CreateTicketComponent,
    resolve: {
      data: TicketResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TicketResolver],
})
export class TicketRoutingModule {
}
