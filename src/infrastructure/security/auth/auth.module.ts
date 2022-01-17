import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import authConfig from 'src/infrastructure/config/auth.config';
import { HashService } from '../hashing/hash.service';
import { UserService } from 'src/infrastructure/db/services/user.service';
import { MongoModule } from 'src/infrastructure/db/mongo.module';
import { GuestStrategy } from './guest.strategy';

@Module({
  imports: [
    MongoModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret: authConfig.secret_key,
        signOptions: {
          expiresIn: '60s',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthService,
    HashService,
    UserService,
    GuestStrategy,
    JwtStrategy,
  ],
  exports: [AuthService, HashService, UserService],
})
export class AuthModule {}
