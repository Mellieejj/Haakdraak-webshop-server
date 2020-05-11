const { Router } = require("express");
const Product = require("./model");
const Categorie = require("../categories/model");
const ProductImage = require("../productImages/model");
const router = Router();

router.get("/products", (request, response, next) => {
  Product.findAll({ include: [Categorie, ProductImage] })
    .then((product) => response.json(product))
    .catch(next);
});

router.get("/products/:productId", (request, response, next) => {
  Product.findByPk(request.params.productId, {
    include: [Categorie, ProductImage],
  })
    .then((product) => {
      if (!product) {
        response.status(404).end();
      } else {
        response.json(product);
      }
    })
    .catch(next);
});

router.post("/products", async (request, response, next) => {
  try {
    const {
      name,
      price,
      description,
      size,
      optioneel,
      stock,
      categorie,
    } = request.body.fields;
    
    const { productImages } = request.body;

    if (!name || !price || !description || !size || !optioneel || !categorie) {
      return response
        .status(400)
        .send({ message: "Niet alle velden zijn ingevuld." });
    } else {
      const categorie_id = await Categorie.findOne({
        where: { name: categorie },
      });

      const newProduct = {
        name: name,
        price: price,
        description: description,
        size: size,
        optioneel: optioneel,
        stock: stock,
        categorieId: categorie_id.id,
      };

      const product = await Product.create(newProduct);

      await productImages.map((image) => {
        const newImage = {
          url: image.url,
          thumbnail: Boolean(image.thumbnail),
          productId: product.id,
        };
        const newProductImage = ProductImage.create(newImage);

        return newProductImage;
      });

      response.status(200).send();
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
