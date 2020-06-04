import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesTableComponent } from '@pages/sales/sales-table/sales-table.component';
import { SalesResolver } from '@pages/sales/sales.resolver';

const routes: Routes = [
  {
    path: '',
    component: SalesTableComponent,
    resolve: {
      data: SalesResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SalesResolver],
})
export class SalesRoutingModule {
}
