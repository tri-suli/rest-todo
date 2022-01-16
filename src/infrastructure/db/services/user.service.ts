import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { User, UserDocument } from '../schemas/user.schema';
import { Register } from './types/user.type';

@Injectable()
export class UserService implements UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).exec();
  }

  async register(body: Register): Promise<User> {
    return await this.userModel.create(body);
  }
}
