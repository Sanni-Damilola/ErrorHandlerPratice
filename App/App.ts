import express, { Application } from "express";

const port: number = 2001;
const app: Application = express();

app.listen(port, () => {
  console.log("Done on", port);
});
