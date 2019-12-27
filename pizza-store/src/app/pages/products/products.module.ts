import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ProductsComponent } from './products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@ui/material.module';
import { PriceFilterComponent } from '@pages/products/price-filter/price-filter.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [ProductCardComponent, SearchFormComponent, ProductsComponent, PriceFilterComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatTooltipModule,
    MatCardModule,
    FlexLayoutModule,
    MatProgressBarModule,
  ],
})
export class ProductsModule {
}
