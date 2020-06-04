import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourEntity } from './tour.entity';
import { ToursService } from './tours.service';
import { ToursController } from './tours.controller';
import { TourTypesService } from './tour-types.service';
import { TourTypesController } from './tour-types.controller';
import { TourTypeEntity } from './tour-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TourEntity, TourTypeEntity])],
  providers: [ToursService, TourTypesService],
  controllers: [ToursController, TourTypesController],
})
export class ToursModule {
}
