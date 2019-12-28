import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Product } from '../products/product.entity';
import * as faker from 'faker/locale/ru';

export class ProductSeed1577546050057 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const products = new Array(1000).fill(1).map(() => {
      const product = new Product();
      product.name = faker.lorem.word();
      product.description = faker.lorem.sentence(5);
      product.price = faker.random.number({
        min: 1,
        max: 5000,
        precision: 0.1,
      });
      product.categoryId = faker.random.number({
        min: 1,
        max: 5,
        precision: 1,
      });
      return product;
    });
    await getRepository(Product).save(products);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
