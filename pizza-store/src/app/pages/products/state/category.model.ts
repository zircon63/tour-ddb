import { ID } from '@datorama/akita';

export interface Category {
  id: ID;
  name: string;
}

export function createCategory(params: Partial<Category>) {
  return {
    ...params,
  } as Category;
}
