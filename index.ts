import express, { Application } from "express";
import { appConfig } from "./App/App";
import { connfig } from "./Config/db";

const port: number = 2001;
const app: Application = express();
appConfig(app);
connfig();

app.listen(port, () => {
  console.log("Done on port", port);
});
