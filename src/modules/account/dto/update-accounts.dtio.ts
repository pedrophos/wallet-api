import { IsOptional, IsString } from 'class-validator';

export class UpdateAccountDto {
  @IsString()
  @IsOptional()
  name?: string;
}
