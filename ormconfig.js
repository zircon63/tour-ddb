const SnakeNamingStrategy = require('typeorm-naming-strategies')
  .SnakeNamingStrategy;

module.exports = [
  {
    'name': 'central',
    'type': 'postgres',
    'host': 'localhost',
    'port': 5432,
    'username': 'postgres',
    'password': 'test',
    'database': 'tourdb',
    'synchronize': true,
    'logging': false,
    'migrations': [
      'dist/central/migration/central/*.js',
    ],
    namingStrategy: new SnakeNamingStrategy(),
    'entities': [
      'dist/central/**/*.entity{.ts,.js}',
    ],
    'cli': {
      'migrationsDir': 'src/migration/central',
    },
  },
  {
    'name': 'local1',
    'type': 'postgres',
    'host': 'localhost',
    'port': 5433,
    'username': 'postgres',
    'password': 'test',
    'database': 'tourdb',
    'synchronize': true,
    'logging': false,
    'migrations': [
      'dist/local1/migration/local/*.js',
    ],
    namingStrategy: new SnakeNamingStrategy(),
    'entities': [
      'dist/local1/**/*.entity{.ts,.js}',
    ],
    'cli': {
      'migrationsDir': 'src/migration/local',
    },
  },
  {
    'name': 'local2',
    'type': 'postgres',
    'host': 'localhost',
    'port': 5434,
    'username': 'postgres',
    'password': 'test',
    'database': 'tourdb',
    'synchronize': true,
    'logging': false,
    'migrations': [
      'dist/local2/migration/local/*.js',
    ],
    namingStrategy: new SnakeNamingStrategy(),
    'entities': [
      'dist/local2/**/*.entity{.ts,.js}',
    ],
    'cli': {
      'migrationsDir': 'src/migration/local',
    },
  },
  {
    'name': 'central-seed',
    'type': 'postgres',
    'host': 'localhost',
    'port': 5432,
    'username': 'postgres',
    'password': 'test',
    'database': 'tourdb',
    'synchronize': true,
    'logging': false,
    'migrations': [
      'dist/central/seeds/central/*.js',
    ],
    namingStrategy: new SnakeNamingStrategy(),
    'entities': [
      'dist/central/**/*.entity{.ts,.js}',
    ],
    'cli': {
      'migrationsDir': 'src/seeds/central',
    },
  },
  {
    'name': 'local1-seed',
    'type': 'postgres',
    'host': 'localhost',
    'port': 5433,
    'username': 'postgres',
    'password': 'test',
    'database': 'tourdb',
    'synchronize': true,
    'logging': false,
    'migrations': [
      'dist/local1/seeds/local1/*.js',
    ],
    namingStrategy: new SnakeNamingStrategy(),
    'entities': [
      'dist/local1/**/*.entity{.ts,.js}',
    ],
    'cli': {
      'migrationsDir': 'src/seeds/local1',
    },
  },
  {
    'name': 'local2-seed',
    'type': 'postgres',
    'host': 'localhost',
    'port': 5434,
    'username': 'postgres',
    'password': 'test',
    'database': 'tourdb',
    'synchronize': true,
    'logging': false,
    'migrations': [
      'dist/local2/seeds/local2/*.js',
    ],
    namingStrategy: new SnakeNamingStrategy(),
    'entities': [
      'dist/local2/**/*.entity{.ts,.js}',
    ],
    'cli': {
      'migrationsDir': 'src/seeds/local2',
    },
  },
];
