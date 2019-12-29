import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { UiComponentsModule } from '@ui/ui-components/ui-components.module';
import { MaterialModule } from '@ui/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductModule } from '@pages/admin-panel/product/product.module';


@NgModule({
  declarations: [OrdersTableComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    UiComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ProductModule,
  ],
})
export class OrdersModule { }
