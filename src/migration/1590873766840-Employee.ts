import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Employee1590873766840 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.createTable(
      new Table({
        name: 'employee',
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
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'login',
            type: 'varchar',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.dropTable('employee');
  }

}
