import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesTableComponent } from '@pages/countries/countries-table/countries-table.component';
import { CountriesResolver } from '@pages/countries/countries.resolver';

const routes: Routes = [
  {
    path: '',
    component: CountriesTableComponent,
    resolve: {
      data: CountriesResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CountriesResolver],
})
export class CountriesRoutingModule {
}
