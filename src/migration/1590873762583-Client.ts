import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Client1590873762583 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.createTable(
      new Table({
        name: 'client',
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
          },
          {
            name: 'surname',
            type: 'varchar',
          },
          {
            name: 'passport',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.dropTable('client');
  }

}
