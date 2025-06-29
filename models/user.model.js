const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("user", {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
