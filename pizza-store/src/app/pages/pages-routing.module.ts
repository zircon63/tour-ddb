import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { CanActivateAuthGuard } from '../auth/can-activate-auth.guard';
import { HasRoleGuard } from '../auth/has-role.guard';
import { Role } from '@backend/users/user-role.enum';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [CanActivateAuthGuard],
      },
      {
        path: 'admin-panel',
        loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
        canActivate: [HasRoleGuard],
        canLoad: [HasRoleGuard],
        data: {
          roles: [Role.Admin],
        },
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
        canActivate: [HasRoleGuard],
        canLoad: [HasRoleGuard],
        data: {
          roles: [Role.Buyer],
        },
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
        canActivate: [HasRoleGuard],
        canLoad: [HasRoleGuard],
        data: {
          roles: [Role.Buyer],
        },
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
      },
    ],
    canActivate: [],
    canActivateChild: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

