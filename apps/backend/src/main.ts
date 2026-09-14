import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:4200', 'https://drive-admin.hsalem-anwar.dev'],
  });
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
