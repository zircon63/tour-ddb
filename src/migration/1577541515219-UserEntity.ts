import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
import { Role } from '../users/user-role.enum';

export class UserEntity1577541515219 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [
        {
          name: 'id',
          type: 'int',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true,
        },
        {
          name: 'login',
          isUnique: true,
          isNullable: false,
          type: 'varchar',
          length: '255',
        },
        {
          name: 'password',
          type: 'varchar',
          length: '255',
          isNullable: false,
        },
      ],
    }));

    await queryRunner.createTable(new Table({
      name: 'user_roles',
      foreignKeys: [
        new TableForeignKey({
          name: 'fk_user_role',
          columnNames: ['userId'],
          referencedTableName: 'user',
          referencedColumnNames: ['id'],
          onUpdate: 'NO ACTION',
          onDelete: 'NO ACTION',
        }),
      ],
      columns: [
        {
          name: 'userId',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'role',
          type: 'enum',
          enum: [Role.Admin, Role.Buyer],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('user');
    await queryRunner.dropForeignKey('user_roles', 'fk_user_role');
    await queryRunner.dropTable('user_roles');
  }

}
