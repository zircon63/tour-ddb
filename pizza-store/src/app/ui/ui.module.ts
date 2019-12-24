import { ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { UiComponentsModule } from '@ui/ui-components/ui-components.module';
import { MaterialModule } from '@ui/material.module';
import { UiDirectivesModule } from '@ui/ui-directives/ui-directives.module';

const UI_MODULES = [
  UiComponentsModule,
  UiDirectivesModule,
  MaterialModule,
];
const UI_PROVIDERS: Provider[] = [];

const PIPES: Array<Type<any> | any[]> = [];

const ENTRY_COMPONENTS: Array<Type<any> | any[]> = [];

@NgModule({
  imports: [...UI_MODULES],
  exports: [...UI_MODULES],
  declarations: [...PIPES],
  entryComponents: [...ENTRY_COMPONENTS],
})
export class UiModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: UiModule,
      providers: [...UI_PROVIDERS],
    };
  }
}
