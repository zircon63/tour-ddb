import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Role } from './user-role.enum';
import { UserEntity } from './user.entity';

@Entity({
  name: 'user_roles',
})
export class UserRole {
  @PrimaryColumn('int')
  userId: number;

  @PrimaryColumn({
    name: 'role',
    type: 'enum',
    enum: Role,
    default: Role.Buyer,
  })
  role: Role;
  @ManyToOne(type => UserEntity, user => user.roles)
  user: UserEntity;

  constructor(data: Partial<UserRole>) {
    Object.assign(this, data);
  }
}
