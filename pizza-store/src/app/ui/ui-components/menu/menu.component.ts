import { Attribute, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '@ui/ui-components/shared/menu.item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  @Input() items: MenuItem[];

  constructor(@Attribute('title') public title: string) {
  }

  ngOnInit() {
  }

}
