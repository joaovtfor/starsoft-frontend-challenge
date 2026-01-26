import axios from 'axios';
import { IProductAPI } from '@/types';

export const api = axios.create({
  baseURL: 'https://api-challenge.starsoft.games/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface ProductsResponse {
  products: IProductAPI[];
}

export const getProducts = async (page = 1, rows = 8) => {
  const { data } = await api.get<ProductsResponse>(
    `/products?page=${page}&rows=${rows}&sortBy=price&orderBy=ASC`,
  );
  return data;
};
