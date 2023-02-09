import express, { Application } from "express";
import { appConfig } from "./App/App";

const port: number = 2001;

const app: Application = express();
appConfig(app);

app.listen(port, () => {
  console.log("Done on", port);
});
