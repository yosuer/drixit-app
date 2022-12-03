import { NextFunction, Request, Response, Router } from 'express';
import { UserRepositoryImpl } from '../../../modules/users/repositories/user.repository.impl';
import { EncryptionService } from '../../../services/encryption.service';
import { FindUserByEmailUseCase } from '../../users/usecases/find-user-by-email.usecase';
import { LoginUserUseCase } from '../usecases/login-user.usecase';

const router = Router();

const userRepository = new UserRepositoryImpl();
const findUserByEmailUseCase = new FindUserByEmailUseCase(userRepository);
const encryptionService = new EncryptionService();
const loginUserUseCase = new LoginUserUseCase(
  findUserByEmailUseCase,
  encryptionService,
);

router.post(
  '/login',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const token = await loginUserUseCase.run(email, password);

      res.send({ token }).status(200);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
