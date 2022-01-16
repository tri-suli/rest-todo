import { Injectable } from '@nestjs/common';
import { User } from 'src/infrastructure/db/schemas/user.schema';
import { UserService } from 'src/infrastructure/db/services/user.service';
import { HashService } from 'src/infrastructure/security/hashing/hash.service';
import { IRegister } from './interfaces/register.interface';

@Injectable()
export class RegisterUseCase {
  constructor(
    private userService: UserService,
    private hashService: HashService,
  ) {}

  async register(body: IRegister): Promise<User> {
    body.password = await this.hashService.hash(body.password);
    try {
      return await this.userService.register(body);
    } catch (error) {
      if (error.code === 11000) {
        return null;
      }
    }
  }
}
