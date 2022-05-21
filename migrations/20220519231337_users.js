export const up = (knex) => {
  return knex.schema.createTable("users", (table) => {
    table.uuid("id").primary();
    table.string("email", 255).notNullable().unique();
    table.string("password", 255).notNullable();
  });
};

export const down = (knex) => {
  return knex.schema.dropTable("users");
};
