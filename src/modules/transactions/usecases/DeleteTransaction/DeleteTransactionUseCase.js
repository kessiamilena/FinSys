//import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";
import { prisma } from "../../../../database/PrismaClient.js";

export class DeleteTransactionUseCase {
    // constructor() {
    //     this.transactionsRepository = TransactionsRepository.getInstance();
    // }

    async execute(id) {

        await prisma.$connect();

        const deleteTransaction = await prisma.transactions.delete({
            where: {
              id,
            },
          })
      
          await prisma.$disconnect();
          
          return deleteTransaction;

        //console.log(this.transactionsRepository.deleteById(id))

        //return this.transactionsRepository.deleteById(id);
    }
}

export default DeleteTransactionUseCase;