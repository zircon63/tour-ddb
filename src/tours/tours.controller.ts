import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { TourEntity } from './tour.entity';
import { ToursService } from './tours.service';

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
      discount: {
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
  constructor(public service: ToursService) {
  }

  get base(): CrudController<TourEntity> {
    return this;
  }
}
