import {
  IsString,
  IsEmail,
  IsInt,
  Min,
  Max,
  MinLength,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsInt()
  @Min(18)
  @Max(100)
  @Type(() => Number)
  age?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  yearsOfWorking?: number;
}
