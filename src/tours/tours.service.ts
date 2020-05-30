import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TourEntity } from './tour.entity';

@Injectable()
export class ToursService extends TypeOrmCrudService<TourEntity> {
  constructor(@InjectRepository(TourEntity) repo) {
    super(repo);
  }
}
