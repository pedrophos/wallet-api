import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { PrismaService } from '../config/primsma.service';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateTransactionDto) {
    const account = await this.prisma.account.findFirst({
      where: { id: dto.accountId, userId },
    });
    if (!account) throw new NotFoundException('Conta não encontrada');

    const newBalance =
      dto.type === 'INCOME'
        ? account.balance + dto.amount
        : account.balance - dto.amount;

    await this.prisma.account.update({
      where: { id: account.id },
      data: { balance: newBalance },
    });

    return this.prisma.transaction.create({
      data: {
        ...dto,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.transaction.findMany({
      where: {
        account: { userId },
      },
      include: {
        account: true,
      },
    });
  }
}
