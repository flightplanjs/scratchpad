import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as dotenv } from 'dotenv';

async function bootstrap() {
  dotenv();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT ?? 5102);
}
bootstrap();
