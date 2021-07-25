const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function overige() {
  try {
    const category = await Category.findOne({
      where: { name: "Baby Overige" },
    });

    const speenLeeuw = await Product.create({
      name: "Speenknuffel Leeuw",
      price: "15.00",
      description:
        "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door het koord erom te vouwen en het drukkertje dicht te doen. Deze is gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "20cm",
      optional:
        "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: category.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/speenknuffel-leeuw/speen-leeuw.jpg",
      thumbnail: true,
      productId: speenLeeuw.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/speenknuffel-leeuw/speen-leeuw_size.jpg",
      thumbnail: false,
      productId: speenLeeuw.id,
    });

    ProductImage.create({
      url: "https://www.haakdraak.nl/afbeeldingen/speenknuffel-leeuw/speen-leeuw_size1.jpg",
      thumbnail: false,
      productId: speenLeeuw.id,
    });
    
  } catch (e) {
    console.log(e);
  }
}

overige();
