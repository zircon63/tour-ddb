import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import * as faker from 'faker/locale/ru';
import { ClientEntity } from '../../clients/client.entity';

export class ClientSeed1590928841657 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const clients = [
      new ClientEntity(
        {
          name: faker.name.firstName(),
          phone: faker.phone.phoneNumber(),
          surname: faker.name.lastName(),
          passport: faker.finance.account(12),
        },
      ),
    ];
    return getRepository(ClientEntity, 'local2-seed').save(clients);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
