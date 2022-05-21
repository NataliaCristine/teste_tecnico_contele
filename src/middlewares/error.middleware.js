import AppError from "../erros/AppError.js";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    console.log(err);
    return res.status(err.statusCode).json({ message: err.message });
  }
  console.log(err);
  return res.status(500).json({ status: "error", message: "interal" });
};
