import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { Role } from './user-role.enum';
import { UsersService } from './users.service';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { User } from '../auth/decorators/user.decorator';
import { UserEntity } from './user.entity';

@Controller('user')
@UseGuards(AuthenticatedGuard, RolesGuard)
export class UserController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  async profile(@User() user: UserEntity) {
    return user;
  }

  @Put(':id/roles')
  @Roles(Role.Admin)
  async update(@Param('id') id, @Body() roles: Role[]) {
    const user = await this.usersService.findOneOrFail({ id: Number(id) });
    return await this.usersService.updateRoles(user, roles);
  }

}
