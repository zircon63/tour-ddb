import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeOrmOptionsLocal: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (config: ConfigService) => ({
    type: 'postgres',
    name: config.get('type'),
    host: config.get('database.local.host'),
    port: config.get('database.local.port'),
    username: config.get('database.local.username'),
    password: config.get('database.local.password'),
    database: config.get('database.local.name'),
    connectTimeout: 15000,
    entities: [
      __dirname + '/../**/*.entity{.ts,.js}',
    ],
    migrations: [
      'dist/migration/**{.ts,.js}',
    ],
    synchronize: false,
    migrationsRun: false,
    logging: 'all',
    cli: {
      migrationsDir: 'dist/migration',
    },
    namingStrategy: new SnakeNamingStrategy(),
  }),
  inject: [ConfigService],
};
