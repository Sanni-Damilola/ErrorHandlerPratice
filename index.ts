import express, { Application } from "express";
import { appConfig } from "./App/App";
import { config } from "./Config/db";

const app: Application = express();
const port: number = 2001;

appConfig(app);
config();

app.listen(port, () => {
  console.log("Don on Port", port);
});
