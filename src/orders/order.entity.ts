import { OrderStatus } from './status.enum';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderProduct } from './order-product.entity';
import { User } from '../users/user.entity';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('date')
  date: Date;
  @Column({
    name: 'status',
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.Created,
  })
  status: OrderStatus;
  @ManyToOne(type => User, user => user.orders)
  user: User;
  @OneToMany(type => OrderProduct, products => products.order)
  products: OrderProduct[];
}
