import jwt from 'jsonwebtoken';
import { EncryptionService } from '../../../services/encryption.service';
import { FindUserByEmailUseCase } from '../../users/usecases/find-user-by-email.usecase';
import { InvalidCredentialsException } from '../exceptions/invalid-credentials.exception';

const { JWT_PRIVATE_KEY, JWT_EXPIRATION_MINUTES } = process.env;

export class LoginUserUseCase {
  constructor(
    private readonly findUserByEmailUseCase: FindUserByEmailUseCase,
    private readonly encryptionService: EncryptionService,
  ) {}

  async run(email: string, password: string): Promise<string> {
    const user = await this.findUserByEmailUseCase.run(email);

    if (!this.encryptionService.verify(password, user.password)) {
      throw new InvalidCredentialsException();
    }

    return jwt.sign({ email, role: user.role }, JWT_PRIVATE_KEY, {
      expiresIn: +JWT_EXPIRATION_MINUTES * 60,
    });
  }
}
