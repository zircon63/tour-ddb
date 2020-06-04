import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AngularModule } from './angular/angular.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RedisModule } from './redis/redis.module';
import { ClientsModule } from './clients/clients.module';
import { SalesModule } from './sales/sales.module';
import { ToursModule } from './tours/tours.module';
import { CountriesModule } from './countries/countries.module';
import { DiscountsModule } from './discounts/discounts.module';
import { typeOrmOptionsLocal } from './config/type-orm.options.local';
import { typeOrmOptionsCentral } from './config/type-orm.options.central';

@Module({
  imports: [
    AngularModule.forRoot(),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: process.env.ENV_PATH,
    }),
    TypeOrmModule.forRootAsync(typeOrmOptionsLocal),
    TypeOrmModule.forRootAsync(typeOrmOptionsCentral),
    RedisModule,
    AuthModule,
    ClientsModule,
    SalesModule,
    ToursModule,
    CountriesModule,
    DiscountsModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {
}
