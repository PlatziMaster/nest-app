import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'my-cat',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [CategoriesController, AuthController],
  providers: [CategoriesService, AuthService],
})
export class AppModule {}
