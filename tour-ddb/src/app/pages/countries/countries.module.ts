import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesTableComponent } from '@pages/countries/countries-table/countries-table.component';
import { UiModule } from '@ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CountriesTableComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    UiModule,
    ReactiveFormsModule,
  ],
})
export class CountriesModule { }
