const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  dialect: process.env.POSTGRES_DIALECT,
});

try {
  sequelize.authenticate();
  console.log("Database Connected");
} catch (error) {
  console.log("Database Connection Error: ", error);
}

module.exports = sequelize;
