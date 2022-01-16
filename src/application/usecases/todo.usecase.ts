import { Injectable } from '@nestjs/common';
import { Todo, TodoDocument } from 'src/infrastructure/db/schemas/todo.schema';
import { TodoService } from 'src/infrastructure/db/services/todo.service';
import { UserService } from 'src/infrastructure/db/services/user.service';
import {
  ICreateTodoUseCase,
  IDeleteTodoUseCase,
  IUpdateTodoUseCase,
} from './interfaces/todo.interface';

@Injectable()
export class TodoUseCase {
  constructor(
    private todoService: TodoService,
    private userService: UserService,
  ) {}

  async store(body: ICreateTodoUseCase): Promise<Todo | null> {
    const user = await this.userService.findByEmail(body.owner);

    if (user !== null) {
      try {
        return await this.todoService.store({
          owner: user,
          title: body.title,
          description: body.description,
        });
      } catch (error) {
        console.log(error);
      }
    }

    return null;
  }

  async update(body: IUpdateTodoUseCase): Promise<TodoDocument | boolean> {
    const user = await this.userService.findByEmail(body.owner);

    if (user !== null) {
      try {
        return this.todoService.update({ ...body, owner: user });
      } catch (error) {
        console.log(error);
      }
    }

    return false;
  }

  async delete(body: IDeleteTodoUseCase): Promise<boolean> {
    return this.todoService.delete(body);
  }
}
