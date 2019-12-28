import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { UserRole } from '../users/user-role.entity';
import { Role } from '../users/user-role.enum';

export class UserSeed1577546018674 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const admin = new UserEntity({
      login: 'admin',
      password: 'IBBWeSDz6cNybsohd1aPvw==',
    });
    const buyer = new UserEntity({
      login: 'buyer',
      password: 'IBBWeSDz6cNybsohd1aPvw==',
    });
    admin.roles = [
      new UserRole({
        role: Role.Admin,
      }),
    ];
    buyer.roles = [
      new UserRole({
        role: Role.Buyer,
      }),
    ];
    await getRepository(UserEntity).save([admin, buyer]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await getRepository(UserEntity).delete({
      login: 'admin',
    });
  }

}
