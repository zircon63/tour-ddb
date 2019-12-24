import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../users/user.entity';
import { AuthSignUpCmd } from './cmd/auth-sign-up.cmd';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {
  }

  @Post('signup')
  public async signUp(@Body() user: AuthSignUpCmd): Promise<any> {
    return await this.authService.signUp(new User(user));
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public async login(@Request() req) {
    return req.user;
  }
}
