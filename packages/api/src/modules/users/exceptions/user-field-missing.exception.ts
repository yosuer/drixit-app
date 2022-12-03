import { ApiError } from '../../common/exceptions/api-error';

export class UserFieldMissingException extends ApiError {
  constructor(field: string) {
    super(UserFieldMissingException.name, `Field ${field} missing`);
  }
}
