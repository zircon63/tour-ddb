import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { MaterialModule } from '@ui/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class OrdersModule { }
