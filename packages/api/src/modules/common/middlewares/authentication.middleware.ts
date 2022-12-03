import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import logger from '../../../logger';
import { UnauthorizedException } from '../../auth/exceptions/unauthorized.exception';
import { JwtPayload } from '../../auth/types/jwt-payload';

const { JWT_PRIVATE_KEY } = process.env;

export const authenticationJWT = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  try {
    if (authorization) {
      const decoded = jwt.verify(authorization, JWT_PRIVATE_KEY) as JwtPayload;
      req.loggedEmail = decoded.email;
      return next();
    }
    throw new UnauthorizedException();
  } catch (err) {
    logger.error(err, 'Error authentication');
    next(err);
  }
};
