import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AccountModule } from './modules/account/accounts.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [UsersModule, AuthModule, AccountModule, TransactionsModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
