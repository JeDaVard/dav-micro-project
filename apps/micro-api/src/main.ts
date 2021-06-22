import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { microserviceConfig } from '../../shared/microservice.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.connectMicroservice(microserviceConfig);

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Micro API')
    .setDescription('Micro API')
    .setVersion('1.0')
    .addTag('Micro API')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.startAllMicroservicesAsync();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
