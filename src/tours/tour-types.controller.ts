import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { TourTypesService } from './tour-types.service';
import { TourTypeEntity } from './tour-type.entity';

@Crud({
  model: {
    type: TourTypeEntity,
  },
  query: {
    join: {},
  },
})
@Controller('tour-types')
export class TourTypesController implements CrudController<TourTypeEntity> {
  constructor(public service: TourTypesService) {
  }

  get base(): CrudController<TourTypeEntity> {
    return this;
  }
}
