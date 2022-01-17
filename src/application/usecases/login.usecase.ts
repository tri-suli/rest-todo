import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/infrastructure/security/auth/auth.service';
import {
  ILoginUsecase,
  LoginUseCaseResult,
} from './interfaces/login.interface';
import { UseCase } from './interfaces/usecase.interface';

@Injectable()
export class LoginUseCase
  implements UseCase<ILoginUsecase, LoginUseCaseResult>
{
  constructor(private authService: AuthService) {}

  async handle(data: ILoginUsecase): Promise<LoginUseCaseResult> {
    const token = await this.authService.login(data.email, data.password);
    return { access_token: token };
  }
}
