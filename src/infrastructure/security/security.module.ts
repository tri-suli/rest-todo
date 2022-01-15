import { Module } from '@nestjs/common';
import { HashService } from './hashing/hash.service';

@Module({
  providers: [HashService],
})
export class SecurityModule {}
