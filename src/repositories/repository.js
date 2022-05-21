import knexdb from "../config/database.js";

class UserRepository {
  static createUser = async (data) => {
    const newData = {
      id: data.id,
      email: data.email,
      password: data.password,
    };
    const insert = knexdb("users")
      .returning(["id", "email", "password"])
      .insert(newData);

    return await insert;
  };

  static selectAll = async () => {
    const getAll = knexdb("users");

    return await getAll;
  };

  static selectOne = async (id) => {
    const getOne = knexdb("users").where("id", "=", id);

    return await getOne;
  };

  static updateUser = async (id, data) => {
    const update = knexdb("users")
      .returning(["id", "email", "password"])
      .update(data)
      .where("id", "=", id);

    return await update;
  };
  static deleteAll = async () => {
    const deleteAll = knexdb("users").delete();

    return await deleteAll;
  };

  static deleteOne = async (id) => {
    const deleteAll = knexdb("users").delete().where("id", "=", id);

    return await deleteAll;
  };
}

export default UserRepository;
