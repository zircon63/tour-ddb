import { ChangeDetectionStrategy, Component, Self } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validator, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { NgOnDestroy } from '@core/destroy.service';
import { FormControlAbstract, provideFormControl, provideValidator } from '@ui/shared/models/form-control.abstract';

/*price||$between||0,1000*/
const TransformValue = {
  to: (from: string, to: string) => {
    return `${from},${to}`;
  },
  from: (value: string) => {
    return value.split(',');
  },
};

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss'],
  providers: [provideFormControl(PriceFilterComponent), provideValidator(PriceFilterComponent), NgOnDestroy],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceFilterComponent extends FormControlAbstract<string> implements Validator {
  priceRange: FormGroup;

  constructor(private fb: FormBuilder,
              @Self() private ngOnDestroy$: NgOnDestroy) {
    super();
    this.priceRange = this.fb.group({
      to: this.fb.control(null, [
        Validators.pattern(/^[0-9]*$/),
        Validators.required,
      ]),
      from: this.fb.control(null, [
        Validators.pattern(/^[0-9]*$/),
        Validators.required,
      ]),
    });
    this.priceRange.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(350),
      map((value) => TransformValue.to(value.from, value.to)),
      takeUntil(this.ngOnDestroy$),
    ).subscribe((value: string) => {
      this.value = value;
      this.onChange(this.value);
    });
  }

  onValidateChange: any = () => {
  };

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: string): void {
    this.value = value;
    if (this.value !== null) {
      const [from, to] = TransformValue.from(this.value);
      this.priceRange.setValue({ from, to }, { emitEvent: false });
    }
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidateChange = fn;
  }

  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value) {
      const from = Number(c.value.from);
      const to = Number(c.value.to);
      const isValuesZeroOrNull = !from || !to;
      const patternErrors = this.From.errors || this.To.errors;
      if (patternErrors) {
        return patternErrors;
      }
      if (from === to && from === 0 && to === 0) {
        return null;
      }
      if (from >= to && !isValuesZeroOrNull) {
        return { range: true };
      } else {
        return null;
      }
    } else {
      return null;
    }

  }

  private get From(): AbstractControl {
    const from = this.priceRange.get('from');
    if (from) {
      return from;
    }
    throw Error('Cannot find FROM Control');
  }

  private get To(): AbstractControl {
    const from = this.priceRange.get('to');
    if (from) {
      return from;
    }
    throw Error('Cannot find FROM Control');
  }

}
