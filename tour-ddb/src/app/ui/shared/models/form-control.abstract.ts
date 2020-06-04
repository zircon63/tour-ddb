import {forwardRef, Input, Type} from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

export function provideFormControl<T>(item: Type<T>) {
  return [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => item),
      multi: true,
    }
  ];
}

export function provideValidator<T>(item: Type<T>) {
  return [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => item),
      multi: true,
    }
  ];
}

export class FormControlAbstract<T> implements ControlValueAccessor {
  protected _value!: T;
  @Input()
  get value(): T {
    return this._value;
  }

  set value(newValue: T) {
    if (this._value !== newValue) {
      this.setValue(newValue);
    }
  }

  public setValue(value: T) {
    this._value = value;
  }

  public onChange: any = () => {
  };

  public onTouched: any = () => {
  };

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
