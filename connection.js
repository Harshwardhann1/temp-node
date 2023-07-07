const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "9525176144",
  database: "postgres",
});

module.exports = client;
