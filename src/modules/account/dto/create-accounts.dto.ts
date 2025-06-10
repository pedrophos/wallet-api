import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateAccountDto {
  @ApiProperty({
    title: 'Account Name',
    example: 'My Savings Account',
    description: 'The name of the account to be created',})
  @IsString()
  @IsNotEmpty()
  name: string;
}
