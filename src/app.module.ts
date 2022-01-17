import { Module } from '@nestjs/common';
import { MongoModule } from './infrastructure/db/mongo.module';
import { SecurityModule } from './infrastructure/security/security.module';
import { UserModule } from './interfaces/rest/users/user.module';
import { TodoModule } from './interfaces/rest/todos/todo.module';

@Module({
  imports: [MongoModule, UserModule, TodoModule, SecurityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
