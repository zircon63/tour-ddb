import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourTypesRoutingModule } from './tour-types-routing.module';
import { TourTypesTableComponent } from '@pages/tour-types/tour-types-table/tour-types-table.component';
import { UiModule } from '@ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TourTypesTableComponent],
  imports: [
    CommonModule,
    TourTypesRoutingModule,
    UiModule,
    ReactiveFormsModule,
  ],
})
export class TourTypesModule { }
