import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";
import DeleteTransactionUseCase from "./DeleteTransactionUseCase.js";
import DeleteTransactionController from "./DeleteTransactionController.js";

const transactionsRepository = TransactionsRepository.getInstance();

const deleteTransactionUseCase = new DeleteTransactionUseCase(transactionsRepository);

const deleteTransactionController = new DeleteTransactionController(deleteTransactionUseCase);

export { deleteTransactionController };