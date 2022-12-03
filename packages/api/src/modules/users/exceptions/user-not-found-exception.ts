import { ApiError } from '../../common/exceptions/api-error';

export class UserNotFoundException extends ApiError {
  constructor() {
    super(UserNotFoundException.name, 'User not found');
  }
}
