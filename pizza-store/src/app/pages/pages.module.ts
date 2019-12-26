import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { UiModule } from '@ui/ui.module';
import { PagesRoutingModule } from '@pages/pages-routing.module';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from '@pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const PAGES_COMPONENTS = [
  PagesComponent,
  LoginComponent,
];

const PAGES_MODULES = [];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    UiModule,
    ...PAGES_MODULES,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [...PAGES_COMPONENTS],
  providers: [],
})
export class PagesModule {
}
