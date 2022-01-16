import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as Mongoose from 'mongoose';
import { User } from './user.schema';

export type TodoDocument = Todo & Mongoose.Document;

@Schema({ timestamps: true, id: true })
export class Todo {
  @Prop({
    type: Mongoose.Schema.Types.ObjectId,
    ref: User.name,
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

  @Prop({
    default: null,
  })
  done_at: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
