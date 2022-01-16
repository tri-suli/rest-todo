import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoRepository } from 'src/domain/repositories/todo.repository';
import { Todo, TodoDocument } from '../schemas/todo.schema';
import {
  CreateTodoType,
  DeleteTodoType,
  UpdateTodoType,
} from './types/todo.type';

@Injectable()
export class TodoService implements TodoRepository {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>,
  ) {}

  async store(body: CreateTodoType): Promise<Todo> {
    return await this.todoModel.create(body);
  }

  async update(body: UpdateTodoType): Promise<TodoDocument | boolean> {
    const todo = await this.todoModel
      .findOne({ _id: body.id, owner: body.owner })
      .exec();

    if (todo) {
      return await this.todoModel.findOneAndUpdate(
        { _id: body.id, owner: body.owner },
        {
          $set: {
            title: body.title || todo.title,
            description: body.description || todo.description,
            done_at: body.done_at || todo.done_at,
          },
        },
        { new: true },
      );
    }

    return false;
  }

  async delete(body: DeleteTodoType): Promise<boolean> {
    const record = await this.todoModel.deleteOne({ _id: body.id }).exec();

    return Boolean(record.deletedCount);
  }
}
