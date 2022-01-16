import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true, id: true })
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
    select: false,
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
