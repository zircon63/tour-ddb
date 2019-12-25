import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import { Role } from './user-role.enum';
import { UsersService } from './users.service';
import { Roles, RolesGuard } from '../auth/guards/roles.guard';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';

@Controller('user')
@UseGuards(AuthenticatedGuard, RolesGuard)
export class UserController {
  constructor(private readonly usersService: UsersService) {
  }

  @Put(':id/roles')
  @Roles(Role.Admin)
  async update(@Param('id') id, @Body() roles: Role[]) {
    const user = await this.usersService.findOneOrFail({ id: Number(id) });
    return await this.usersService.updateRoles(user, roles);
  }

}
