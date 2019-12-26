import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService extends TypeOrmCrudService<Product> {
  constructor(@InjectRepository(Product) repo) {
    super(repo);
  }
}
