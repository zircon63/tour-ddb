import { Controller, Inject } from '@nestjs/common';
import { Crud, CrudController, CrudService } from '@nestjsx/crud';
import { TourEntity } from './tour.entity';

@Crud({
  model: {
    type: TourEntity,
  },
  query: {
    join: {
      tourType: {
        eager: true,
      },
      country: {
        eager: true,
      },
      sales: {
        eager: true,
      },
    },
  },
})
@Controller('tours')
export class ToursController implements CrudController<TourEntity> {
  constructor(@Inject('TourService') public service: CrudService<TourEntity>) {
  }

  get base(): CrudController<TourEntity> {
    return this;
  }
}
