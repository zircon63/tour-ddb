import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { EntityState, ActiveState, EntityStore, StoreConfig } from '@datorama/akita';

export interface ProductState extends EntityState<Product>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'product' })
export class ProductStore extends EntityStore<ProductState> {

  constructor() {
    super();
  }

}

