import { Module } from '@nestjs/common';

import { LoginUseCase } from 'src/application/usecases/login.usecase';
import { RegisterUseCase } from 'src/application/usecases/register.usecase';
import { UserController } from './user.controller';
import { AuthModule } from 'src/infrastructure/security/auth/auth.module';
import { MongoModule } from 'src/infrastructure/db/mongo.module';

@Module({
  imports: [MongoModule, AuthModule],
  controllers: [UserController],
  providers: [RegisterUseCase, LoginUseCase],
})
export class UserModule {}
