import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductTableComponent } from '@pages/admin-panel/product/product-table/product-table.component';
import { ProductsResolver } from '@pages/admin-panel/product/products.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ProductTableComponent,
    resolve: {
      data: ProductsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductsResolver],
})
export class ProductRoutingModule {
}
