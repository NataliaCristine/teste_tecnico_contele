import { userRouter } from "./user.route.js";

export const initRouter = (app) => {
  app.use("/api/v1/users", userRouter());
};
