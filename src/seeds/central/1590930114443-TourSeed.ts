import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import * as faker from 'faker/locale/ru';
import { TourEntity } from '../../tours/tour.entity';

export class TourSeed1590930114443 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const tours = new Array(25).fill(1).map(() => {
      return new TourEntity({
        name: faker.lorem.word(),
        price: faker.random.number({ min: 1000, max: 100000, precision: 0.1 }),
        arrival_date: faker.date.past(),
        departure_date: faker.date.future(),
        country_id: faker.random.number({ min: 1, max: 20, precision: 1 }),
        discount_id: faker.random.number({ min: 1, max: 4, precision: 1  }),
        tour_type_id: faker.random.number({ min: 1, max: 2, precision: 1  }),
      });
    });
    return getRepository(TourEntity, 'central-seed').save(tours);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
