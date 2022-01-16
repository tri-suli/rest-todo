import { User } from 'src/infrastructure/db/schemas/user.schema';
import { Register } from 'src/infrastructure/db/services/types/user.type';

export interface UserRepository {
  register(body: Register): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
