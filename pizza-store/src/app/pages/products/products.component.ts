import { ChangeDetectionStrategy, Component, OnInit, Self } from '@angular/core';
import { ProductService } from '@pages/products/state/product.service';
import { ProductQuery } from '@pages/products/state/product.query';
import { NgOnDestroy } from '@core/destroy.service';
import { take, takeUntil } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { SearchFormHttpParams } from '@pages/products/search-form/search-form.component';
import { CategoryService } from '@pages/products/state/category.service';
import { forkJoin } from 'rxjs';
import { CategoryQuery } from '@pages/products/state/category.query';
import { Product } from '@pages/products/state/product.model';
import { NgEntityServiceLoader } from '@datorama/akita-ng-entity-service';
import { CartService } from '@pages/cart/state/cart.service';

@Component({
  selector: 'app-products',
  template: `
    <app-search-form [categories]="categories$ | async" (search)="search($event)"></app-search-form>
    <mat-divider></mat-divider>
    <ng-container *ngIf="loading.get$ | async; then loadView; else gridView"></ng-container>
    <ng-template #loadView>
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    </ng-template>
    <ng-template #gridView>
      <div fxLayout="row wrap" fxLayoutGap="32px" fxLayoutAlign="flex-start" class="product-list">
        <ng-container *ngFor="let product of products$ | async">
          <app-product-card fxFlex="0 1 250px"
                            [product]="product"
                            (buy)="addToCart($event)">
          </app-product-card>
        </ng-container>
      </div>
    </ng-template>
  `,
  styles: [`
    .product-list {
      margin-top: 20px;
      margin-left: 20px;
      padding-bottom: 20px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgOnDestroy],
})
export class ProductsComponent implements OnInit {
  products$ = this.productQuery.selectAll();
  categories$ = this.categoryQuery.selectAll();
  loading = this.loader.loadersFor('product');

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private categoryQuery: CategoryQuery,
              private productQuery: ProductQuery,
              private cartService: CartService,
              private loader: NgEntityServiceLoader,
              @Self() private ngOnDestroy$: NgOnDestroy) {
  }

  ngOnInit() {
    forkJoin([
      this.productService.get(),
      this.categoryService.get(),
    ])
      .pipe(
        takeUntil(this.ngOnDestroy$),
      ).subscribe();
  }

  search(value: SearchFormHttpParams) {
    const params = new HttpParams({
      fromObject: value,
    });
    this.productService.get({
      params,
    }).pipe(
      take(1),
    ).subscribe();
  }

  addToCart(product: Product) {
    this.cartService.add(product);
  }

}
