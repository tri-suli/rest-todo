import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as Mongoose from 'mongoose';
import { User } from './user.schema';

export type TodoDocument = Todo & Mongoose.Document;

@Schema()
export class Todo {
  @Prop({
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  owner: User;

  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  description: string;

  @Prop()
  done_at: Date;

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

export const TodoSchema = SchemaFactory.createForClass(Todo);
