import { Router } from "express";
import {
  create,
  getAllUsers,
  getOneUsers,
  updateUser,
  deleteAll,
  deleteOne,
} from "../controllers/users.controller.js";
import validate from "../middlewares/validate.schema.middleware.js";
import userSchema from "../schema/user.schema.js";

const route = Router();

export const userRouter = () => {
  route.post("", validate(userSchema), create);
  route.get("", getAllUsers);
  route.get("/:user_id", getOneUsers);
  route.put("/:user_id", updateUser);
  route.delete("/:user_id", deleteOne);
  route.delete("", deleteAll);

  return route;
};
