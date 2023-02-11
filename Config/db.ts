import mongoose from "mongoose";

const lifeUrl: string =
  "mongodb+srv://sannidatabase:sannidatabase@cluster0.zh68ie9.mongodb.net/test";

const loaclUrl: string = "mongodb://localhost/praticeErrorHandler";

export const config = async (): Promise<void> => {
  try {
    const connect = await mongoose.connect(lifeUrl);
    console.log("Conenected to ", connect.connection.host);
  } catch (error: any) {
    console.log("An Error Occured in DB", error.message);
  }
};
