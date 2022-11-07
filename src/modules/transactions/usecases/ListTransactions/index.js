import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";
import { ListTransactionsUseCase } from "./ListTransactionsUseCase.js";
import { ListTransactionsController } from "./ListTransactionsController.js";

const transactionsRepository = TransactionsRepository.getInstance();

const listTransactionsUseCase = new ListTransactionsUseCase(transactionsRepository);

const listTransactionsController = new ListTransactionsController(listTransactionsUseCase);

export { listTransactionsController };