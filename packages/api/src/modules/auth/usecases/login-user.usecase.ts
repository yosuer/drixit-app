import jwt from 'jsonwebtoken';
import { FindUserByEmailUseCase } from '../../users/usecases/find-user-by-email.usecase';
import { InvalidCredentialsException } from '../exceptions/invalid-credentials.exception';

const { JWT_PRIVATE_KEY, JWT_EXPIRATION_MINUTOS } = process.env;

export class LoginUserUseCase {
  constructor(readonly findUserByEmailUseCase: FindUserByEmailUseCase) {}

  async run(email: string, password: string): Promise<string> {
    const user = await this.findUserByEmailUseCase.run(email);

    if (user.password !== password) {
      throw new InvalidCredentialsException();
    }

    console.log('sas', JWT_PRIVATE_KEY);
    return jwt.sign({ email, role: user.role }, JWT_PRIVATE_KEY, {
      expiresIn: +JWT_EXPIRATION_MINUTOS * 60,
    });
  }
}
