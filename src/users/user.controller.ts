import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { Role } from './user-role.enum';
import { UsersService } from './users.service';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { User } from '../auth/decorators/user.decorator';
import { UserEntity } from './user.entity';
import { OrdersService } from '../orders/orders.service';

@Controller('user')
@UseGuards(AuthenticatedGuard, RolesGuard)
export class UserController {
  constructor(private readonly usersService: UsersService,
              private readonly ordersService: OrdersService) {
  }

  @Get()
  async profile(@User() user: UserEntity) {
    return user;
  }

  @Get('/orders')
  async orders(@User() user: UserEntity) {
    return this.ordersService.find({
      where: {
        userId: user.id,
      },
    });
  }

  @Put(':id/roles')
  @Roles(Role.Admin)
  async update(@Param('id') id, @Body() roles: Role[]) {
    const user = await this.usersService.findOneOrFail({ id: Number(id) });
    return await this.usersService.updateRoles(user, roles);
  }

}
