export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_PRIVATE_KEY: string;
      JWT_EXPIRATION_MINUTOS: string;
    }
  }
}
