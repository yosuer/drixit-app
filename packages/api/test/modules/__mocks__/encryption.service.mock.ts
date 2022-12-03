import { EncryptionService } from '../../../src/services/encryption.service';

export class EncryptionServiceMock extends EncryptionService {
  private mockEncrypt = jest.fn();
  private mockVerify = jest.fn();

  private readonly prefixEncrypt = 'encrypt#';

  encrypt(password: string): string {
    return this.mockEncrypt(password);
  }

  verify(password: string, hash: string): boolean {
    return this.mockVerify(password, hash);
  }

  returnEncrypt(password?: string) {
    this.mockEncrypt.mockReturnValueOnce(`${this.prefixEncrypt}${password}`);
  }

  assertEncryptHasBeenCalledWith(password?: string) {
    expect(this.mockEncrypt).toHaveBeenCalledWith(password);
  }
}
