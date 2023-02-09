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
  public readonly isOprational: boolean = true;
  public readonly message: string;
  public readonly httpCode: HttpCode;
}
