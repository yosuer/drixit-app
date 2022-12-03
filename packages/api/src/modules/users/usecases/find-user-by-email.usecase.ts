import { User } from '../entities/user.entity';
import { UserNotFoundException } from '../exceptions/user-not-found-exception';
import { UserRepository } from '../repositories/user.repository';

export class FindUserByEmailUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async run(email: string): Promise<User> {
    const found = await this.userRepository.findByEmail(email);
    if (!found) {
      throw new UserNotFoundException();
    }
    return found;
  }
}
