import { Schema, model, Document } from "mongoose";
import { IShop } from "../interface/interface";

interface ShopSchema extends IShop, Document {}

const shopSchema = new Schema<IShop>(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Products",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ShopModel = model<ShopSchema>("Shop", shopSchema);
export default ShopModel;
