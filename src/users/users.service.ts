import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { generateHash } from '../auth/crypto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService,
  ) {
  }

  public async create(user: User): Promise<User> {
    user.password = generateHash(user.password, this.configService.get('auth.salt'));
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      throw new BadRequestException('Ошибка регистрации пользователя');
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
