const { DataTypes } = require("sequelize");
const sequelize = require("..");

const Diets = sequelize.define(
  "diets",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = Diets;
