import { ConfigModule as Config } from '@nestjs/config';
import { Module } from '@nestjs/common';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    Config.forRoot({
      envFilePath: ['.env'],
      validationSchema: Joi.object({
        PG_HOST: Joi.string().required(),
        PG_PORT: Joi.string().required(),
        PG_DATABASE: Joi.string().required(),
        PG_USERNAME: Joi.string().required(),
        KAFKA_BROKER_URI: Joi.string().required(),
      }),
    }),
  ],
})
export class ConfigModule {}
