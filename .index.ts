import Express, { Application } from "express";

const port: number = 2001;

const app = Express();

app.listen(port, () => {
  console.log("Done on", port);
});
