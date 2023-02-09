import exppress, {
  Application,
  Request,
  Response,
  NextFunction,
} from "express";

import cors from "cors";
import morgan from "morgan";

export const appConfig = (app: Application) => {
  app.use(exppress.json()).use(cors()).use(morgan("dev"));
};
