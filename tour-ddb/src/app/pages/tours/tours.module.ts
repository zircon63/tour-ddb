import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToursRoutingModule } from './tours-routing.module';
import { ToursTableComponent } from '@pages/tours/tours-table/tours-table.component';
import { UiModule } from '@ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToursTableComponent],
  imports: [
    CommonModule,
    ToursRoutingModule,
    UiModule,
    ReactiveFormsModule,
  ],
})
export class ToursModule {
}
