import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from './country.entity';

@Injectable()
export class CountriesService extends TypeOrmCrudService<CountryEntity> {
  constructor(@InjectRepository(CountryEntity) repo) {
    super(repo);
  }
}
