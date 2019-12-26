import { BadRequestException, Injectable } from '@nestjs/common';
import { DeepPartial, getConnection, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { generateHash } from '../auth/crypto';
import { ConfigService } from '@nestjs/config';
import { UserRole } from './user-role.entity';
import { Role } from './user-role.enum';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(UserRole)
    private readonly roleRepository: Repository<UserRole>,
    private readonly configService: ConfigService,
  ) {
  }

  public async create(user: UserEntity): Promise<UserEntity> {
    user.password = generateHash(user.password, this.configService.get('auth.salt'));
    const buyerRole = new UserRole();
    user.roles = [buyerRole];
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      throw new BadRequestException('Ошибка регистрации пользователя');
    }
  }

  public async updateRoles(user: UserEntity, roles: Role[]) {
    try {
      await this.roleRepository.remove(user.roles);
      user.roles = roles.map(r => new UserRole(user.id, r));
      return await this.userRepository.save(user);
    } catch (error) {
      throw new BadRequestException('Ошибка обновления ролей пользователя');
    }
  }

  public async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  public async findOne(params: DeepPartial<UserEntity>): Promise<UserEntity> {
    return await this.userRepository.findOne(params);
  }

  public async findOneOrFail(params: DeepPartial<UserEntity>): Promise<UserEntity> {
    return await this.userRepository.findOneOrFail(params);
  }
}
