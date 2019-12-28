import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar')
  name: string;
  @OneToMany(type => Product, product => product.category, {
    primary: true,
  })
  products: Product[];
}
