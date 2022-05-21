import AppError from "../erros/AppError.js";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  if (err.detail.includes("already exists")) {
    return res.status(409).json({ message: "E-mail already exists" });
  }
  console.log(err);
  return res.status(500).json({ status: "error", message: "interal" });
};
