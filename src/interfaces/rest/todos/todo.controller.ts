import {
  Body,
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TodoUseCase } from 'src/application/usecases/todo.usecase';
import { ResponseEntity } from 'src/domain/entities/response.entity';
import {
  TODO_DELETED,
  TODO_NOT_FOUND,
  USER_NOT_FOUND,
} from 'src/infrastructure/constants/message.constant';
import { Todo, TodoDocument } from 'src/infrastructure/db/schemas/todo.schema';
import { IResponse } from 'src/interfaces/response/response.interface';
import { ResponseCreateTodoTypeError } from 'src/interfaces/response/types/todo.type';
import { CreateTodoDto } from './dto/create.dto';
import { UpdateTodoDto } from './dto/update.dto';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private usecase: TodoUseCase) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The todos has been successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input',
  })
  @ApiResponse({
    status: 401,
    description: 'User not found',
  })
  async store(
    @Body() data: CreateTodoDto,
  ): Promise<IResponse<Todo, ResponseCreateTodoTypeError>> {
    const response = await this.usecase.store(data);

    if (response !== null) {
      return new ResponseEntity({
        success: true,
        data: response,
        errors: null,
      });
    }

    throw new HttpException(
      new ResponseEntity({
        success: false,
        data: null,
        errors: USER_NOT_FOUND,
      }),
      HttpStatus.NOT_FOUND,
    );
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'The todos has been successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input',
  })
  @ApiResponse({
    status: 401,
    description: 'User not found',
  })
  async update(
    @Param() params,
    @Body() data: UpdateTodoDto,
  ): Promise<IResponse<TodoDocument, ResponseCreateTodoTypeError>> {
    const response = await this.usecase.update({ id: params.id, ...data });
    console.log(response);
    if (response) {
      return new ResponseEntity({
        success: true,
        data: response,
        errors: null,
      });
    }

    throw new HttpException(
      new ResponseEntity({
        success: false,
        data: null,
        errors: USER_NOT_FOUND,
      }),
      HttpStatus.NOT_FOUND,
    );
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The todos has been successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Todos does not belongs to current user.',
  })
  async delete(@Param() params): Promise<IResponse<TodoDocument, null>> {
    const deleted = await this.usecase.delete({ id: params.id });

    if (deleted) {
      return new ResponseEntity({
        success: true,
        data: TODO_DELETED,
        errors: null,
      });
    }

    throw new HttpException(
      new ResponseEntity({
        success: false,
        data: null,
        errors: TODO_NOT_FOUND,
      }),
      HttpStatus.NOT_FOUND,
    );
  }
}
