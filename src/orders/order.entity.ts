import { OrderStatus } from './status.enum';
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderProduct } from './order-product.entity';
import { UserEntity } from '../users/user.entity';
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
  @ManyToOne(type => UserEntity, user => user.orders)
  user: UserEntity;
  @OneToMany(type => OrderProduct, products => products.order, {
    cascade: true,
    eager: true,
  })
  products: OrderProduct[];

  constructor(userId: number) {
    this.userId = userId;
  }

  @BeforeInsert()
  setDate() {
    this.date = moment().format('YYYY-MM-DD HH:mm:ss');
  }
}
