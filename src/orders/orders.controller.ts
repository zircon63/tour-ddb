import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Order } from './order.entity';
import { OrdersService } from './orders.service';

@Crud({
  model: {
    type: Order,
  },
})
@Controller('orders')
export class OrdersController implements CrudController<Order> {
  constructor(public service: OrdersService) {
  }

  get base(): CrudController<Order> {
    return this;
  }
}
