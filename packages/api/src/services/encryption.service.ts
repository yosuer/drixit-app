import crypto from 'crypto';

export class EncryptionService {
  private readonly salt: string = process.env.PASSWORD_ENCRYPTION;

  encrypt(password: string): string {
    return crypto
      .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
      .toString(`hex`);
  }

  verify(password: string, hash: string): boolean {
    const passwordHashed = crypto
      .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
      .toString(`hex`);
    return passwordHashed === hash;
  }
}
