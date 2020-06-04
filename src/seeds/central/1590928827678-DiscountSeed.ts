import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { DiscountEntity } from '../../discounts/discount.entity';

export class DiscountSeed1590928827678 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const discounts = [
      new DiscountEntity({
        amount: 0.15,
        description: 'Индивидуальный тур - сезон',
      }),
      new DiscountEntity({
        amount: 0.1,
        description: 'Групповой тур - сезон',
      }),
      new DiscountEntity({
        amount: 0.05,
        description: 'Оформление через сайт',
      }),
      new DiscountEntity({
        amount: 0.07,
        description: 'Предоплата для групповых туров от 2х человек',
      }),
      new DiscountEntity({
        amount: 0.17,
        description: 'Предоплата для индивидуальных туров',
      }),
    ];
    return getRepository(DiscountEntity, 'central-seed').save(discounts);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
