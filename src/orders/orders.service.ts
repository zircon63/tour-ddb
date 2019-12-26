import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Order } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersService extends TypeOrmCrudService<Order> {
  constructor(@InjectRepository(Order) repo) {
    super(repo);
  }
}
