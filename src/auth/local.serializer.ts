import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EmployeeEntity } from '../employees/employee.entity';
import { EmployeesService } from '../employees/employees.service';

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(
    private readonly authService: AuthService,
    private readonly employeesService: EmployeesService,
  ) {
    super();
  }

  serializeUser(user: EmployeeEntity, done: CallableFunction) {
    done(null, user.id);
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    return await this.employeesService.findOneOrFail({ id: Number(userId) })
      .then(user => done(null, user))
      .catch(error => done(error));
  }
}
