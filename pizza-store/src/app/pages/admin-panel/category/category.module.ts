import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTableComponent } from '@pages/admin-panel/category/category-table/category-table.component';
import { CategoryRoutingModule } from '@pages/admin-panel/category/category-routing.module';
import { UiComponentsModule } from '@ui/ui-components/ui-components.module';
import { MaterialModule } from '@ui/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoryTableComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    UiComponentsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
})
export class CategoryModule {
}
