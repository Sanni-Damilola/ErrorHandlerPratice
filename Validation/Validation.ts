import { NextFunction } from "express";
import joi from "joi";
import { AppError, HttpCode } from "../Util/AppError";

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

  try {
    
  } catch (error) {
   value.error ? next(
    new AppError({
        
    })
   ) 
  }
};
