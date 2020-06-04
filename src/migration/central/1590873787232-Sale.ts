import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Sale1590873787232 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.createTable(
      new Table({
        name: 'sale',
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
            type: 'date',
          },
          {
            name: 'client_id',
            type: 'integer',
          },
          {
            name: 'employee_id',
            type: 'integer',
          },
          {
            name: 'tour_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_client',
            columnNames: ['client_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'client',
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION',
          },
          {
            name: 'fk_employee',
            columnNames: ['employee_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'employee',
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION',
          },
          {
            name: 'fk_tour',
            columnNames: ['tour_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tour',
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('sale', 'fk_client');
    await queryRunner.dropForeignKey('sale', 'fk_employee');
    await queryRunner.dropForeignKey('sale', 'fk_tour');
    return queryRunner.dropTable('sale');
  }

}
