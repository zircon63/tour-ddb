import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourEntity } from './tour.entity';
import { ToursController } from './tours.controller';
import { TourTypesService } from './tour-types.service';
import { TourTypesController } from './tour-types.controller';
import { TourTypeEntity } from './tour-type.entity';
import { DiscountsModule } from '../discounts/discounts.module';
import { ConfigService } from '@nestjs/config';
import { CrudService } from '@nestjsx/crud';
import { TourServiceLocal } from './tour-service/tour-service.local';
import { TourServiceCentral } from './tour-service/tour-service.central';

@Module({
  imports: [
    TypeOrmModule.forFeature([TourEntity, TourTypeEntity]),
    DiscountsModule],
  providers: [
    {
      provide: 'TourService',
      useFactory: (config: ConfigService, local, central): CrudService<TourEntity> => {
        const type = config.get<'local' | 'central'>('type');
        switch (type) {
          case 'local':
            return local;
          case 'central':
            return central;
        }
      },
      inject: [ConfigService, TourServiceLocal, TourServiceCentral],
    },
    TourServiceLocal,
    TourServiceCentral,
    TourTypesService],
  controllers: [ToursController, TourTypesController],
})
export class ToursModule {
}
