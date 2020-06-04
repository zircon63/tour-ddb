import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsTableComponent } from '@pages/clients/clients-table/clients-table.component';
import { UiModule } from '@ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientsTableComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    UiModule,
    ReactiveFormsModule,
  ],
})
export class ClientsModule {
}
