import { Schema, model, Document } from "mongoose";
import { IProduct } from "../interface/interface";

interface ProductSchema extends IProduct, Document {}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    no_In_Stock: {
      type: Number,
      required: true,
    },
    shop: {
      type: Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProductModel = model<ProductSchema>("Products", productSchema);
export default ProductModel;
