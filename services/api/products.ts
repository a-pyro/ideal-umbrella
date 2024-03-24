import { API_URL, ApiResponse, tryAction } from './common';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductsResponse = ApiResponse<{ products: Product[] }>;

export const getProducts = async () =>
  tryAction(async () => {
    const response = await fetch(`${API_URL}/products`);
    const products = (await response.json()) as ProductsResponse;
    return products;
  });
