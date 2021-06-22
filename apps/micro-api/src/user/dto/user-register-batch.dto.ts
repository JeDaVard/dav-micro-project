import { UserRegisterDto } from './user-register.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UserRegisterBatchDto {
  @ApiProperty({ type: () => [UserRegisterDto] })
  @ValidateNested({ each: true })
  @Type(() => UserRegisterDto)
  batchData: UserRegisterDto[];
}
