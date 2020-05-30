import { BadRequestException, Injectable } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { generateHash } from '../auth/crypto';
import { ConfigService } from '@nestjs/config';
import { EmployeeEntity } from './employee.entity';

@Injectable()
export class EmployeesService {

  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly userRepository: Repository<EmployeeEntity>,
    private readonly configService: ConfigService,
  ) {
  }

  public async create(user: EmployeeEntity): Promise<EmployeeEntity> {
    user.password = generateHash(user.password, this.configService.get('auth.salt'));
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      throw new BadRequestException('Ошибка регистрации пользователя');
    }
  }

  public async findAll(): Promise<EmployeeEntity[]> {
    return await this.userRepository.find();
  }

  public async findOne(params: DeepPartial<EmployeeEntity>): Promise<EmployeeEntity> {
    return await this.userRepository.findOne(params);
  }

  public async findOneOrFail(params: DeepPartial<EmployeeEntity>): Promise<EmployeeEntity> {
    return await this.userRepository.findOneOrFail(params);
  }
}
