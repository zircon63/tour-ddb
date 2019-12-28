import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CategoryEntity1577541545157 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'category',
      columns: [
        {
          name: 'id',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true,
          type: 'int',
        },
        {
          name: 'name',
          type: 'varchar',
          length: '255',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('category');
  }

}
