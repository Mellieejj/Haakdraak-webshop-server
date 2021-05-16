const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function sleutel() {
  try {
    const category = await Category.findOne({
      where: { name: "Sleutelhangers" },
    });

    const sleutelEngel = await Product.create({
      name: "Sleutelhanger Engel",
      price: "7.50",
      description:
        "Sleutelhanger engel gehaakt met katoengaren. Het engeltje heeft een leuke houtenkraal als gezichtje en een houten kraal als lijf.",
      size: "5cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 0,
      categoryId: category.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-engel/sleutel-engel.jpg",
      thumbnail: true,
      productId: sleutelEngel.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-engel/sleutel-engel_size.jpg",
      thumbnail: false,
      productId: sleutelEngel.id,
    });

  } catch (error) {
    console.log(error);
  }
}

sleutel();
