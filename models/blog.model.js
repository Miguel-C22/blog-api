const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Blog = sequelize.define("blogs", {
  userId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  blog: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Blog;
