import { Module } from '@nestjs/common';
import { MongoModule } from './infrastructure/db/mongo.module';
import { RegisterModule } from './interfaces/rest/register/register.module';
import { TodosModule } from './interfaces/rest/todos/todos.module';

@Module({
  imports: [MongoModule, RegisterModule, TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
