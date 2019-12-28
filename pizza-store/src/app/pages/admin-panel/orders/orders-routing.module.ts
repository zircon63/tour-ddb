import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersTableComponent } from '@pages/admin-panel/orders/orders-table/orders-table.component';
import { OrdersResolver } from '@pages/admin-panel/orders/orders.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: OrdersTableComponent,
    resolve: {
      data: OrdersResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OrdersResolver],
})
export class OrdersRoutingModule {
}
