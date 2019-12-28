import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MaterialModule } from '@ui/material.module';

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MaterialModule,
  ],
})
export class AdminPanelModule {
}
