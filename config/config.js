require("dotenv").config();

module.exports = {
  development: {
    use_env_variable: "DB_URL",
  },
  test: {
    username: "root",
    password: null,
    database: "testdb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
  }
};
