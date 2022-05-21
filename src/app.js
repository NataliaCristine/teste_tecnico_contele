import express from "express";
import { initRouter } from "./routes/index.js";
import { errorHandler } from "./middlewares/error.middleware.js";
// import swaggerUiExpress from "swagger-ui-express";
// import swaggerDocument from "../swagger.json";

const app = express();

app.use(express.json());

initRouter(app);

app.use(errorHandler);

// app.use(
//   "/api-documentation",
//   swaggerUiExpress.serve,
//   swaggerUiExpress.setup(swaggerDocument)
// );

app.listen(3000, () => {
  console.log("App rodando na porta: http://localhost:3000");
});
