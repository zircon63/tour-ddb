import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Tour1590873783370 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.createTable(
      new Table({
        name: 'tour',
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
            name: 'price',
            type: 'float',
          },
          {
            name: 'departure_date',
            type: 'date',
          },
          {
            name: 'arrival_date',
            type: 'date',
          },
          {
            name: 'tour_type_id',
            type: 'integer',
          },
          {
            name: 'country_id',
            type: 'integer',
          },
          {
            name: 'discount_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_tour_type',
            columnNames: ['tour_type_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tour_type',
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION',
          },
          {
            name: 'fk_country',
            columnNames: ['country_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'country',
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION',
          }
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('tour', 'fk_tour_type');
    await queryRunner.dropForeignKey('tour', 'fk_country');
    return queryRunner.dropTable('tour');
  }

}
