import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {
    super();
  }

  serializeUser(user: User, done: CallableFunction) {
    done(null, user.id);
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    return await this.usersService.findOneOrFail({ id: Number(userId) })
      .then(user => done(null, user))
      .catch(error => done(error));
  }
}
