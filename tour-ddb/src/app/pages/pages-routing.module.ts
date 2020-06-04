import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { CanActivateAuthGuard } from '../auth/can-activate-auth.guard';
import { AuthGuard } from '../auth/auth.guard';

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
        path: 'ticket',
        loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'tour-types',
        loadChildren: () => import('./tour-types/tour-types.module').then(m => m.TourTypesModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'countries',
        loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'discounts',
        loadChildren: () => import('./discounts/discounts.module').then(m => m.DiscountsModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'clients',
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'tours',
        loadChildren: () => import('./tours/tours.module').then(m => m.ToursModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'sales',
        loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule),
        canActivate: [AuthGuard],
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

