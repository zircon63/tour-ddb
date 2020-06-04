import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TourEntity } from '../tour.entity';
import { Injectable } from '@nestjs/common';
import { CrudRequest } from '@nestjsx/crud';

@Injectable()
export class TourServiceCentral extends TypeOrmCrudService<TourEntity> {
  constructor(@InjectRepository(TourEntity) repo) {
    super(repo);
  }

  async getMany(req: CrudRequest) {
    req.options.query.join.discount = {
      eager: true,
    };
    return super.getMany(req);
  }
}
