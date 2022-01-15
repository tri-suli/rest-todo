import { User } from 'src/infrastructure/db/schemas/user.schema';

export type RegisterUseCaseType = {
  user: User;
  access_token: string;
};

export interface IRegister {
  name: string;
  email: string;
  password: string;
}
