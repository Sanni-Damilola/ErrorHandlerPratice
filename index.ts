import express, { Application } from "express";
import { environmentsVarribales } from "./Config/environmentVaribles";

const port = environmentsVarribales.PORT;
const app: Application = express();

app.listen(port, () => {
  console.log("Done on", port);
});
