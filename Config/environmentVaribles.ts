import dotenv from "dotenv";

dotenv.config();

export const environmentsVarribales = {
  PORT: process.env.PORT as string,
};
