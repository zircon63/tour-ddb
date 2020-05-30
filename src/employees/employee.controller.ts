import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { User } from '../auth/decorators/user.decorator';
import { EmployeeEntity } from './employee.entity';
import { EmployeesService } from './employees.service';

@Controller('user')
@UseGuards(AuthenticatedGuard)
export class EmployeeController {
  constructor(private readonly employeesService: EmployeesService) {
  }

  @Get()
  async profile(@User() user: EmployeeEntity) {
    return user;
  }

}
