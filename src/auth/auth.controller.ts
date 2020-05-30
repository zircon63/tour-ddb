import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthSignUpCmd } from './cmd/auth-sign-up.cmd';
import { AuthService } from './auth.service';
import { LoginGuard } from './guards/login.guard';
import { Request, Response } from 'express';
import { EmployeeEntity } from '../employees/employee.entity';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {
  }

  @Post('signup')
  public async signUp(@Body() user: AuthSignUpCmd): Promise<any> {
    return await this.authService.signUp(new EmployeeEntity(user));
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Req() req: Request) {
    return req.user;
  }

  @Get('/logout')
  logout(@Req() req: Request, @Res() res: Response) {
    req.logout();
    res.redirect('/');
  }
}
