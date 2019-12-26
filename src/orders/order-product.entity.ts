import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Order } from './order.entity';
import { Product } from '../products/product.entity';

@Entity('order_product')
export class OrderProduct {
  @PrimaryColumn('int')
  orderId: number;
  @PrimaryColumn('int')
  productId: number;
  @Column('int')
  amount: number;
  @ManyToOne(type => Order, order => order.products)
  order: Order;
  @ManyToOne(type => Product, product => product.orderProducts)
  product: Product;
}
