import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dbConfig } from '../config/db.config';
import { Todo, TodoSchema } from './schemas/todo.schema';
import { User, UserSchema } from './schemas/user.schema';

const config = dbConfig();

@Module({
  imports: [
    MongooseModule.forRoot(config.connection, config.options),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Todo.name, schema: TodoSchema },
    ]),
  ],
  exports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Todo.name, schema: TodoSchema },
    ]),
  ],
})
export class MongoModule {}
