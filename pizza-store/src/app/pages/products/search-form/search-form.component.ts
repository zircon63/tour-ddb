import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from '@pages/products/state/category.model';

export interface SearchFormHttpParams {
  [param: string]: ReadonlyArray<string> | string;
}

export interface SearchFormValue {
  category: number[];
  price: string;
  sort: 'ASC' | 'DESC';
}

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnChanges {
  @Input() categories: Category[];
  @Output() search = new EventEmitter<SearchFormHttpParams>();
  searchForm = this.fb.group({
    category: this.fb.control(null, Validators.required),
    price: this.fb.control('0,1000', Validators.required),
    sort: this.fb.control('ASC', Validators.required),
  });
  SORT_VALUES = [
    {
      value: 'ASC',
      view: 'По возрастанию',
    },
    {
      value: 'DESC',
      view: 'По убыванию',
    },
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.categories && changes.categories.currentValue && this.categories.length) {
      this.searchForm.patchValue({
        category: this.categories.map(c => c.id),
      });
    }
  }

  onSearch() {
    const formValue: SearchFormValue = this.searchForm.value;
    const value: SearchFormHttpParams = this.getHttpParams(formValue);
    this.search.emit(value);
  }

  reset() {
    this.searchForm.reset({
      category: this.categories.map(c => c.id),
      price: '0,1000',
      sort: 'ASC',
    });
    this.onSearch();
  }

  private getHttpParams(formValue: SearchFormValue): SearchFormHttpParams {
    return {
      sort: `price,${formValue.sort}`,
      filter: [
        `category||$inL||${formValue.category.join(',')}`,
        `price||$between||${formValue.price}`,
      ],
    };
  }

}
