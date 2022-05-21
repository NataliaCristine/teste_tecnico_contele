const knexfile = {
  client: "postgresql",
  connection: {
    database: "", // trocar para credenciais do docker compose
    user: "",
    password: "",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

export default knexfile;
