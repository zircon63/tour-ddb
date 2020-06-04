import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsTableComponent } from '@pages/clients/clients-table/clients-table.component';
import { ClientsResolver } from '@pages/clients/clients.resolver';

const routes: Routes = [
  {
    path: '',
    component: ClientsTableComponent,
    resolve: {
      data: ClientsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ClientsResolver],
})
export class ClientsRoutingModule {
}
