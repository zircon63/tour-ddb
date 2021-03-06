import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { TourTypeEntity } from '../../tours/tour-type.entity';

export class TourTypeSeed1590928804739 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const tourTypes = [
      new TourTypeEntity(
        {
          description: 'Индивидуальный',
        },
      ),
      new TourTypeEntity(
        {
          description: 'Групповой',
        },
      ),
      new TourTypeEntity(
        {
          description: 'Локальный',
        },
      ),
    ];
    return getRepository(TourTypeEntity, 'local1-seed').save(tourTypes);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
