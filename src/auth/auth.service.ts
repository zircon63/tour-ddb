import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { hashEqual } from './crypto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {
  }

  public async signUp(user: User) {
    user = await this.usersService.create(user);
    return user;
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ login: username });
    const isEqual = hashEqual(password, user.password);
    if (isEqual) {
      return user;
    }
    return null;
  }
}
