import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderProduct } from './order-product.entity';
import { OrderProductService } from './order-product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderProduct])],
  providers: [OrdersService, OrderProductService],
  controllers: [OrdersController],
  exports: [OrdersService],
})
export class OrdersModule {
}
