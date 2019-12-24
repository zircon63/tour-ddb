import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { generateHash } from '../auth/crypto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
  }

  public async create(user: User): Promise<User> {
    user.password = generateHash(user.password);
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async findOne(params: DeepPartial<User>): Promise<User> {
    let user: User;
    try {
      user = await this.userRepository.findOne(params);
    } catch (error) {
      throw new NotFoundException(`User with ${JSON.stringify(params)} does not exist`);
    }
    return user;
  }
}
