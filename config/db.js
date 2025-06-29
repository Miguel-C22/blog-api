const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load .env variables

const sequelize = new Sequelize(
  "blog_api", // database name
  "root", // username
  process.env.MYSQL_DB_PASSWORD, // password
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
