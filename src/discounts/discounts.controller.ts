import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { DiscountEntity } from './discount.entity';
import { DiscountsService } from './discounts.service';

@Crud({
  model: {
    type: DiscountEntity,
  },
  query: {
    join: {
      category: {
        eager: true,
      },
    },
  },
})
@Controller('countries')
export class DiscountsController implements CrudController<DiscountEntity> {
  constructor(public service: DiscountsService) {
  }

  get base(): CrudController<DiscountEntity> {
    return this;
  }
}
