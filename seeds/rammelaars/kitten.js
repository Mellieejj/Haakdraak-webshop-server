const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function rattle() {
  try {
    const category = await Category.findOne({
      where: { name: "Bijtringen & Rammelaars" },
    });

    const kittenRammelaar = await Product.create({
      name: "Bijtring/Rammelaar Kitten",
      price: "12.50",
      description:
        "Houten bijtring met een kitten erom heen met een rammelkraal erin. Deze kitten is gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 1,
      categoryId: category.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/bijtring-kitten/bijt-kitten.jpg",
      thumbnail: true,
      productId: kittenRammelaar.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/bijtring-kitten/bijt-kitten_size.jpg",
      thumbnail: false,
      productId: kittenRammelaar.id,
    });

  } catch (error) {
    console.log(error);
  }
}

rattle();
