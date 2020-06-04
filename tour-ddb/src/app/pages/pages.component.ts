import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthQuery } from '../auth/state';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PagesComponent {
  user$ = this.authQuery.user$;
  menu$ = this.authQuery.menu$;

  constructor(private authQuery: AuthQuery) {
  }
}
