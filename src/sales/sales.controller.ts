import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { SaleEntity } from './sale.entity';
import { SalesService } from './sales.service';

@Crud({
  model: {
    type: SaleEntity,
  },
  query: {
    join: {
      category: {
        eager: true,
      },
    },
  },
})
@Controller('sales')
export class SalesController implements CrudController<SaleEntity> {
  constructor(public service: SalesService) {
  }

  get base(): CrudController<SaleEntity> {
    return this;
  }
}
