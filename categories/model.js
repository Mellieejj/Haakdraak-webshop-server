const Sequelize = require("sequelize");
const db = require("../db");

const Categorie = db.define(
  "categorie",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    timestamps: false,
    tableName: "categories"
  }
);

module.exports = Categorie;
