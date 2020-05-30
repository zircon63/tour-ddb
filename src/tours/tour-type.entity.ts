import { TourTypeInterface } from './tour-type.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TourEntity } from './tour.entity';

@Entity({
  name: 'tour_type',
})
export class TourTypeEntity implements TourTypeInterface {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column('varchar')
  readonly description: string;

  @OneToMany(() => TourEntity, tour => tour.tourType)
  tours: TourEntity[];

  constructor(data: TourTypeInterface) {
    Object.assign(this, data);
  }

}
