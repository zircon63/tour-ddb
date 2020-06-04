import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToursTableComponent } from '@pages/tours/tours-table/tours-table.component';
import { ToursResolver } from '@pages/tours/tours.resolver';

const routes: Routes = [
  {
    path: '',
    component: ToursTableComponent,
    resolve: {
      data: ToursResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ToursResolver],
})
export class ToursRoutingModule {
}
