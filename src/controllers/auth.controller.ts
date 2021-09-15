import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

import { AuthService } from './../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Req() req: Request) {
    return this.authService.generateJWT(req.user);
  }
}
