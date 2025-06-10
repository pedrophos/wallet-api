import { Module } from '@nestjs/common';

import { PrismaService } from '../config/primsma.service';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';


@Module({
  controllers: [AccountsController],
  providers: [AccountsService, PrismaService],
  exports: [AccountsService],
})
export class AccountModule {}
