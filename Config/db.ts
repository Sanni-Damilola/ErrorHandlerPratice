import mongoose from "mongoose";

const url: string =
  "mongodb+srv://sannidatabase:sannidatabase@cluster0.zh68ie9.mongodb.net/test";

export const connfig = async (): Promise<void> => {
  try {
    const connetToDB = await mongoose.connect(url);
    console.log("connect to DB", connetToDB.connection.host);
  } catch (error: any) {
    console.log("An Error occured In DB", error.message);
    process.exit(1);
  }
};
