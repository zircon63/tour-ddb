import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductTableComponent } from './product-table/product-table.component';
import { UiComponentsModule } from '@ui/ui-components/ui-components.module';
import { MaterialModule } from '@ui/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout/typings/esm5';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductTableComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    UiComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [ProductListComponent],
})
export class ProductModule {
}
