// import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";
import { prisma } from "../../../../database/PrismaClient.js";

export class UpdateTransactionUseCase {
  // constructor() {
  //   this.transactionsRepository = TransactionsRepository.getInstance();
  // }

async execute({ id, title, type, category, amount }) {

  await prisma.$connect();

    const updatedTransaction = await prisma.transactions.update({
      where: {
        id,
      },
      data: {
        title, 
        type, 
        category, 
        amount
      },
    });

    await prisma.$disconnect();

    return updatedTransaction;
  }
}
