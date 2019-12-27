import {
  MatButtonModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatDialogModule,
  MATERIAL_SANITY_CHECKS,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IMatIcon } from './shared/interfaces/mat-icon.interface';
import { MaterialIconsList } from './shared/material-icons-list';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const MAT_MODULES = [
  MatIconModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  MatSortModule,
  MatMenuModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSelectModule,
  MatOptionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatListModule,
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
];

@NgModule({
  exports: [...MAT_MODULES],
  providers: [
    { provide: MATERIAL_SANITY_CHECKS, useValue: false },
  ],
})
export class MaterialModule {
  constructor(private sanitizer: DomSanitizer,
              private matIconRegistry: MatIconRegistry) {
    const extention = '.svg';
    MaterialIconsList.forEach((icon: IMatIcon) => {
      const url = sanitizer.bypassSecurityTrustResourceUrl(icon.src + icon.name + extention);
      matIconRegistry.addSvgIcon(icon.name, url);
    });
  }
}

