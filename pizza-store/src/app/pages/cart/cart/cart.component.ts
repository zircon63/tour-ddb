import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartQuery } from '@pages/cart/state/cart.query';
import { CartService } from '@pages/cart/state/cart.service';
import { CartItem } from '@pages/cart/state/cart.model';
import { Observable, throwError } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { NotificationService } from '@shared/notification.service';
import { AuthQuery } from '../../../auth/state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {

  items$: Observable<CartItem[]>;
  total$: Observable<number>;
  displayedColumns: Array<string> = ['category', 'name', 'amount', 'price', 'total', 'action'];

  constructor(private cartQuery: CartQuery,
              private cartService: CartService,
              private authQuery: AuthQuery,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.items$ = this.cartQuery.selectItems$;
    this.total$ = this.cartQuery.selectTotal$;
  }

  remove({ id }: CartItem) {
    this.cartService.remove(id);
  }

  updateAmount(item: CartItem, amount: number) {
    this.cartService.updateAmount(item, amount);
  }

  performOrder() {
    this.authQuery.isAuth$.pipe(
      switchMap(isAuth => {
        if (isAuth) {
          return this.cartService.performOrder(this.cartQuery.getAll())
            .pipe(
              take(1),
            );
        } else {
          return throwError('Для оформления заказа необходимо авторизоваться');
        }
      }),
    ).subscribe(() => {
        this.notificationService.success('Заказ успешно создан');
      },
      (msg) => {
        this.notificationService.error(msg);
      });
  }

}
