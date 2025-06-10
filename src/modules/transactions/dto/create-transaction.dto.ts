import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';

export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export class CreateTransactionDto {
  @ApiProperty({title: "Transaction Type",
                description: "Title of transaction", 
                enum: TransactionType })
  @IsEnum(TransactionType)
  type: TransactionType;

  @ApiProperty({ title: 'Transaction Value', 
                 description: "Value of the transaction" , 
                 example: 100.0 })
  @IsNumber()
  @IsPositive()
  amount: number;
  @ApiProperty({ title: "AccountId",
                 description: "The id of the account", 
                 example: 'uuid-account' })
  @IsUUID()
  accountId: string;

  @ApiProperty({ title: 'Transaction Title', example: 'Salary' })
  @IsString()
  title: string;
}
