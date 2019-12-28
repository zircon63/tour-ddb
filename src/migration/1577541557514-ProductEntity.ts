import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class ProductEntity1577541557514 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'product',
      foreignKeys: [
        new TableForeignKey({
          name: 'fk_category',
          columnNames: ['categoryId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'category',
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
          name: 'name',
          type: 'varchar',
          length: '255',
          isNullable: false,
        },
        {
          name: 'description',
          type: 'varchar',
          length: '500',
          isNullable: false,
        },
        {
          name: 'price',
          type: 'float',
          isNullable: false,
        },
        {
          name: 'categoryId',
          type: 'int',
          isNullable: false,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('product', 'fk_category');
    await queryRunner.dropTable('product');
  }

}
