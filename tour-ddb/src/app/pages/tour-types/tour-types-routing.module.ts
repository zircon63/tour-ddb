import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourTypesTableComponent } from '@pages/tour-types/tour-types-table/tour-types-table.component';
import { TourTypesResolver } from '@pages/tour-types/tour-types.resolver';

const routes: Routes = [
  {
    path: '',
    component: TourTypesTableComponent,
    resolve: {
      data: TourTypesResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TourTypesResolver],
})
export class TourTypesRoutingModule {
}
