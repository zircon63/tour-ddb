import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { LoginGuard } from './guards/login.guard';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(private readonly configService: ConfigService) {
  }
  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Req() req: Request) {
    return req.user;
  }

  @Get('/logout')
  logout(@Req() req: Request, @Res() res: Response) {
    const rootPath = this.configService.get('rootPath');
    req.logout();
    res.redirect(rootPath);
  }
}
