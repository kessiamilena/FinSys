// import Router from "express";

// const routes = Router();

// routes.get("/", (request, response) => {
//     response.status(200).json({
//         message: "Hello World!",
//     });
// });

// export default routes;

import Router  from "express";

import transactionsRoutes from "../routes/TransactionsRoutes.js";

const routes = Router();

routes.use(transactionsRoutes);

export default routes;