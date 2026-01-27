export interface IProductAPI {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  createdAt: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ProductsResponse {
  products: IProductAPI[];
  count: number;
  page: number;
}
