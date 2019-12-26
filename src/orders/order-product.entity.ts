import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';
import { Product } from '../products/product.entity';
import { Exclude } from 'class-transformer';

@Entity('order_product')
export class OrderProduct {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;
  @Column('int')
  @Exclude()
  orderId: number;
  @Column('int')
  @Exclude()
  productId: number;
  @Column('int')
  amount: number;

  @ManyToOne(type => Order, order => order.products)
  order: Order;

  @ManyToOne(type => Product, product => product.orderProducts, { eager: true })
  product: Product;

  constructor(data: Partial<OrderProduct>) {
    Object.assign(this, data);
  }
}
