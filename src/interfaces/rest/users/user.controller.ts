import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { LoginUseCase } from 'src/application/usecases/login.usecase';
import { RegisterUseCase } from 'src/application/usecases/register.usecase';
import { ResponseEntity } from 'src/domain/entities/response.entity';
import {
  DUPLICATE_USER_EMAIL,
  USER_CREATED,
} from 'src/infrastructure/constants/message.constant';
import { GuestAuthGuard } from 'src/infrastructure/security/auth/guest.guard';
import { IResponse } from '../../response/response.interface';
import {
  FailedResponseType,
  LoginSuccessResponseType,
  RegisterResponseTypeError,
  RegisterResponseTypeSuccess,
} from '../../response/types/users.type';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private registerUsecase: RegisterUseCase,
    private loginUseCase: LoginUseCase,
  ) {}

  @Post('/register')
  @UseGuards(GuestAuthGuard)
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input',
  })
  async register(
    @Body() data: RegisterDto,
  ): Promise<
    IResponse<RegisterResponseTypeSuccess, RegisterResponseTypeError>
  > {
    const user = await this.registerUsecase.register(data);

    if (user) {
      return new ResponseEntity({
        success: true,
        data: {
          message: USER_CREATED,
        },
        errors: null,
      });
    }

    throw new HttpException(
      new ResponseEntity({
        success: false,
        data: null,
        errors: DUPLICATE_USER_EMAIL,
      }),
      HttpStatus.BAD_REQUEST,
    );
  }

  @Post('/login')
  @UseGuards(GuestAuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Login success.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input',
  })
  async login(
    @Body() data: LoginDto,
  ): Promise<IResponse<LoginSuccessResponseType, FailedResponseType<any>>> {
    const response = await this.loginUseCase.handle(data);

    return new ResponseEntity({
      success: true,
      data: response,
      errors: null,
    });
  }
}
