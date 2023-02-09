import { Document, Schema } from "mongoose";
import isEmail from "validator/lib/isEmail";
import { IUser } from "../interface/interface";

interface ISchema extends IUser, Document {}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Enter your name"],
    },
    email: {
      type: String,
      required: [true, "Enter a your Email"],
      lowercase: true,
      trim: true,
      unique: true,
      validate: [isEmail, "Please Enter a valid Email"],
    },
    password: {
      type: String,
      required: [true, "Enter your name"],
      unique: true,
      min: 6,
    },
  },
  {
    timestamps: true,
    versionKey: true,
  }
);
