import { Schema, Document, model } from "mongoose";
import { IData } from "../interface/interface";
import isEmail from "validator/lib/isEmail";

interface ISchema extends IData, Document {}

const userSchema = new Schema<IData>(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      lowercase: true,
      unique: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model<ISchema>("User", userSchema);
export default UserModel;
