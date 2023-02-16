import { Request, Response, NextFunction } from "express";
import { AppError, HttpCode } from "../Util/AppError";

const devErrorHandler = (err: AppError, res: Response) => {
  return res.status(err.httpCode).json({
    error: err,
    status: err.httpCode,
    message: err.message,
    stack: err.stack,
  });
};

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  devErrorHandler(err, res);
};
