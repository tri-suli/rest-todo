import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { User, UserDocument } from '../../schemas/user.schema';
import { Register } from './types/register.type';

@Injectable()
export class UserService implements UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async register(body: Register): Promise<User> {
    return await this.userModel.create(body);
  }
}
