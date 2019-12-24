import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@ui/ui-components/header/header.component';
import { MaterialModule } from '@ui/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const UI_COMPONENTS = [
  HeaderComponent,
];

@NgModule({
  declarations: UI_COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: UI_COMPONENTS,
  providers: [],
})
export class UiComponentsModule {
}
