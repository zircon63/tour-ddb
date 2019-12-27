import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartRoutingModule } from '@pages/cart/cart-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@ui/material.module';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class CartModule {
}
