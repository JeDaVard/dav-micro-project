import { Injectable } from '@nestjs/common';
import { UserRegisterBatchDto } from './dto/user-register-batch.dto';
import { Client, ClientKafka } from '@nestjs/microservices';
import { microserviceConfig } from '../../../shared/microservice.config';

@Injectable()
export class UserService {
  @Client(microserviceConfig)
  client: ClientKafka;

  registerBatch(userRegisterBatchDto: UserRegisterBatchDto): string {
    this.client.emit<UserRegisterBatchDto>(
      'register-batch',
      userRegisterBatchDto,
    );
    return "Thank you for the request. We'll notify you when it's processed";
  }
}
