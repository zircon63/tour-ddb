import { TourInterface } from './tour.interface';
import { CountryEntity } from '../countries/country.entity';
import { TourTypeEntity } from './tour-type.entity';
import { DiscountEntity } from '../discounts/discount.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { SaleEntity } from '../sales/sale.entity';

@Entity({
  name: 'tour',
})
export class TourEntity implements TourInterface {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column('date')
  readonly arrival_date: Date;
  @Column('date')
  readonly departure_date: Date;
  @Column('varchar')
  readonly name: string;
  @Column('float')
  readonly price: number;
  @Column('integer')
  @Exclude()
  readonly country_id: number;
  @Column('integer')
  @Exclude()
  readonly discount_id: number;
  @Column('integer')
  @Exclude()
  readonly tour_type_id: number;
  @ManyToOne(() => TourTypeEntity, tourType => tourType.tours)
  readonly tourType: TourTypeEntity;
  @ManyToOne(() => CountryEntity, country => country.tours)
  readonly country: CountryEntity;
  @ManyToOne(() => DiscountEntity, tourType => tourType.tours)
  discount: DiscountEntity;

  @OneToMany(() => SaleEntity, sale => sale.tour)
  readonly sales: SaleEntity[];

  constructor(data: Partial<TourInterface>) {
    Object.assign(this, data);
  }
}
