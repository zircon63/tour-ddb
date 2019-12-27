import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from '@pages/orders/orders/orders.component';
import { OrdersUserResolver } from '@pages/orders/orders-user.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    resolve: {
      data: OrdersUserResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
}
