const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function sleutel() {
  try {
    const category = await Category.findOne({
      where: { name: "Sleutelhangers" },
    });

    const sleutelKriebelBij = await Product.create({
      name: "Sleutelhanger bijtje",
      price: "7.50",
      description:
        "Sleutelhanger bijtje gehaakt met katoengaren. Het bijtje heeft een leuke houtenkraal als gezichtje en een houten kraal als lijf.",
      size: "5cm",
      optional:
        "Musketonhaakje kan vervangen worden door een sleutelring.",
      stock: 1,
      categoryId: category.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-kriebelbij/sleutel-kriebelbij.jpg",
      thumbnail: true,
      productId: sleutelKriebelBij.id,
    });

    ProductImage.create({
      url:
        "https://haakdraak.nl/afbeeldingen/sleutel-kriebelbij/sleutel-kriebelbij_size.jpg",
      thumbnail: false,
      productId: sleutelKriebelBij.id,
    });

  } catch (error) {
    console.log(error);
  }
}

sleutel();
