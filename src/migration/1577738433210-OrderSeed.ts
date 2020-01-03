import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Order } from '../orders/order.entity';
import * as faker from 'faker';
import { OrderProduct } from '../orders/order-product.entity';
import { OrderStatus } from '../orders/status.enum';

export class OrderSeed1577738433210 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const orders = new Array(50).fill(1).map(() => {
      const order = new Order(2);
      order.status = faker.random.arrayElement(Object.values(OrderStatus));
      order.userId = 3;
      order.products = new Array(faker.random.number({
        min: 1,
        max: 5,
        precision: 1,
      })).map(() => {
        const product = new OrderProduct({
          productId: faker.random.number({
            min: 1,
            max: 5000,
            precision: 1,
          }),
          amount: faker.random.number({
            min: 1,
            max: 500,
            precision: 1,
          }),
        });
        return product;
      });
      return order;
    });
    await getRepository(Order).save(orders);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
