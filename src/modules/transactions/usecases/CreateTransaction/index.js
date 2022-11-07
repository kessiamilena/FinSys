import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase.js";
import { CreateTransactionController } from "./CreateTransactionController.js";

const transactionsRepository = TransactionsRepository.getInstance();
const createTransactionUseCase = new CreateTransactionUseCase(transactionsRepository);
const createTransactionController = new CreateTransactionController(createTransactionUseCase);

export { createTransactionController };