import { Request, Response, NextFunction } from "express";
import { AppError, HttpCode } from "../Util/AppError";

const devErrorHandler = (err: AppError, res: Response) => {
  res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
    message: err.message,
    stack: err.stack,
    err: err,
    status: err.httpCode,
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
