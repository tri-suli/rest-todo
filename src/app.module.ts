import { Module } from '@nestjs/common';
import { MongoModule } from './infrastructure/db/mongo.module';

@Module({
  imports: [MongoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
