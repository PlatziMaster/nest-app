import { Test, TestingModule } from '@nestjs/testing';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: 'my-cat',
          signOptions: { expiresIn: '1h' },
        }),
      ],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be call jwt.sign and return an access token', () => {
    // Arrange
    const user = {
      email: 'nicolas@nico.co',
      id: 1,
      name: 'name',
      age: 1,
    };
    const payload = {
      email: user.email,
      sub: user.id,
    };
    const mockToken = '121212';
    jest.spyOn(jwtService, 'sign').mockImplementation(() => mockToken);
    // Act
    const rta = service.generateJWT(user);
    // Assert
    expect(rta.access_token).toBe(mockToken);
    expect(jwtService.sign).toBeCalled();
    expect(jwtService.sign).toBeCalledWith(payload);
  });
});
