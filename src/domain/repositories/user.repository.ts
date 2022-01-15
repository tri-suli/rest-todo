import { User } from 'src/infrastructure/db/schemas/user.schema';
import { Register } from 'src/infrastructure/db/services/user/types/register.type';

export interface UserRepository {
  register(body: Register): Promise<User | null>;
}
