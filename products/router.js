const { Router } = require("express")
const Product = require("./model")

const router = Router()

router.get("/products", (request, response, next) => {
  Product.findAll()
    .then(product => response.json(product))
    .catch(next)
})

module.exports = router