import { ObjectId } from 'mongodb';
import { User } from '../../../src/modules/users/entities/user.entity';
import { UserRepository } from '../../../src/modules/users/repositories/user.repository';

export class UserRepositoryMock implements UserRepository {
  private mockSave = jest.fn();
  private mockFindByEmail = jest.fn();

  async save(user: Partial<User>): Promise<User> {
    return this.mockSave(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.mockFindByEmail(email);
  }

  returnSave(user: Partial<User>) {
    this.mockSave.mockReturnValueOnce({
      ...user,
      id: new ObjectId(1),
    });
  }

  assertSaveHasBeenCallWith(user: Partial<User>) {
    expect(this.mockSave).toHaveBeenCalledWith(user);
  }
}
