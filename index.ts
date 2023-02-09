import express, { Application } from "express";
import { appConfig } from "./App/App";
import { config } from "./Config/db";

const port: number = 2001;

const app: Application = express();
appConfig(app);
config();

app.listen(port, () => {
  console.log("Done on", port);
});
