const Product = require("../products/model");
const Categorie = require("../categories/model");

async function seedDataBase() {
  const rammelaar = await Categorie.create({
    name: "Bijtringen & Rammelaars"
  });

  const babyOverig = await Categorie.create({
    name: "Baby Overige"
  });

  const knuffels = await Categorie.create({
    name: "Knuffels"
  });

  const sleutelhangers = await Categorie.create({
    name: "Sleutelhangers"
  });

  const overige = await Categorie.create({
    name: "Overige"
  });

  Product.create({
    name: "Bijtring/Rammelaar Aap Abel",
    price: "12.50",
    img: "https://haakdraak.nl/afbeeldingen/bijt-abel.jpg",
    description:
      "Bijtring van een apenkop met een rammelkraal erin. Deze aap is gemaakt van zacht knuffelgaren en katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "De rammelkraal kan ook vervangen worden door een pieper in de neus. Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 1,
    categorieId: rammelaar.id
  });

  Product.create({
    name: "Bijtring/Rammelaar Vos",
    price: "12.50",
    img: "https://haakdraak.nl/afbeeldingen/bijt-vos.jpg",
    description:
      "Bijtring van een vos met een staart. In het hoofdje zit een rammelkraal. Deze vos is gemaakt katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "De rammelkraal kan ook vervangen worden door een pieper in de staart. Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: rammelaar.id
  });

  Product.create({
    name: "Bijtring/Rammelaar Wasbeer",
    price: "12.50",
    img: "https://haakdraak.nl/afbeeldingen/bijt-wasbeer.JPG",
    description:
      "Bijtring van een wasbeer. In het hoofdje zit een rammelkraal. Deze wasbeer is gemaakt katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "Deze is heel makkelijk te veranderen naar een rode panda, door de kleuren aanpassen oranjerood. Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 1,
    categorieId: rammelaar.id
  });

  Product.create({
    name: "Speenknuffel Draak",
    price: "15.00",
    img: "https://haakdraak.nl/afbeeldingen/speen-draak.jpg",
    description:
      "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door om het handje te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "18cm",
    optioneel:
      "Er kan een leuk knisper geluidje aan toegevoegd worden in het lijfje. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: babyOverig.id
  });

  Product.create({
    name: "Speenkoord Giraf",
    price: "12.50",
    img: "https://haakdraak.nl/afbeeldingen/speen-giraf.jpg",
    description:
      "Speenkoord om een speentje aan te bevestigen. Het lusje is van waxkoord gemaakt, er zit een mooie houten speenclip op. De giraf is gehaakt met katoen",
    size: "18cm",
    optioneel:
      "Er kan een rammel geluidje aan toegevoegd worden in het hoofdje.",
    stock: 1,
    categorieId: babyOverig.id
  });

  Product.create({
    name: "Grote Aap",
    price: "40.00",
    img: "https://haakdraak.nl/afbeeldingen/knuf-mike.jpg",
    description:
      "Grote Aap gemaakt van een dikkere katoendraad. Zittend is deze leuke aap 30cm, liggend gemeten vanaf de voeten tot het hoofd is hij maar liefst 60cm. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "30cm",
    optioneel:
      "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 1,
    categorieId: knuffels.id
  });

  Product.create({
    name: "Huski",
    price: "22.50",
    img: "https://haakdraak.nl/afbeeldingen/knuf-huski.jpg",
    description:
      "Huski gemaakt van een dikkere katoendraad. Liggend gemeten is hij 30cm groot en zitten ongeveer 22cm. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "22cm",
    optioneel:
      "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 1,
    categorieId: knuffels.id
  });

  Product.create({
    name: "Sleutelhanger Smileypoppetje",
    price: "2.50",
    img: "https://haakdraak.nl/afbeeldingen/sleutel-smile1.jpg",
    description:
      "Vrolijke sleutelhanger met een houten smileykraal, in het lijfje is gehaakt met katoen, er zit een houten kraal in. In bijna alle kleuren mogelijk! Vermeld bij de opmerkingen even de kleur die u wilt.",
    size: "4cm",
    optioneel: "Musketonhaakje kan vervangen worden door een sleutelring.",
    stock: 8,
    categorieId: sleutelhangers.id
  });

  Product.create({
    name: "Sleutelhanger Eend",
    price: "7.50",
    img: "https://haakdraak.nl/afbeeldingen/sleutel-enzo.jpg",
    description:
      "Sleutelhanger Eend gehaakt met katoengaren. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "9cm",
    optioneel:
      "Musketonhaakje kan vervangen worden door een sleutelring. Veiligheids oogjes kunnen vervangen worden door borduurde ^ ^ of | | oogjes.",
    stock: 0,
    categorieId: sleutelhangers.id
  });

  Product.create({
    name: "Sleutelhanger Pinguin",
    price: "7.50",
    img: "https://haakdraak.nl/afbeeldingen/sleutel-pingu1.jpg",
    description:
      "Sleutelhanger Pinguin gehaakt met katoengaren. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "7cm",
    optioneel:
      "Musketonhaakje kan vervangen worden door een sleutelring. Veiligheids oogjes kunnen vervangen worden door borduurde ^ ^ of | | oogjes.",
    stock: 1,
    categorieId: sleutelhangers.id
  });

  Product.create({
    name: "Knuffeldoekje Draak",
    price: "20.00",
    img: "https://haakdraak.nl/afbeeldingen/doek-draak.JPG",
    description:
      "Dit knuffeldoekje is gehaakt met zacht knuffelgaren. Het doekje is ongeveer 35 x 35 cm. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "35cm",
    optioneel:
      "Geluidjes, zoals piepertje of rammelkraal kan toegevoegd worden. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 1,
    categorieId: babyOverig.id
  });

  Product.create({
    name: "Speenknuffel Aap",
    price: "15.00",
    img: "https://haakdraak.nl/afbeeldingen/speen-aap2.jpg",
    description:
      "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door om het handje te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren en katoen. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "18cm",
    optioneel:
      "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: babyOverig.id
  });

  Product.create({
    name: "Speenknuffel Konijn",
    price: "15.00",
    img: "https://haakdraak.nl/afbeeldingen/speen-kim.jpg",
    description:
      "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door om het handje te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren en katoen. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "18cm",
    optioneel:
      "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: babyOverig.id
  });

  Product.create({
    name: "Bijtring/Rammelaar Koala",
    price: "12.50",
    img: "https://haakdraak.nl/afbeeldingen/bijt-koala.jpg",
    description:
      "Bijtring van een koala met een rammelkraal erin. Deze koala is gemaakt van katoengaren, in de oortjes die een klein stukje zacht knuffelgaren. De bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "10cm",
    optioneel:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: babyOverig.id
  });
}

seedDataBase();
