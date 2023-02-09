import { Request, Response, NextFunction } from "express";
import { AppError, HttpCode } from "../Util/AppError";

const devErrorHandler = (err: AppError, res: Response) => {
  res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
    error: err,
    message: err.message,
    stack: err.stack,
    status: err.httpCode,
  });
};

export const errorHander = (
  req: Request,
  res: Response,
  next: NextFunction,
  err: AppError
) => {
  devErrorHandler(err, res);
};
