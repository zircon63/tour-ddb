import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { UiComponentsModule } from '@ui/ui-components/ui-components.module';
import { MaterialModule } from '@ui/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OrdersTableComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    UiComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class OrdersModule { }
