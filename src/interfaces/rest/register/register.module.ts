import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterUseCase } from 'src/application/usecases/register.usecase';
import { User, UserSchema } from 'src/infrastructure/db/schemas/user.schema';
import { UserService } from 'src/infrastructure/db/services/user.service';
import { HashService } from 'src/infrastructure/security/hashing/hash.service';
import { RegisterController } from './register.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [RegisterController],
  providers: [RegisterUseCase, UserService, HashService],
})
export class RegisterModule {}
