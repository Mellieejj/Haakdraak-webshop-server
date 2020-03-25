const Sequelize = require("sequelize")
const db = require("../db")

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
    // categorieId ??
  },
  {
    timestamps: false,
    tableName: "products"
  }
)

module.exports = Product
