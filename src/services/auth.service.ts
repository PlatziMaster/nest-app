import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from './../models/user.model';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  generateJWT(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
