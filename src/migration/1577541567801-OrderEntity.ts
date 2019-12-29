import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
import { OrderStatus } from '../orders/status.enum';

export class OrderEntity1577541567801 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'order',
      foreignKeys: [
        new TableForeignKey({
          name: 'fk_user_order',
          columnNames: ['userId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'user',
          onUpdate: 'NO ACTION',
          onDelete: 'NO ACTION',
        }),
      ],
      columns: [
        {
          name: 'id',
          type: 'int',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true,
        },
        {
          name: 'date',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'status',
          type: 'enum',
          enum: [OrderStatus.Created, OrderStatus.Process, OrderStatus.Completed],
        },
        {
          name: 'userId',
          type: 'int',
          isNullable: false,
        },
      ],
    }));

    await queryRunner.createTable(new Table({
      name: 'order_product',
      foreignKeys: [
        new TableForeignKey({
          name: 'fk_order',
          columnNames: ['orderId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'order',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }),
        new TableForeignKey({
          name: 'fk_product',
          columnNames: ['productId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'product',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }),
      ],
      columns: [
        {
          name: 'orderId',
          type: 'int',
          isPrimary: true,
          isNullable: false,
        },
        {
          name: 'productId',
          type: 'int',
          isPrimary: true,
          isNullable: false,
        },
        {
          name: 'amount',
          type: 'int',
          isNullable: false,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('order_product', 'fk_order');
    await queryRunner.dropForeignKey('order_product', 'fk_product');
    await queryRunner.dropTable('order_product');
    await queryRunner.dropForeignKey('order', 'fk_user_order');
    await queryRunner.dropTable('order');
  }

}
