import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterBatchDto } from './dto/user-register-batch.dto';
// import { ApiExtraModels } from '@nestjs/swagger';
// import { UserRegisterDto } from './dto/user-register.dto';

// @ApiExtraModels(UserRegisterDto)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register-batch')
  registerBatch(@Body() body: UserRegisterBatchDto): string {
    return this.userService.registerBatch(body);
  }
}
