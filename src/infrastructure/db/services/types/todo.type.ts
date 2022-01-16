import { User } from '../../schemas/user.schema';

export type CreateTodoType = {
  owner: User;
  title: string;
  description: string;
};

export type UpdateTodoType = {
  id: string;
  owner: User;
  title?: string;
  description?: string;
  done_at?: string | null;
};

export type DeleteTodoType = {
  id: string;
};
