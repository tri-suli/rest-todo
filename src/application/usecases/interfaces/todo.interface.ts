export interface ICreateTodoUseCase {
  owner: string;
  title: string;
  description: string;
}

export interface IUpdateTodoUseCase {
  id: string;
  owner: string;
  title?: string;
  description?: string;
  done_at?: string;
}

export interface IDeleteTodoUseCase {
  id: string;
}
