import AppError from "../erros/AppError.js";

const validate = (schema) => async (req, res, next) => {
  const body = req.body;

  try {
    const validateData = await schema.validate(body);
    req.validateData = validateData;
    next();
  } catch (err) {
    return next(new AppError(`${[err.name]}:${err.errors}`, 422));
  }
};

export default validate;
