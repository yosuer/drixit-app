import { SaveUserUseCase } from '../../../../src/modules/users/usecases/save-user.usecase';
import { User } from '../../../../src/modules/users/entities/user.entity';
import { EncryptionServiceMock } from '../../__mocks__/encryption.service.mock';
import { UserRepositoryMock } from '../../__mocks__/user.repository.mock';

describe('SaveUserUsecase', () => {
  let saveUserUseCase: SaveUserUseCase;
  let encryptionServiceMock: EncryptionServiceMock;
  let userRepositoryMock: UserRepositoryMock;

  beforeEach(() => {
    encryptionServiceMock = new EncryptionServiceMock();
    userRepositoryMock = new UserRepositoryMock();
    saveUserUseCase = new SaveUserUseCase(
      encryptionServiceMock,
      userRepositoryMock,
    );
  });

  it('with valid data, save user', async () => {
    const dto: Partial<User> = {
      email: 'email@email.com',
      name: 'a',
      password: 'passwordX',
      age: 19,
      avatar: 'avatar',
      role: 'admin',
      surname: 'surname',
    };

    encryptionServiceMock.returnEncrypt(dto.password);
    userRepositoryMock.returnSave(dto);

    await saveUserUseCase.run(dto);

    encryptionServiceMock.assertEncryptHasBeenCalledWith(dto.password);
    userRepositoryMock.assertSaveHasBeenCallWith({
      ...dto,
      password: `encrypt#${dto.password}`,
    });
  });
});
