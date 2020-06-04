import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesTableComponent } from '@pages/sales/sales-table/sales-table.component';
import { UiModule } from '@ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SalesTableComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    UiModule,
    ReactiveFormsModule,
  ],
})
export class SalesModule {
}
