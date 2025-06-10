import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '../config/primsma.service';
import { UsersController } from './user.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
