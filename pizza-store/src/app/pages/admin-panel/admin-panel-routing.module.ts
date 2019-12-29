import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
      },
      {
        path: 'stats',
        loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {
}
