import mongoose from "mongoose";

const loclUrl: string = "mongodb://localhost/praticeErrorHander";

export const config = async (): Promise<void> => {
  try {
    const connect = await mongoose.connect(loclUrl);
    console.log("connected to db ", mongoose.connection.host);
  } catch (error: any) {
    console.log("An Error in DB", error.messsage);
  }
};
