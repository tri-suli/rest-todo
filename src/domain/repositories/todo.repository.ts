import { Todo, TodoDocument } from 'src/infrastructure/db/schemas/todo.schema';
import {
  CreateTodoType,
  UpdateTodoType,
  DeleteTodoType,
} from 'src/infrastructure/db/services/types/todo.type';

export interface TodoRepository {
  store(body: CreateTodoType): Promise<Todo | null>;
  update(body: UpdateTodoType): Promise<TodoDocument | boolean>;
  delete(Body: DeleteTodoType): Promise<boolean>;
}
