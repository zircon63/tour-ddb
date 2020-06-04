import { DynamicModule, Inject, Module, OnModuleInit } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { ANGULAR_MODULE_OPTIONS, DEFAULT_RENDER_PATH, DEFAULT_ROOT_PATH } from './angular.constants';
import { angularProviders } from './angular.providers';
import { AngularModuleOptions } from './interfaces/angular-options.interface';
import { AbstractLoader } from './loaders/abstract.loader';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [...angularProviders],
})
export class AngularModule implements OnModuleInit {
  constructor(
    @Inject(ANGULAR_MODULE_OPTIONS)
    private readonly ngOptions: AngularModuleOptions,
    private readonly loader: AbstractLoader,
    private readonly httpAdapterHost: HttpAdapterHost,
  ) {
  }

  public static forRoot(): DynamicModule {
    return {
      module: AngularModule,
      providers: [
        {
          provide: ANGULAR_MODULE_OPTIONS,
          useFactory: (config: ConfigService) => {
            return {
              renderPath: config.get('client.render', DEFAULT_RENDER_PATH),
              rootPath: config.get('client.path', DEFAULT_ROOT_PATH),
            } as AngularModuleOptions;
          },
          inject: [ConfigService],
        },
      ],
    };
  }

  public async onModuleInit() {
    const httpAdapter = this.httpAdapterHost.httpAdapter;
    this.loader.register(httpAdapter, this.ngOptions);
  }
}
