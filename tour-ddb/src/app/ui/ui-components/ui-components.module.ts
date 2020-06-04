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
import { UiDirectivesModule } from '@ui/ui-directives/ui-directives.module';
import { CrudTableComponent } from '@ui/ui-components/crud-table/crud-table.component';
import { TableCellPipe } from '@ui/ui-components/crud-table/table-cell.pipe';
import { MatRadioModule } from '@angular/material/radio';

const UI_COMPONENTS = [
  HeaderComponent,
  MenuComponent,
  CartInfoComponent,
  CrudTableComponent,
  TableCellPipe,
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
    UiDirectivesModule,
    MatRadioModule,
  ],
  exports: UI_COMPONENTS,
  providers: [],
})
export class UiComponentsModule {
}
