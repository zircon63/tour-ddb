import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmOptions: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (config: ConfigService) => ({
    type: 'mysql',
    host: config.get('database.host'),
    port: config.get('database.port'),
    username: config.get('database.username'),
    password: config.get('database.password'),
    database: config.get('database.name'),
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
  }),
  inject: [ConfigService],
};
