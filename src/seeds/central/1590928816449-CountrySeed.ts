import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import * as faker from 'faker/locale/ru';
import { CountryEntity } from '../../countries/country.entity';


export class CountrySeed1590928816449 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const countries = new Array(30).fill(1).map(() => {
      return new CountryEntity({
        name: faker.address.country(),
      });
    });
    return getRepository(CountryEntity, 'central-seed').save(countries);
  };

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
