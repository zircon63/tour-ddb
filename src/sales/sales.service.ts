import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleEntity } from './sale.entity';

@Injectable()
export class SalesService extends TypeOrmCrudService<SaleEntity> {
  constructor(@InjectRepository(SaleEntity) repo) {
    super(repo);
  }
}
