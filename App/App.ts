import express, { Request, Response, NextFunction, Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { AppError, HttpCode } from "../Util/AppError";
import { errorHandler } from "../Middlewares/errorHandler";

export const appConfig = (app: Application) => {
  app
    .use(express.json())
    .use(morgan("dev"))
    .use(cors())
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new AppError({
          message: "Route not found",
          isOperational: true,
          httpCode: HttpCode.OK,
        })
      );
    })

    .use(errorHandler);
};
