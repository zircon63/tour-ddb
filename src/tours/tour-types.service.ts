import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TourTypeEntity } from './tour-type.entity';

@Injectable()
export class TourTypesService extends TypeOrmCrudService<TourTypeEntity> {
  constructor(@InjectRepository(TourTypeEntity) repo) {
    super(repo);
  }
}
