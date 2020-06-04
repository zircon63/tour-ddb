import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import * as faker from 'faker/locale/ru';
import { EmployeeEntity } from '../../employees/employee.entity';

export class EmployeeSeed1590928849875 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const employees = [
      new EmployeeEntity({
        login: 'employee1',
        password: '7C6A180B36896A0A8C02787EEAFB0E4C',
        name: faker.name.firstName(),
        phone: faker.phone.phoneNumber(),
        surname: faker.name.lastName(),
      }),
      new EmployeeEntity({
        login: 'employee2',
        password: '7C6A180B36896A0A8C02787EEAFB0E4C',
        name: faker.name.firstName(),
        phone: faker.phone.phoneNumber(),
        surname: faker.name.lastName(),
      }),
      new EmployeeEntity({
        login: 'employee3',
        password: '7C6A180B36896A0A8C02787EEAFB0E4C',
        name: faker.name.firstName(),
        phone: faker.phone.phoneNumber(),
        surname: faker.name.lastName(),
      }),
    ];
    return getRepository(EmployeeEntity, 'local2-seed').save(employees);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
  }

}
