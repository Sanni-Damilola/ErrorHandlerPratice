import { Request, Response, NextFunction } from "express";
import { AppError, HttpCode } from "../Util/AppError";

const devErrorHandler = (err: AppError, res: Response) => {
  return res.status(err.httpCode).json({
    error: err,
    status: err.httpCode,
    name: err.name,
    stack: err.stack,
  });
};

export const errorHandler = (err: AppError, res: Response) => {
  devErrorHandler(err, res);
};
