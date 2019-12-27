import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@ui/ui-components/header/header.component';
import { MaterialModule } from '@ui/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from '@ui/ui-components/menu/menu.component';
import { CartInfoComponent } from '@ui/ui-components/cart-info/cart-info.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';

const UI_COMPONENTS = [
  HeaderComponent,
  MenuComponent,
  CartInfoComponent
];

@NgModule({
  declarations: UI_COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatTooltipModule,
  ],
  exports: UI_COMPONENTS,
  providers: [],
})
export class UiComponentsModule {
}
