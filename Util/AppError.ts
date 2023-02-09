export enum HttpCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
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
  public readonly httpCode: HttpCode;

  constructor(args: AppErrorArgs) {
    super(args.message);

    Object.setPrototypeOf(this, new.target.prototype);
    this.httpCode = args.httpCode;
    this.name = args.name || "Error";

    if (typeof args.isOperational !== "undefined") {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}
