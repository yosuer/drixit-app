import { ApiError } from '../../common/exceptions/api-error';

export class UnauthorizedException extends ApiError {
  constructor() {
    super('unauthorized', 'Unathorized request');
  }
}
