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
  public readonly isOperational: boolean = true;
  public readonly name: string;
  public readonly message: string;
  public readonly httpCode: HttpCode;

  constructor(args: AppErrorArgs) {
    super(args.message);

    Object.setPrototypeOf(this, new.target.prototype);
    this.httpCode = args.httpCode;
    this.name = args.name || "Error";

    if (typeof this.isOperational !== "undefined") {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}
