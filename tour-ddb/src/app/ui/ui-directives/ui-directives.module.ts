import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@ui/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const UI_DIRECTIVES = [];

@NgModule({
  declarations: [
    ...UI_DIRECTIVES,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...UI_DIRECTIVES,
  ],
})
export class UiDirectivesModule {
}
