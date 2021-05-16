const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function sleutel() {
  try {
    const category = await Category.findOne({
      where: { name: "Sleutelhangers" },
    });

    const sleutelDolfijn = await Product.create({
      name: "Sleutelhanger Dolfijn",
      price: "7.50",
      description:
        "Sleutelhanger dolfijn gehaakt met katoengaren.",
      size: "5cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 1,
      categoryId: category.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-dolfijn/sleutel-dolfijn.jpg",
      thumbnail: true,
      productId: sleutelDolfijn.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-dolfijn/sleutel-dolfijn_size.jpg",
      thumbnail: false,
      productId: sleutelDolfijn.id,
    });

  } catch (error) {
    console.log(error);
  }
}

sleutel();
