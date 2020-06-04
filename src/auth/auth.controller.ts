import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { LoginGuard } from './guards/login.guard';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
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
