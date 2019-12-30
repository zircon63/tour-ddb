import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Role } from '../users/user-role.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { StatsService } from './stats.service';

@Controller('stats')
@UseGuards(AuthenticatedGuard, RolesGuard)
@Roles(Role.Admin)
export class StatsController {
  constructor(private readonly statsService: StatsService) {
  }

  @Get('')
  async getStats() {
    return this.statsService.amountByStatus();
  }
}
