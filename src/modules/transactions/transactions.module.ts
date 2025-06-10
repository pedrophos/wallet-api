import { Module } from '@nestjs/common';
import { PrismaService } from '../config/primsma.service';
import { TransactionsController } from './transaction.controller';
import { TransactionsService } from './transactions.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, PrismaService],
  exports: [TransactionsService],
})
export class TransactionsModule {}
