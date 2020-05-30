import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AngularModule } from './angular/angular.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmOptions } from './config/type-orm.options';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RedisModule } from './redis/redis.module';
import { ClientsModule } from './clients/clients.module';
import { SalesModule } from './sales/sales.module';
import { ToursModule } from './tours/tours.module';
import { CountriesModule } from './countries/countries.module';
import { DiscountsModule } from './discounts/discounts.module';

@Module({
  imports: [
    AngularModule.forRoot({
      rootPath: 'pizza-store/dist/pizza-store',
    }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmOptions),
    RedisModule,
    AuthModule,
    ClientsModule,
    SalesModule,
    ToursModule,
    CountriesModule,
    DiscountsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {
}
