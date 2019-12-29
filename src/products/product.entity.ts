import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../categories/category.entity';
import { OrderProduct } from '../orders/order-product.entity';
import { Exclude } from 'class-transformer';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar')
  name: string;
  @Column('varchar')
  description: string;
  @Column('float')
  price: number;
  @Column('int')
  @Exclude()
  categoryId: number;

  @ManyToOne(type => Category, category => category.products, {
    primary: true,
  })
  category: Category;

  @OneToMany(type => OrderProduct, orderProduct => orderProduct.product)
  orderProducts: OrderProduct[];
}
