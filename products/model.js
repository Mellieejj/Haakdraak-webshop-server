const Sequelize = require("sequelize");
const db = require("../db");
const Categorie = require("../categories/model");

const Product = db.define(
  "product",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false
    },
    img: {
      type: Sequelize.STRING,
      allownNull: false
    },
    stockAmount: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false,
    tableName: "products"
  }
);

Product.belongsTo(Categorie);

Categorie.hasMany(Product);

module.exports = Product;
