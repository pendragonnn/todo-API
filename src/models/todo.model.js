const { DataTypes } = require("sequelize");
const sequelize = require("../config/db_connect");

const Todo = sequelize.define("todo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

sequelize
  .sync()
  .then(() => {
    console.log("Tabel To-Do berhasil dibuat.");
  })
  .catch((error) => {
    console.error("Gagal membuat tabel To-Do:", error);
  });

module.exports = Todo;
