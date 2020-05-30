import { DiscountInterface } from './discount.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TourEntity } from '../tours/tour.entity';

@Entity({
  name: 'discount',
})
export class DiscountEntity implements DiscountInterface {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column('float')
  readonly amount: number;
  @Column('varchar')
  readonly description: string;

  @OneToMany(() => TourEntity, tour => tour.discount)
  tours: TourEntity[];

  constructor(data: DiscountInterface) {
    Object.assign(this, data);
  }

}
