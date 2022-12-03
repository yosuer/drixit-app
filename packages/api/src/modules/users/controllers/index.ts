import { NextFunction, Request, Response, Router } from 'express';
import { EncryptionService } from '../../../services/encryption.service';
import { authenticationJWT } from '../../common/middlewares';
import { FindUserByEmailUseCase } from '../usecases/find-user-by-email.usecase';
import { SaveUserUseCase } from '../usecases/save-user.usecase';
import { UserRepositoryImpl } from '../repositories/user.repository.impl';

const router = Router();

const encryptionService = new EncryptionService();
const userRepository = new UserRepositoryImpl();
const findUserByEmailUseCase = new FindUserByEmailUseCase(userRepository);
const saveUserUseCase = new SaveUserUseCase(encryptionService, userRepository);

router.get(
  '/users/me',
  authenticationJWT,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await findUserByEmailUseCase.run(req.loggedEmail);

      res.send(user).status(200);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/users',
  // Here we can add authentication by role admin
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await saveUserUseCase.run(req.body);

      res.send(user).status(201);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
