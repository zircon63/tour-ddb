import { OrderStatus } from './status.enum';
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderProduct } from './order-product.entity';
import { User } from '../users/user.entity';
import * as moment from 'moment';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'timestamp',
  })
  date: string;
  @Column({
    name: 'status',
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.Created,
  })
  status: OrderStatus;
  @Column('int')
  userId: number;
  @ManyToOne(type => User, user => user.orders)
  user: User;
  @OneToMany(type => OrderProduct, products => products.order)
  products: OrderProduct[];

  @BeforeInsert()
  setDate() {
    this.date = moment().format('YYYY-MM-DD HH:mm:ss');
  }
}
