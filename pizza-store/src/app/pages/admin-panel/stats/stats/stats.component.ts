import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StatsService } from '@pages/admin-panel/stats/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent {
  data$ = this.statsService.getAmountByStatus();
  view = [800, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  yAxisLabel = 'Заказ';
  showYAxisLabel = true;
  xAxisLabel = 'Количество';

  colorScheme = {
    domain: ['#2e7d32', '#c62828', '#1565c0'],
  };

  constructor(private statsService: StatsService) {

  }
}
