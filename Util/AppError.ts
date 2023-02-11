export enum HttpCode {
  OK = 200,
}

interface AppErrorArgs {
  name?: string;
  message: string;
  isOperational?: boolean;
  httpCode: HttpCode;
}

export class AppError extends Error {
  public readonly name: string;
  public readonly isOperational: boolean = true;
  public readonly httpCode: HttpCode;

  constructor(args: AppErrorArgs) {
    super(args.name);

    Object.setPrototypeOf(this, new.target.prototype);

    this.httpCode = args.httpCode;
    this.name = args.name || "Error";
    if (typeof args.isOperational !== "undefined") {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}
