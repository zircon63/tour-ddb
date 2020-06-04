import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeOrmOptionsCentral: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (config: ConfigService) => ({
    type: 'postgres',
    name: config.get('type'),
    host: config.get('database.central.host'),
    port: config.get('database.central.port'),
    username: config.get('database.central.username'),
    password: config.get('database.central.password'),
    database: config.get('database.central.name'),
    connectTimeout: 15000,
    entities: [
      __dirname + '/../**/*.entity{.ts,.js}',
    ],
    migrations: [
      'dist/migration/**{.ts,.js}',
    ],
    synchronize: false,
    migrationsRun: false,
    logging: null,
    cli: {
      migrationsDir: 'dist/migration',
    },
    namingStrategy: new SnakeNamingStrategy(),
  }),
  name: 'central',
  inject: [ConfigService],
};
