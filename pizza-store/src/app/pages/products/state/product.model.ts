import { Category } from '@pages/products/state/category.model';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
}

export function createProduct(params: Partial<Product>) {
  return { ...params } as Product;
}
