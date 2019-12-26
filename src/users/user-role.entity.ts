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

  constructor(userId?: number, role: Role = Role.Buyer) {
    this.userId = userId;
    this.role = role;
  }
}
