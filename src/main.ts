import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

/**
 * Now I just have a public table called profiles, which has the id of the auth.users uuid, but has no relation to the auth.users table, and 
 * I have a webhook/edge function combo that syncs whatever data I need from the auth.users table to the profiles table.
 */