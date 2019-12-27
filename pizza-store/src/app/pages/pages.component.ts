import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { AuthQuery } from '../auth/state';
import { MENU } from '@pages/shared/menu';
import { CartQuery } from '@pages/cart/state/cart.query';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PagesComponent {
  user$ = this.authQuery.user$;
  amountCartItems$ = this.cartQuery.selectCount();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(),
    );
  menu = MENU;

  constructor(private breakpointObserver: BreakpointObserver,
              private authQuery: AuthQuery,
              private cartQuery: CartQuery) {
  }
}
