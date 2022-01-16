import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterUseCase } from 'src/application/usecases/register.usecase';
import { ResponseEntity } from 'src/domain/entities/response.entity';
import {
  DUPLICATE_USER_EMAIL,
  USER_CREATED,
} from 'src/infrastructure/constants/message.constant';
import { IResponse } from '../../response/response.interface';
import {
  RegisterResponseTypeError,
  RegisterResponseTypeSuccess,
} from '../../response/types/register.type';
import { RegisterDto } from './register.dto';

@ApiTags('users')
@Controller('users')
export class RegisterController {
  constructor(private usecase: RegisterUseCase) {}

  @Post('/register')
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input',
  })
  async store(
    @Body() data: RegisterDto,
  ): Promise<
    IResponse<RegisterResponseTypeSuccess, RegisterResponseTypeError>
  > {
    const user = await this.usecase.register(data);

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
}
