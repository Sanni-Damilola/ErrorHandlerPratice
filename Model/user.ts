import { IUser } from "../interface/interface";
import isEmail from "validator/lib/isEmail";
import { Document, Schema } from "mongoose";

interface ISchema extends IUser, Document {}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Please Your name"]
  },
});
