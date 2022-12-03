import { ApiError } from '../../common/exceptions/api-error';

export class InvalidCredentialsException extends ApiError {
  constructor() {
    super(InvalidCredentialsException.name, 'Invalid credentials');
  }
}
