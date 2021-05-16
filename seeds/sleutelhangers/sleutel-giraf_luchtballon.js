const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function sleutel() {
  try {
    const category = await Category.findOne({
      where: { name: "Sleutelhangers" },
    });

    const sleutelGiraf = await Product.create({
      name: "Sleutelhanger Giraf",
      price: "7.50",
      description:
        "Sleutelhanger giraf gehaakt met katoengaren. De giraf heeft een houten kraal als lijf.",
      size: "7cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 1,
      categoryId: category.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-giraf/sleutel-giraf.jpg",
      thumbnail: true,
      productId: sleutelGiraf.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-giraf/sleutel-giraf_size.jpg",
      thumbnail: false,
      productId: sleutelGiraf.id,
    });

    const sleutelLuchtballon = await Product.create({
      name: "Sleutelhanger Luchtballon",
      price: "5.00",
      description:
        "Sleutelhanger luchtballon gehaakt met katoengaren.",
      size: "6cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 1,
      categoryId: category.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-luchtballon/sleutel-luchtballon.jpg",
      thumbnail: true,
      productId: sleutelLuchtballon.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-luchtballon/sleutel-luchtballon_size.jpg",
      thumbnail: false,
      productId: sleutelLuchtballon.id,
    });

  } catch (error) {
    console.log(error);
  }
}

sleutel();
