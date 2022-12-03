export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_PRIVATE_KEY: string;
      JWT_EXPIRATION_MINUTES: string;
      PASSWORD_ENCRYPTION: string;
    }
  }
}
