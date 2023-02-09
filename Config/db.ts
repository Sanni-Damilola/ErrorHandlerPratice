import mongoose from "mongoose";

const url: string = "mongodb://localhost:27017/pratice";

export const config = async (): Promise<void> => {
  try {
    const connectToDB = await mongoose.connect(url);
    console.log("connected on", connectToDB.connection.host);
  } catch (error: any) {
    console.log("An error Occured In DB", error.message);
    process.exit(1);
  }
};
