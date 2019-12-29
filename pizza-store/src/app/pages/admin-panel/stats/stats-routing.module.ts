import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from '@pages/admin-panel/stats/stats/stats.component';

const routes: Routes = [
  {
    path: '',
    component: StatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatsRoutingModule {
}
