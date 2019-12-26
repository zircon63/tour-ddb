import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderProduct } from './order-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderProduct])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {
}
