import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOnDestroy } from '@core/destroy.service';
import { Account } from '../../../auth/state/models/account.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgOnDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent {
  @Input() user: Account;
  @Output() toggle = new EventEmitter();
}
