const Sequelize = require("sequelize");
const db = require("../db");

const OrderProducts = db.define(
  "order_product",
  {},
  {
    timestamps: false
  }
);

module.exports = OrderProducts;
