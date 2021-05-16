const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function sleutel() {
  try {
    const category = await Category.findOne({
      where: { name: "Sleutelhangers" },
    });

    const sleutelDubbel = await Product.create({
      name: "Sleutelhanger Dubbellikker ijs",
      price: "5.00",
      description:
        "Sleutelhanger dubbellikker ijsje gehaakt met katoengaren.",
      size: "5cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 1,
      categoryId: category.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-dubbellikker.jpg",
      thumbnail: true,
      productId: sleutelDubbel.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-snack/sleutel-dubbellikker_size.jpg",
      thumbnail: false,
      productId: sleutelDubbel.id,
    });

  } catch (error) {
    console.log(error);
  }
}

sleutel();
