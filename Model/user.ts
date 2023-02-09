import { Document, Schema } from "mongoose";
import isEmail from "validator/lib/isEmail";
import { IUser } from "../interface/interface";

interface ISchema extends IUser, Document {}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Enter your name"],
  },
  email: {
    type: String,
    required: [true, "Enter a vaild Email"],
    isEmail: []
    
  },
  password: {
    type: String,
    required: [true, "Enter your name"],
  },
});
