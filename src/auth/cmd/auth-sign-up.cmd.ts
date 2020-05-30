import { EmployeeInterface } from '../../employees/employee.interface';

export class AuthSignUpCmd implements EmployeeInterface {
  public login: string;
  public password: string;

  constructor(data: EmployeeInterface) {
    Object.assign(this, data);
  }

  readonly id: number;
  readonly name: string;
  readonly phone: string;
  readonly surname: string;
}
