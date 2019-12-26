import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class CategoriesService extends TypeOrmCrudService<Category> {
  constructor(@InjectRepository(Category) repo) {
    super(repo);
  }
}
