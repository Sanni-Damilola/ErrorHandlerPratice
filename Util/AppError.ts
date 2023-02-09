export enum HttpCode {
  OK = 200,
}

interface AppErrorAgrs {
  name?: string;
  isOperational?: boolean;
  message: string;
  httpCode: HttpCode;
}

export class AppError extends Error {
  public readonly name: string;
  public readonly isOperational: boolean = true;
  public readonly message: string;
  public readonly httpCode: HttpCode;

  constructor(args: AppErrorAgrs) {
    super(args.message);

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
