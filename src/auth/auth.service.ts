import { BadRequestException, Injectable } from '@nestjs/common';
import { hashEqual } from './crypto';
import { ConfigService } from '@nestjs/config';
import { EmployeesService } from '../employees/employees.service';
import { EmployeeEntity } from '../employees/employee.entity';

@Injectable()
export class AuthService {
  constructor(private readonly employeesService: EmployeesService,
              private readonly configService: ConfigService) {
  }

  async validateUser(username: string, password: string): Promise<EmployeeEntity> {
    return await this.employeesService.findOneOrFail({ login: username })
      .then(user => {
        const isEqual = hashEqual(password, this.configService.get('auth.salt'), user.password);
        return isEqual ? user : Promise.reject();
      })
      .catch(() => Promise.reject(new BadRequestException('Неверный пользователь или пароль')));
  }
}
