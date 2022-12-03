import logger from '../../../logger';
import { EncryptionService } from '../../../services/encryption.service';
import { User } from '../entities/user.entity';
import { UserFieldMissingException } from '../exceptions/user-field-missing.exception';
import { UserRepository } from '../repositories/user.repository';

export class SaveUserUseCase {
  constructor(
    private readonly encryptionService: EncryptionService,
    private readonly userRepository: UserRepository,
  ) {}

  async run(userDto: Partial<User>): Promise<User> {
    if (!userDto.password) {
      throw new UserFieldMissingException('password');
    }

    if (!userDto.email) {
      throw new UserFieldMissingException('email');
    }

    const passwordHashed = this.encryptionService.encrypt(userDto.password);

    const user = await this.userRepository.save({
      email: userDto.email,
      age: userDto.age,
      avatar: userDto.avatar,
      name: userDto.name,
      role: userDto.role,
      surname: userDto.surname,
      password: passwordHashed,
    });

    logger.info('User created', { id: user.id });
    return user;
  }
}
