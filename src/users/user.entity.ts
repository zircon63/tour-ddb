import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserInterface } from './user.interface';

@Entity({
  name: 'user',
})
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  login: string;

  @Column('varchar')
  password: string;

  constructor(data: UserInterface) {
    if (!!data) {
      this.id = data.id;
      this.login = data.login;
      this.password = data.password;
    }
  }
}
