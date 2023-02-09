export enum HttpCode {
  OK = 200,
}

interface AppErrorArgs {
  name?: string;
  isOperational?: boolean;
  message: string;
  httpCode: HttpCode;
}

export class AppError extends Error {
  public readonly name: string;
  public readonly message: string;
  public readonly isOperational: boolean = true;
  public readonly httpCode: HttpCode;

  constructor(args: AppErrorArgs) {
    super(args.message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = args.name || "Error";
    this.httpCode = args.httpCode;

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}
