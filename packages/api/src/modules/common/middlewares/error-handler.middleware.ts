import { NextFunction, Request, Response } from 'express';
import logger from '../../../logger';
import { ApiError } from '../exceptions/api-error';
import { UserNotFoundException } from '../../../modules/users/exceptions/user-not-found-exception';
import { UserFieldMissingException } from '../../../modules/users/exceptions/user-field-missing.exception';
import { InvalidCredentialsException } from '../../../modules/auth/exceptions/invalid-credentials.exception';
import { UnauthorizedException } from '../../../modules/auth/exceptions/unauthorized.exception';

const statusByType: { [key: string]: number } = {
  [UserNotFoundException.name]: 404,
  [InvalidCredentialsException.name]: 401,
  [UnauthorizedException.name]: 401,
  [UserFieldMissingException.name]: 400,
};

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  _: NextFunction,
) => {
  logger.error(error);
  if (error instanceof ApiError) {
    const status = statusByType[error.type] || 500;
    return res.status(status).json({ error });
  }
  return res.status(500).json({ error });
};
