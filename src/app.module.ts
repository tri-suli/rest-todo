import { Module } from '@nestjs/common';
import { MongoModule } from './infrastructure/db/mongo.module';
import { RegisterModule } from './interfaces/rest/register/register.module';

@Module({
  imports: [MongoModule, RegisterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
