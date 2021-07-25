const Product = require("../../products/model");
const Category = require("../../categories/model");
const ProductImage = require("../../productImages/model");

async function lappenpop() {
  try {
    const knuffels = await Category.findOne({
      where: { name: "Knuffels" },
    });
    
    const lappenpopAap = await Product.create({
      name: "Mini Lappenpop Aap",
      price: "12.50",
      description:
        "Aap met een plat lijfje, gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "20cm",
      optional:
        "Deze lappenpop kan ook met ander garen, bijv. combinatie acryl/katoen, gemaakt worden. Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: knuffels.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/lappenpop/mini-aap/lap-mini-aap.jpg",
      thumbnail: true,
      productId: lappenpopAap.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/lappenpop/mini-aap/lap-mini-aap_size.jpg",
      thumbnail: false,
      productId: lappenpopAap.id,
    });

    const lappenpopPinguin = await Product.create({
      name: "Mini Lappenpop Pinguin",
      price: "12.50",
      description:
        "Pinguin met een plat lijfje, gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "20cm",
      optional:
        "Deze lappenpop kan ook met ander garen, bijv. combinatie acryl/katoen, gemaakt worden. Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: knuffels.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/lappenpop/mini-pinguin/lap-mini-pinguin.jpg",
      thumbnail: true,
      productId: lappenpopPinguin.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/lappenpop/mini-pinguin/lap-mini-pinguin_size.jpg",
      thumbnail: false,
      productId: lappenpopPinguin.id,
    });


const lappenpopOlifant = await Product.create({
      name: "Mini Lappenpop Olifant",
      price: "15.00",
      description:
        "Olifant met een plat lijfje, gemaakt van katoengaren. Ik maak gebruik van veiligheidsoogjes deze bevestig ik ook goed aan de binnenkant.",
      size: "25cm",
      optional:
        "Deze lappenpop kan ook met ander garen, bijv. combinatie acryl/katoen, gemaakt worden. Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheidsoogjes kunnen vervangen worden door geborduurde slapende oogjes.",
      stock: 0,
      categoryId: knuffels.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/lappenpop/olifant/lap-olifant.jpg",
      thumbnail: true,
      productId: lappenpopOlifant.id,
    });

    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/lappenpop/olifant/lap-olifant_size.jpg",
      thumbnail: false,
      productId: lappenpopOlifant.id,
    });
    
    ProductImage.create({
      url: "https://haakdraak.nl/afbeeldingen/lappenpop/olifant/lap-olifant_size1.jpg",
      thumbnail: false,
      productId: lappenpopOlifant.id,
    });

  } catch (error) {
    console.log(error);
  }
}

lappenpop();
