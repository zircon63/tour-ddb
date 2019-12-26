import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserInterface } from './user.interface';
import { UserRole } from './user-role.entity';
import { Exclude, Transform } from 'class-transformer';
import { Order } from '../orders/order.entity';

@Entity({
  name: 'user',
})
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  login: string;

  @Column('varchar')
  @Exclude()
  password: string;

  @OneToMany(type => UserRole, role => role.user, {
    cascade: true,
    eager: true,
  })
  @Transform((entities: UserRole[]) => entities.map(entity => entity.role))
  roles: UserRole[];

  @OneToMany(type => Order, order => order.user)
  orders: Order[];

  constructor(data: UserInterface) {
    if (!!data) {
      this.id = data.id;
      this.login = data.login;
      this.password = data.password;
    }
  }
}
