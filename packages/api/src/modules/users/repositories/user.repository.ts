import { User } from '../entities/user.entity';

export interface UserRepository {
  save(user: Partial<User>): Promise<User>;

  findByEmail(email: string): Promise<User | null>;
}
