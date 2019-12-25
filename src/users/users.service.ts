import { BadRequestException, Injectable } from '@nestjs/common';
import { DeepPartial, getConnection, Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { generateHash } from '../auth/crypto';
import { ConfigService } from '@nestjs/config';
import { UserRole } from './user-role.entity';
import { Role } from './user-role.enum';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(UserRole)
    private readonly roleRepository: Repository<UserRole>,
    private readonly configService: ConfigService,
  ) {
  }

  public async create(user: User): Promise<User> {
    user.password = generateHash(user.password, this.configService.get('auth.salt'));
    const buyerRole = new UserRole();
    user.roles = [buyerRole];
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      throw new BadRequestException('Ошибка регистрации пользователя');
    }
  }

  public async updateRoles(user: User, roles: Role[]) {
    try {
      await this.roleRepository.remove(user.roles);
      user.roles = roles.map(r => new UserRole(user.id, r));
      return await this.userRepository.save(user);
    } catch (error) {
      throw new BadRequestException('Ошибка обновления ролей пользователя');
    }
  }

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async findOne(params: DeepPartial<User>): Promise<User> {
    return await this.userRepository.findOne(params);
  }

  public async findOneOrFail(params: DeepPartial<User>): Promise<User> {
    return await this.userRepository.findOneOrFail(params);
  }
}
