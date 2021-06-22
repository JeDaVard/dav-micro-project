import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { microserviceConfig } from '../../shared/microservice.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // eslint-disable-next-line
  // @ts-ignore
  delete microserviceConfig.options.consumer;
  app.connectMicroservice(microserviceConfig);

  await app.startAllMicroservicesAsync();
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
