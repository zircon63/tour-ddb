import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryTableComponent } from '@pages/admin-panel/category/category-table/category-table.component';
import { CategoryResolver } from '@pages/admin-panel/category/category.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CategoryTableComponent,
    resolve: {
      data: CategoryResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CategoryResolver,
  ],
})
export class CategoryRoutingModule {
}
