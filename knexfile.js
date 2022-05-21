const knexfile = {
  client: "postgresql",
  connection: {
    database: "test", // trocar para credenciais do docker compose
    user: "test",
    password: "test",
    port: 5431,
    host: process.env.DATABASE_HOST,
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
