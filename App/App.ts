import express, { Request, Response, NextFunction, Application } from "express";
import cors from "cors";
import morgan from "morgan";
import { AppError, HttpCode } from "../Util/AppError";
import { errorHandler } from "../Middlewares/errorHandler";

export const appConfig = (app: Application) => {
  app
    .use(cors())
    .use(morgan("dev"))
    .use(express.json())
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new AppError({
          message: `This route does not exist`,
          httpCode: HttpCode.OK,
          isOperational: true,
        })
      );
    })

    .use(errorHandler);
};
