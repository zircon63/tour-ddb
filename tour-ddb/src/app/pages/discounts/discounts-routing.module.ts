import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountsTableComponent } from '@pages/discounts/discounts-table/discounts-table.component';
import { DiscountsResolver } from '@pages/discounts/discounts.resolver';

const routes: Routes = [
  {
    path: '',
    component: DiscountsTableComponent,
    resolve: {
      data: DiscountsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DiscountsResolver],
})
export class DiscountsRoutingModule {
}
