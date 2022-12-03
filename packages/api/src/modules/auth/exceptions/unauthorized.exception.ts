import { ApiError } from '../../common/exceptions/api-error';

export class UnauthorizedException extends ApiError {
  constructor() {
    super(UnauthorizedException.name, 'Unathorized request');
  }
}
