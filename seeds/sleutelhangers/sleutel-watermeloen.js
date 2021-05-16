const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function sleutel() {
  try {
    const category = await Category.findOne({
      where: { name: "Sleutelhangers" },
    });

    const sleutelWatermeloen = await Product.create({
      name: "Sleutelhanger Watermeloen",
      price: "3.00",
      description:
        "Sleutelhanger watermeloen gehaakt met katoengaren.",
      size: "4cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 1,
      categoryId: category.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-watermeloen.jpg",
      thumbnail: true,
      productId: sleutelWatermeloen.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-fruit/sleutel-meloen_size.jpg",
      thumbnail: false,
      productId: sleutelWatermeloen.id,
    });

  } catch (error) {
    console.log(error);
  }
}

sleutel();
