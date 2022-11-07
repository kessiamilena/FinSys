import { AppException } from "../../../../application/errors/AppException.js";
// import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";
import { prisma } from "../../../../database/PrismaClient.js";

export class ListTransactionsUseCase {
    // constructor() {
    //     this.transactionsRepository = TransactionsRepository.getInstance();
    // }

    async execute() {

        await prisma.$connect();

        const transaction = await prisma.transactions.findMany();

        if (!transaction.length) {
            throw new AppException(404, "Ainda não existem transações cadastradas!");
        }

        await prisma.$disconnect();

        return transaction;
    }
}