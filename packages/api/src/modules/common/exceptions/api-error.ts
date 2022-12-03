export abstract class ApiError extends Error {
  readonly type: string;

  constructor(type: string, message: string) {
    super(message);
    this.type = type;
  }
}
