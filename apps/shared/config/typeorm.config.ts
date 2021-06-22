import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeOrmConfig = (entities): TypeOrmModule => ({
  type: 'postgres',
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  entities,
  synchronize: true,
  logging: true,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  namingStrategy: new SnakeNamingStrategy(),
});
