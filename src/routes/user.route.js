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
import userExists from "../middlewares/userExistis.middleware.js";

const route = Router();

export const userRouter = () => {
  route.post("", validate(userSchema), create);
  route.get("", getAllUsers);
  route.get("/:user_id", userExists, getOneUsers);
  route.put("/:user_id", userExists, updateUser);
  route.delete("/:user_id", userExists, deleteOne);
  route.delete("", deleteAll);

  return route;
};
