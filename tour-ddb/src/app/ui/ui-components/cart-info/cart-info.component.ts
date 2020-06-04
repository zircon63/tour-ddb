import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartInfoComponent implements OnInit {
  @Input() amount: string;
  constructor() { }

  ngOnInit() {
  }

}
