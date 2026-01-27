import axios from 'axios';
import { ProductsResponse } from '@/types';

export const api = axios.create({
  baseURL: 'https://api-challenge.starsoft.games/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async (
  page = 1,
  rows = 8,
): Promise<ProductsResponse> => {
  const { data } = await api.get<ProductsResponse>(
    `/products?page=${page}&rows=${rows}&sortBy=price&orderBy=ASC`,
  );
  return data;
};
