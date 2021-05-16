const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function rattle() {
  try {
    const category = await Category.findOne({
      where: { name: "Bijtringen & Rammelaars" },
    });

    const kiraRammelaar = await Product.create({
      name: "Bijtring/Rammelaar Konijn Kira",
      price: "12.50",
      description:
        "Houten bijtring van een konijnenkop met een rammelkraal erin. Dit konijn is gemaakt van zacht knuffelgaren en katoengaren. Ik maak gebruik van veiligheidsoogjes, deze bevestig ik ook goed aan de binnenkant.",
      size: "12cm",
      optional:
        "De rammelkraal kan vervangen worden door een knisperfolie in de oren. Zonder geluid is natuurlijk ook mogelijk. De oogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 1,
      categoryId: category.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/bijtring-kira/bijt-kira.jpg",
      thumbnail: true,
      productId: kiraRammelaar.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/bijtring-kira/bijt-kira_size.jpg",
      thumbnail: false,
      productId: kiraRammelaar.id,
    });

  } catch (error) {
    console.log(error);
  }
}

rattle();
