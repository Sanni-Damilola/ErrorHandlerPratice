import { Request, Response, NextFunction } from "express";
import { AppError, HttpCode } from "../Util/AppError";

const devError = (err: AppError, res: Response) => {
  return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
    error: err,
    message: err.message,
    stack: err.stack,
    status: err.httpCode,
  });
};
