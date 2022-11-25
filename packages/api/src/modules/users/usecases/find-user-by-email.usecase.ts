import { UserNotFoundException } from '../exceptions/user-not-found-exception';
import { User } from '../types/user';

const users: User[] = [
  {
    id: 'it-drixit-1',
    avatar:
      'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
    email: 'it@drixit.com',
    password: 'some-password',
    name: 'IT',
    surname: 'Drixit',
    age: 25,
    role: 'admin',
  },
  {
    id: 'info-drixit-2',
    avatar:
      'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
    email: 'info@drixit.com',
    password: 'other-password',
    name: 'Info',
    surname: 'Drixit',
    age: 30,
    role: 'user',
  },
];

export class FindUserByEmailUseCase {
  async run(email: string): Promise<User> {
    const found = users.find((user) => user.email === email);
    if (!found) {
      throw new UserNotFoundException();
    }
    return found;
  }
}
