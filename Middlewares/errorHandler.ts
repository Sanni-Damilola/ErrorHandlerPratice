import { Request, Response, NextFunction } from "express";
import { AppError, HttpCode } from "../Util/AppError";

const devErrorHandler = (res: Response, err: AppError) => {
  res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
    message: err.message,
    stack: err.stack,
    err: err,
    status: err.httpCode,
  });
};

export const erroHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
  err: AppError
) => {
  devErrorHandler(err, res);
};
