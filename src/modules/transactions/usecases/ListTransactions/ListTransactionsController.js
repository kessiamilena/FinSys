import { ListTransactionsUseCase } from "./ListTransactionsUseCase.js";

export class ListTransactionsController {
    constructor() {
        this.listTransactionsUseCase = new ListTransactionsUseCase();
    }

    async handle(request, response) {

        const transaction = await this.listTransactionsUseCase.execute();

        response.statusCode = 200;
        return response.json(transaction)
    }
}