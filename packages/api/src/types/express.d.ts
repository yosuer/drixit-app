export {};

declare global {
  namespace Express {
    export interface Request {
      loggedEmail: string;
    }
  }
}
