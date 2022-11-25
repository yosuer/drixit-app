import { NextFunction, Request, Response, Router } from 'express';
import { authenticationJWT } from '../../common/middlewares';
import { FindUserByEmailUseCase } from '../usecases/find-user-by-email.usecase';

const router = Router();

const findUserByEmailUseCase = new FindUserByEmailUseCase();

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

export default router;
