import * as Bcrypt from 'bcrypt';
import { Injectable, Scope } from '@nestjs/common';
import { IHash } from './hash.interface';
import config from 'src/infrastructure/config/auth.config';

@Injectable({ scope: Scope.DEFAULT })
export class HashService implements IHash {
  async hash(password: string): Promise<string> {
    return await Bcrypt.hash(password, config.round);
  }

  async matched(password: string, hash: string): Promise<boolean> {
    return await Bcrypt.compare(password, hash);
  }

  async salt(): Promise<string> {
    return await Bcrypt.genSalt();
  }
}
