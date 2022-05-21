import AppError from "../erros/AppError.js";
import UserRepository from "../repositories/repository.js";

const userExists = async (req, res, next) => {
  const id = req.params.user_id;

  try {
    const user = await UserRepository.selectAll();
    const userFind = user.find((element) => element.id == id);
    if (!userFind) {
      return next(new AppError("User not found", 404));
    }

    next();
  } catch (err) {
    return next(new AppError("User not found", 404));
  }
};

export default userExists;
