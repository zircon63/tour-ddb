import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
