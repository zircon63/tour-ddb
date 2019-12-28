import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@ui/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HasRoleDirective } from './has-role.directive';

const UI_DIRECTIVES = [HasRoleDirective];

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
