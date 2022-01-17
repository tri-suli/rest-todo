import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ResponseEntity } from 'src/domain/entities/response.entity';
import { UserService } from 'src/infrastructure/db/services/user.service';
import { HashService } from '../hashing/hash.service';
import { JwtPayloadType } from './auth.contract';

@Injectable()
export class AuthService {
  constructor(
    private hashService: HashService,
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login(email: string, password: string): Promise<string> {
    const user = await this.userService.findByEmail(email);
    const isCredentialMatched = await this.hashService.matched(
      password,
      user.password,
    );

    if (!isCredentialMatched) {
      throw new UnauthorizedException(
        new ResponseEntity({
          success: false,
          data: null,
          errors: 'Credential mismatch!',
        }),
      );
    }

    return this.generateToken({
      sub: user._id,
      email: user.email,
      name: user.name,
    });
  }

  generateToken(payload: JwtPayloadType): string {
    return this.jwtService.sign(payload);
  }
}
