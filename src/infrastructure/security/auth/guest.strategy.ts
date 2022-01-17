import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/infrastructure/db/services/user.service';
import { ResponseEntity } from 'src/domain/entities/response.entity';
import { USER_NOT_FOUND } from 'src/infrastructure/constants/message.constant';

@Injectable()
export class GuestStrategy extends PassportStrategy(Strategy, 'guest') {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {
    super({ usernameField: 'email' });
  }

  async validate(email: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException(
        new ResponseEntity({
          success: false,
          data: null,
          errors: USER_NOT_FOUND,
        }),
      );
    }

    return user;
  }
}
