import { Module } from '@nestjs/common';
import { ConfigModule } from '../../shared/config/config.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../../shared/config/typeorm.config';

import { User } from './user/entities/user.entity';

@Module({
  imports: [
    UserModule,
    ConfigModule,
    TypeOrmModule.forRoot(typeOrmConfig([User])),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
