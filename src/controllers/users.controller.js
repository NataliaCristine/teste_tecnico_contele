import UserRepository from "../repositories/repository.js";

export const create = async (req, res, next) => {
  try {
    const data = req.validateData;
    const user = await UserRepository.createUser(data);
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserRepository.selectAll();
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const getOneUsers = async (req, res, next) => {
  try {
    const id = req.params.user_id;
    const user = await UserRepository.selectOne(id);
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.user_id;
    const data = req.body;
    const user = await UserRepository.updateUser(id, data);
    return res.status(204).json({});
  } catch (err) {
    next(err);
  }
};

export const deleteAll = async (req, res, next) => {
  try {
    const users = await UserRepository.deleteAll();
    return res.status(204).json({});
  } catch (err) {
    next(err);
  }
};

export const deleteOne = async (req, res, next) => {
  try {
    const id = req.params.user_id;
    const users = await UserRepository.deleteOne(id);
    return res.status(204).json({});
  } catch (err) {
    next(err);
  }
};
