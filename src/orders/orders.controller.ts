import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderProductDTO } from './dto/order-product.dto';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { User } from '../auth/decorators/user.decorator';
import { OrderProduct } from './order-product.entity';
import { Order } from './order.entity';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../users/user-role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';

@UseGuards(AuthenticatedGuard, RolesGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {
  }

  @Post()
  @Roles(Role.Buyer)
  async create(
    @Body() dto: OrderProductDTO[],
    @User('id') userId: number,
  ) {
    const order = new Order(userId);
    order.products = dto.map(item => new OrderProduct({ productId: item.id, amount: item.amount }));
    return await this.ordersService.create(order);
  }

  @Put('/:id')
  async update(@Param('id') id: string,
               @Body() order: Order) {
    return this.ordersService.update(id, order);
  }

  @Get()
  @Roles(Role.Admin)
  async getAll() {
    return this.ordersService.find();
  }

  @Get('/:id')
  async get(@Param('id') id: string) {
    return this.ordersService.findOne({ id: Number(id) });
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }
}
