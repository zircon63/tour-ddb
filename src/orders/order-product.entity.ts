import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Order } from './order.entity';
import { Product } from '../products/product.entity';
import { Exclude } from 'class-transformer';

@Entity('order_product')
export class OrderProduct {
  @PrimaryColumn('int')
  @Exclude()
  orderId: number;
  @PrimaryColumn('int')
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
