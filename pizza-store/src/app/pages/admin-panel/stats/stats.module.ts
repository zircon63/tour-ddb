import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats/stats.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [StatsComponent],
  imports: [
    CommonModule,
    StatsRoutingModule,
    NgxChartsModule,
  ],
})
export class StatsModule { }
