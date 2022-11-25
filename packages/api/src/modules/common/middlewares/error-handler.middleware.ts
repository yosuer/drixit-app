import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../exceptions/api-error';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  _: NextFunction,
) => {
  if (error instanceof ApiError) {
    const statusByType: { [key: string]: number } = {
      'user-not-found': 404,
      'invalid-credentials': 401,
    };
    const status = statusByType[error.type] || 500;
    return res.status(status).json({ error });
  }
  return res.status(500).json({ error });
};
