import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";

export const appConfig = (app: Application) => {
  // middleware
  app.use(express.json()).use(morgan("dev")).use(cors());
};
