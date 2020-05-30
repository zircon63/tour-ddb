import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourEntity } from './tour.entity';
import { ToursService } from './tours.service';
import { ToursController } from './tours.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TourEntity])],
  providers: [ToursService],
  controllers: [ToursController],
})
export class ToursModule {
}
