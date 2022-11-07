import Router from "express";

const transactionsRoutes = Router();

import { createTransactionController } from "../modules/transactions/usecases/CreateTransaction/index.js";
import { deleteTransactionController } from "../modules/transactions/usecases/DeleteTransaction/index.js";
import { updateTransactionController } from "../modules/transactions/usecases/UpdateTransaction/index.js"
import { listTransactionsController } from "../modules/transactions/usecases/ListTransactions/index.js";

// Rota de criação de transações
transactionsRoutes.post("/transactions", (request, response) => {
    return createTransactionController.handle(request, response);
});

// Rota de listagem de transações
transactionsRoutes.get("/transactions", (request, response) => {
     return listTransactionsController.handle(request, response);
 });


// Rota de deleção de transações
transactionsRoutes.delete("/:id", (request, response) => {
    return deleteTransactionController.handle(request, response);
});

// Rota de atualização de transações
transactionsRoutes.put("/:id", (request, response) => {
    return updateTransactionController.handle(request, response);
  });


export default transactionsRoutes;