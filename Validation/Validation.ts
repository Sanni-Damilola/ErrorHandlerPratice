import { NextFunction } from "express";
import joi from "joi";
import { AppError, HttpCode } from "../Util/AppError";

export const validate = (
  schemName: joi.ObjectSchema,
  body: object,
  next: NextFunction
) => {
  const value = schemName.validate(body, {
    allowUnknown: true,
    abortEarly: false,
    stripUnknown: true,
  });
};
