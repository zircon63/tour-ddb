import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { OrdersModule } from '../orders/orders.module';
import { StatsController } from './stats.controller';

@Module({
  imports: [OrdersModule],
  providers: [StatsService],
  controllers: [StatsController],
})
export class StatsModule {
}
