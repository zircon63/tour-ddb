import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserEntity } from '../users/user.entity';
import { hashEqual } from './crypto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService,
              private readonly configService: ConfigService) {
  }

  public async signUp(user: UserEntity) {
    user = await this.usersService.create(user);
    return user;
  }

  async validateUser(username: string, password: string): Promise<any> {
    return await this.usersService.findOneOrFail({ login: username })
      .then(user => {
        const isEqual = hashEqual(password, this.configService.get('auth.salt'), user.password);
        return isEqual ? user : Promise.reject();
      })
      .catch(() => Promise.reject(new BadRequestException('Неверный пользователь или пароль')));
  }
}
