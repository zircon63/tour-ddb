import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthQuery } from '../auth/state';
import { CartQuery } from '@pages/cart/state/cart.query';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PagesComponent {
  user$ = this.authQuery.user$;
  amountCartItems$ = this.cartQuery.selectCount().pipe(map(String));
  menu$ = this.authQuery.menu$;

  constructor(private authQuery: AuthQuery,
              private cartQuery: CartQuery) {
  }
}
