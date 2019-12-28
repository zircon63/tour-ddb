import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Category } from '../categories/category.entity';
import * as faker from 'faker/locale/ru';

export class CategorySeed1577546042423 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const categories = new Array(5).fill(1).map(() => {
      const category = new Category();
      category.name = faker.lorem.word();
      return category;
    });
    await getRepository(Category).save(categories);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
