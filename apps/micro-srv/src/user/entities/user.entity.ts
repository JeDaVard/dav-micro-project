import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
} from 'typeorm';
import { IsDefined, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty()
  @IsDefined({ always: true })
  @IsString({ always: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  @IsDefined({ always: true })
  @IsString({ always: true })
  password: string;
}
