import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    length: 100,
    required: true,
    unique: true,
  })
  password: string;

  @Prop({
    required: true,
    default: Date.now(),
  })
  created_at: Date;

  @Prop({
    required: true,
    default: Date.now(),
  })
  updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
