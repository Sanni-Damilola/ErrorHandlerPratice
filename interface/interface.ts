export interface IData {
  name: string;
  email: string;
  password: string;
}

export interface IShop {
  name: string;
  address: string;
  products: IProduct[];
}

export interface IProduct {
  name: string;
  category: string;
  price: number;
  no_In_Stock: number;
  shop: IShop;
}

export interface IProduct {
  name: string;
  category: string;
  price: number;
  no_In_Stock: number;
  shop: IShop;
}
