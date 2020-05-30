import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DiscountEntity } from './discount.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DiscountsService extends TypeOrmCrudService<DiscountEntity> {
  constructor(@InjectRepository(DiscountEntity) repo) {
    super(repo);
  }
}
