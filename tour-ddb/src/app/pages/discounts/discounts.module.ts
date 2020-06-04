import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountsRoutingModule } from './discounts-routing.module';
import { DiscountsTableComponent } from '@pages/discounts/discounts-table/discounts-table.component';
import { UiModule } from '@ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DiscountsTableComponent],
  imports: [
    CommonModule,
    DiscountsRoutingModule,
    UiModule,
    ReactiveFormsModule,
  ],
})
export class DiscountsModule { }
