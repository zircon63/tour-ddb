import { CountryInterface } from './country.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TourEntity } from '../tours/tour.entity';

@Entity({
  name: 'country',
})
export class CountryEntity implements CountryInterface {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column('varchar')
  readonly name: string;
  @OneToMany(() => TourEntity, tour => tour.country)
  tours: TourEntity[];
}
