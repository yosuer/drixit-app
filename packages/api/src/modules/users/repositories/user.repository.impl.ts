import { AppDataSource } from '../../../datasources';
import { User } from '../entities/user.entity';
import { UserRepository } from './user.repository';

export class UserRepositoryImpl implements UserRepository {
  private readonly repository = AppDataSource.manager.getRepository(User);

  save(userDto: Partial<User>): Promise<User> {
    return this.repository.save(userDto);
  }

  findByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email });
  }
}
