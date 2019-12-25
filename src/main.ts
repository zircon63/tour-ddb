import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import { REDIS_STORE } from './redis/redis.store';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(session({
    name: 'pizza-store',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: REDIS_STORE,
  }));

  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}

bootstrap();
