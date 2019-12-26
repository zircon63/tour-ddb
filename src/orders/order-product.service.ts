import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderProduct } from './order-product.entity';

@Injectable()
export class OrderProductService extends TypeOrmCrudService<OrderProduct> {
  constructor(@InjectRepository(OrderProduct) repo) {
    super(repo);
  }
}
