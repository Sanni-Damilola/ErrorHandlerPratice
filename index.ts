import express, { Application } from "express";
import { appConfig } from "./App/App";
import { config } from "./Config/db";

const app: Application = express();

const port: number = 3000;
appConfig(app);
config();

app.listen(port, () => {
  console.log("Done on port", port);
});
