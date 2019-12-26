import { Controller, Req, UseGuards } from '@nestjs/common';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { Order } from './order.entity';
import { OrdersService } from './orders.service';
import { OrderProductDTO } from './dto/order-product.dto';
import { Request } from 'express';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { User } from '../users/user.entity';

@Crud({
  model: {
    type: Order,
  },
})
@UseGuards(AuthenticatedGuard)
@Controller('orders')
export class OrdersController implements CrudController<Order> {
  constructor(public service: OrdersService) {
  }

  @Override()
  async createOne(
    @ParsedRequest() crudRequest: CrudRequest,
    @ParsedBody() dto: OrderProductDTO[],
    @Req() request: Request,
  ) {
    const user = request.user as User;
    const order = new Order();
    order.userId = user.id;
    await this.base.createOneBase(crudRequest, order);
    return order;
  }

  get base(): CrudController<Order> {
    return this;
  }
}
