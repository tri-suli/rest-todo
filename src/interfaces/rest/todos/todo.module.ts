import { Module } from '@nestjs/common';

import { TodoUseCase } from 'src/application/usecases/todo.usecase';
import { MongoModule } from 'src/infrastructure/db/mongo.module';
import { TodoService } from 'src/infrastructure/db/services/todo.service';
import { UserService } from 'src/infrastructure/db/services/user.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [MongoModule],
  controllers: [TodoController],
  providers: [TodoUseCase, TodoService, UserService],
})
export class TodoModule {}
