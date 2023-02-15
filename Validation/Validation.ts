import { NextFunction } from "express";
import Joi from "joi";

export const validate = (
  schemaName: Joi.ObjectSchema,
  body: object,
  next: NextFunction
) => {
  const value = schemaName.validate(body, {
    allowUnknown: true,
    abortEarly: false,
    stripUnknown: true,
  });

  try {
    
  } catch (error) {
    
  }
};
