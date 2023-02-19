import { NextFunction, Request, Response, RequestHandler } from "express";
import { validation } from "../Validation";
import { UserSchemaValidation } from "./userValidation";

export const RegisterValidation: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validation(UserSchemaValidation.Register, req.body, next);
};
