import { Module } from '@nestjs/common';
import { EmployeeEntity } from './employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './employee.controller';
import { EmployeesService } from './employees.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeEntity]),
  ],
  providers: [EmployeesService],
  exports: [EmployeesService],
  controllers: [EmployeeController],
})
export class EmployeesModule {
}
