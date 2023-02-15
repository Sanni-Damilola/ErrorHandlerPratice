import { NextFunction } from "express";
import joi from "joi";

export const validate = (
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
