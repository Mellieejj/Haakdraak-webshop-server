const Sequelize = require("sequelize");
const db = require("../db");
const Categorie = require("../categories/model");
const Order = require("../orders/model");
const OrderProducts = require("../orderProducts/model");

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
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    size: {
      type: Sequelize.STRING,
      allownNull: false
    },
    optioneel: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    stock: {
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

Product.belongsToMany(Order, { through: OrderProducts });
Order.belongsToMany(Product, { through: OrderProducts });

module.exports = Product;
