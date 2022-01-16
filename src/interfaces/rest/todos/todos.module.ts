import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoUseCase } from 'src/application/usecases/todo.usecase';
import { Todo, TodoSchema } from 'src/infrastructure/db/schemas/todo.schema';
import { User, UserSchema } from 'src/infrastructure/db/schemas/user.schema';
import { TodoService } from 'src/infrastructure/db/services/todo.service';
import { UserService } from 'src/infrastructure/db/services/user.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Todo.name, schema: TodoSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [TodoController],
  providers: [TodoUseCase, TodoService, UserService],
})
export class TodosModule {}
