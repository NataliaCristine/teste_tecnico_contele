import express from "express";
import { initRouter } from "./routes/index.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

initRouter(app);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("App rodando na porta: http://localhost:3000");
});
