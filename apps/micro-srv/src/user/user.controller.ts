import { Controller, OnModuleInit } from '@nestjs/common';
import { Client, ClientKafka, EventPattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { microserviceConfig } from '../../../shared/microservice.config';

@Controller()
export class UserController implements OnModuleInit {
  constructor(private readonly userService: UserService) {}

  @Client(microserviceConfig)
  client: ClientKafka;

  onModuleInit() {
    const requestPatterns = ['register-batch'];

    requestPatterns.forEach((pattern) => {
      this.client.subscribeToResponseOf(pattern);
    });
  }

  @EventPattern('register-batch')
  async registerBatch(payload: any) {
    this.userService.registerBatch(payload.value.batchData);
  }
}
