import knexfile from "../../knexfile.js";
import knex from "knex";

const knexdb = knex(knexfile);

export default knexdb;
