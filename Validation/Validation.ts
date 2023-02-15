import { NextFunction } from "express";
import joi from "joi";
import { AppError, HttpCode } from "../Util/AppError";

export const validator = (
  schemaName: joi.ObjectSchema,
  body: object,
  next: NextFunction
) => {
  const value = schemaName.validate(body, {
    allowUnknown: true,
    abortEarly: false,
    stripUnknown: true,
  });
};
