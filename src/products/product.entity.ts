import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderProduct } from '../orders/order-product.entity';
import { Category } from '../categories/category.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar')
  name: string;
  @Column('varchar')
  description: string;
  @Column('int')
  price: number;

  @OneToOne(type => Category, { cascade: true, eager: true })
  @JoinColumn()
  category: Category;

  @OneToMany(type => OrderProduct, orderProduct => orderProduct.product)
  orderProducts: OrderProduct[];
}
