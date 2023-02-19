import { object } from "joi";

export enum HttpCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  CONFLICT = 409,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_IDENTITY,
  INTERNAL_SERVER_ERROR = 500,
}

interface argsError {
  name?: string;
  isOperational?: boolean;
  message: string;
  httpCode: HttpCode;
}

export class AppError extends Error {
  public readonly message: string;
  public readonly isOperational: boolean = true;
  public readonly httpCode: HttpCode;

  constructor(args: argsError) {
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
