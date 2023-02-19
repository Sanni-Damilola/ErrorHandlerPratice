export enum httpCode {
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
  HttpCode: httpCode;
}


export class AppError extends Error {
  
}
