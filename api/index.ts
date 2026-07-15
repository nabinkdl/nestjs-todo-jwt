import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import type { Request, Response } from 'express';

let app;

async function getApp() {
  if (!app) {
    app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: process.env.CORS_ORIGIN || true,
      credentials: true,
    });
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  }
  return app;
}

export default async function handler(req: Request, res: Response) {
  const app = await getApp();
  const expressInstance = app.getHttpAdapter().getInstance();
  return expressInstance(req, res);
}
