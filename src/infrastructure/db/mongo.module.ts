import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dbConfig } from '../config/db.config';

const config = dbConfig();

@Module({
  imports: [MongooseModule.forRoot(config.connection, config.options)],
})
export class MongoModule {}
