import exppress, {
  Application,
  Request,
  Response,
  NextFunction,
} from "express";

import cors from "cors";
import morgan from "morgan";
import { AppError, HttpCode } from "../Util/AppError";
import { errorHandler } from "../Middlewares/errorHandler";

export const appConfig = (app: Application) => {
  app
    .use(exppress.json())
    .use(cors())
    .use(morgan("dev"))
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new AppError({
          message: `This Routes ${req.originalUrl} does not exist`,
          httpCode: HttpCode.NOT_FOUND,
          isOperational: true,
        })
      );
    })
    .use(errorHandler);
};
