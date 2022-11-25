import { ApiError } from '../../common/exceptions/api-error';

export class UserNotFoundException extends ApiError {
  constructor() {
    super('user-not-found', 'User not found');
  }
}
