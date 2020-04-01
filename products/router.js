const { Router } = require("express");
const Product = require("./model");
const Categorie = require("../categories/model");
const ProductImage = require("../productImages/model");
const router = Router();

router.get("/products", (request, response, next) => {
  Product.findAll({ include: [Categorie, ProductImage] })
    .then(product => response.json(product))
    .catch(next);
});


router.get("/products/:productId", (request, response, next) => {
  Product.findByPk(request.params.productId, {
    include: [Categorie, ProductImage]
  })
    .then(product => {
      if (!product) {
        response.status(404).end();
      } else {
        response.json(product);
      }
    })
    .catch(next);
});

module.exports = router;
