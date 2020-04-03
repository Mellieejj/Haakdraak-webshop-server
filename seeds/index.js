const Product = require("../products/model");
const Categorie = require("../categories/model");
const ProductImage = require("../productImages/model");
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

  const bijtringAbel = await Product.create({
    name: "Bijtring/Rammelaar Aap Abel",
    price: "12.50",
    description:
      "Bijtring van een apenkop met een rammelkraal erin. Deze aap is gemaakt van zacht knuffelgaren en katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "De rammelkraal kan ook vervangen worden door een pieper in de neus. Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 1,
    categorieId: rammelaar.id
  });

  const bijtringVos = await Product.create({
    name: "Bijtring/Rammelaar Vos",
    price: "12.50",
    description:
      "Bijtring van een vos met een staart. In het hoofdje zit een rammelkraal. Deze vos is gemaakt katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "De rammelkraal kan ook vervangen worden door een pieper in de staart. Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: rammelaar.id
  });

  const bijtringWasbeer = await Product.create({
    name: "Bijtring/Rammelaar Wasbeer",
    price: "12.50",
    description:
      "Bijtring van een wasbeer. In het hoofdje zit een rammelkraal. Deze wasbeer is gemaakt katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "Deze is heel makkelijk te veranderen naar een rode panda, door de kleuren aanpassen oranjerood. Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 1,
    categorieId: rammelaar.id
  });

  const speenDraak = await Product.create({
    name: "Speenknuffel Draak",
    price: "15.00",
    description:
      "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door om het handje te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "18cm",
    optioneel:
      "Er kan een leuk knisper geluidje aan toegevoegd worden in het lijfje. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: babyOverig.id
  });

  const speenGiraf = await Product.create({
    name: "Speenkoord Giraf",
    price: "12.50",
    description:
      "Speenkoord om een speentje aan te bevestigen. Het lusje is van waxkoord gemaakt, er zit een mooie houten speenclip op. De giraf is gehaakt met katoen",
    size: "18cm",
    optioneel:
      "Er kan een rammel geluidje aan toegevoegd worden in het hoofdje.",
    stock: 1,
    categorieId: babyOverig.id
  });

  const mike = await Product.create({
    name: "Grote Aap",
    price: "40.00",
    description:
      "Grote Aap gemaakt van een dikkere katoendraad. Zittend is deze leuke aap 30cm, liggend gemeten vanaf de voeten tot het hoofd is hij maar liefst 60cm. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "30cm",
    optioneel:
      "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 1,
    categorieId: knuffels.id
  });

  const huski = await Product.create({
    name: "Huski",
    price: "22.50",
    description:
      "Huski gemaakt van een dikkere katoendraad. Liggend gemeten is hij 30cm groot en zitten ongeveer 22cm. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "22cm",
    optioneel:
      "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 1,
    categorieId: knuffels.id
  });

  const sleutelSmiley = await Product.create({
    name: "Sleutelhanger Smileypoppetje",
    price: "2.50",
    description:
      "Vrolijke sleutelhanger met een houten smileykraal, in het lijfje is gehaakt met katoen, er zit een houten kraal in. In bijna alle kleuren mogelijk! Vermeld bij de opmerkingen even de kleur die je wilt.",
    size: "4cm",
    optioneel: "Musketonhaakje kan vervangen worden door een sleutelring.",
    stock: 8,
    categorieId: sleutelhangers.id
  });

  const sleutelEend = await Product.create({
    name: "Sleutelhanger Eend",
    price: "7.50",
    description:
      "Sleutelhanger Eend gehaakt met katoengaren. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "9cm",
    optioneel:
      "Musketonhaakje kan vervangen worden door een sleutelring. Veiligheids oogjes kunnen vervangen worden door borduurde ^ ^ of | | oogjes.",
    stock: 0,
    categorieId: sleutelhangers.id
  });

  const sleutelPinguin = await Product.create({
    name: "Sleutelhanger Pinguin",
    price: "7.50",
    description:
      "Sleutelhanger Pinguin gehaakt met katoengaren. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "7cm",
    optioneel:
      "Musketonhaakje kan vervangen worden door een sleutelring. Veiligheids oogjes kunnen vervangen worden door borduurde ^ ^ of | | oogjes.",
    stock: 1,
    categorieId: sleutelhangers.id
  });

  const doekjeDraak = await Product.create({
    name: "Knuffeldoekje Draak",
    price: "20.00",
    description:
      "Dit knuffeldoekje is gehaakt met zacht knuffelgaren. Het doekje is ongeveer 35 x 35 cm. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "35cm",
    optioneel:
      "Geluidjes, zoals piepertje of rammelkraal kan toegevoegd worden. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 1,
    categorieId: babyOverig.id
  });

  const speenAap = await Product.create({
    name: "Speenknuffel Aap",
    price: "15.00",
    description:
      "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door om het handje te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren en katoen. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "18cm",
    optioneel:
      "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: babyOverig.id
  });

  const speenKonijn = await Product.create({
    name: "Speenknuffel Konijn",
    price: "15.00",
    description:
      "Dit is een plat knuffeltje, waar de kleinste graag mee knuffelen en ze raken niet meer zo makkelijk het speentje kwijt. Het speentje wordt bevestigd door om het handje te vouwen en het drukkertje dicht te doen. Deze is gemaakt van zacht knuffelgaren en katoen. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "18cm",
    optioneel:
      "Geluidjes, zoals piepertje, rammelkraal of knisper kan toegevoegd worden. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: babyOverig.id
  });

  const bijtringKoala = await Product.create({
    name: "Bijtring/Rammelaar Koala",
    price: "12.50",
    description:
      "Bijtring van een koala met een rammelkraal erin. Deze koala is gemaakt van katoengaren, in de oortjes die een klein stukje zacht knuffelgaren. De bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "10cm",
    optioneel:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: babyOverig.id
  });

  const bijtringKoe = await Product.create({
    name: "Bijtring/Rammelaar Koe",
    price: "12.50",
    description:
      "Bijtring van een koeien kop met een rammelkraal erin. Deze koe is gemaakt van zacht knuffelgaren en katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "De rammelkraal kan ook vervangen worden door een pieper in de neus. Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url: "https://haakdraak.nl/Test/afbeeldingen/bijtring-abel/bijt-abel.jpg",
    thumbnail: true,
    productId: bijtringAbel.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/bijtring-abel/bijtringAapAbel_size.jpg",
    thumbnail: false,
    productId: bijtringAbel.id
  });

  ProductImage.create({
    url: "https://haakdraak.nl/Test/afbeeldingen/bijtring-koala/bijt-koala.jpg",
    thumbnail: true,
    productId: bijtringKoala.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/bijtring-koala/bijtringKoala_size.jpg",
    thumbnail: false,
    productId: bijtringKoala.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/bijtring-wasbeer/bijt-wasbeer.jpg",
    thumbnail: true,
    productId: bijtringWasbeer.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/bijtring-wasbeer/bijtringWasbeer_size.jpg",
    thumbnail: false,
    productId: bijtringWasbeer.id
  });

  ProductImage.create({
    url: "https://haakdraak.nl/Test/afbeeldingen/bijtring-vos/bijt-vos.jpg",
    thumbnail: true,
    productId: bijtringVos.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/bijtring-vos/bijtringVosFelix_size.jpg",
    thumbnail: false,
    productId: bijtringVos.id
  });

  ProductImage.create({
    url: "https://haakdraak.nl/Test/afbeeldingen/huski/knuf-huski.jpg",
    thumbnail: true,
    productId: huski.id
  });

  ProductImage.create({
    url: "https://haakdraak.nl/Test/afbeeldingen/huski/huski_size.jpg",
    thumbnail: false,
    productId: huski.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/speenknuffel-aap/speen-aap.jpg",
    thumbnail: true,
    productId: speenAap.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/speenknuffel-aap/lulu1_size.jpg",
    thumbnail: false,
    productId: speenAap.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/speenknuffel-aap/lulu2_size.jpg",
    thumbnail: false,
    productId: speenAap.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/speenknuffel-draak/speen-draak.jpg",
    thumbnail: true,
    productId: speenDraak.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/speenknuffel-draak/speen-draak1_size.jpg",
    thumbnail: false,
    productId: speenDraak.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/speenknuffel-draak/speen-draak2_size.jpg",
    thumbnail: false,
    productId: speenDraak.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/speenknuffel-draak/speen-draak3_size.jpg",
    thumbnail: false,
    productId: speenDraak.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/speenkoord-giraf/speen-giraf.jpg",
    thumbnail: true,
    productId: speenGiraf.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/speenkoord-giraf/speen-giraf_size.jpg",
    thumbnail: false,
    productId: speenGiraf.id
  });

  ProductImage.create({
    url: "https://haakdraak.nl/Test/afbeeldingen/aap-mike/knuf-mike.jpg",
    thumbnail: true,
    productId: mike.id
  });

  ProductImage.create({
    url: "https://haakdraak.nl/Test/afbeeldingen/aap-mike/knuf-mike1_size.jpg",
    thumbnail: false,
    productId: mike.id
  });

  ProductImage.create({
    url: "https://haakdraak.nl/Test/afbeeldingen/aap-mike/knuf-mike2_size.jpg",
    thumbnail: false,
    productId: mike.id
  });

  ProductImage.create({
    url: "https://haakdraak.nl/Test/afbeeldingen/aap-mike/knuf-mike3_size.jpg",
    thumbnail: false,
    productId: mike.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/smileypoppetjes/sleutel-smile1.jpg",
    thumbnail: true,
    productId: sleutelSmiley.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/smileypoppetjes/sleutel-smile2_size.jpg",
    thumbnail: false,
    productId: sleutelSmiley.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/smileypoppetjes/sleutel-smile3_size.jpg",
    thumbnail: false,
    productId: sleutelSmiley.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/smileypoppetjes/sleutel-smile4_size.jpg",
    thumbnail: false,
    productId: sleutelSmiley.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/smileypoppetjes/sleutel-smile5_size.jpg",
    thumbnail: false,
    productId: sleutelSmiley.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/smileypoppetjes/sleutel-smile6_size.jpg",
    thumbnail: false,
    productId: sleutelSmiley.id
  });

  ProductImage.create({
    url: "https://haakdraak.nl/Test/afbeeldingen/sleutel-eend/sleutel-enzo.jpg",
    thumbnail: true,
    productId: sleutelEend.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/sleutel-eend/sleutel-eend1_size.jpg",
    thumbnail: false,
    productId: sleutelEend.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/sleutel-eend/sleutel-eend2_size.jpg",
    thumbnail: false,
    productId: sleutelEend.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/sleutel-pinguin/sleutel-pingu.jpg",
    thumbnail: true,
    productId: sleutelPinguin.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/sleutel-pinguin/sleutel-pinguin1_size.jpg",
    thumbnail: false,
    productId: sleutelPinguin.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/sleutel-pinguin/sleutel-pinguin2_size.jpg",
    thumbnail: false,
    productId: sleutelPinguin.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/sleutel-pinguin/sleutel-pinguin3_size.jpg",
    thumbnail: false,
    productId: sleutelPinguin.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/sleutel-pinguin/sleutel-pinguin4_size.jpg",
    thumbnail: false,
    productId: sleutelPinguin.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/knuffeldoekje-draak/doek-draak.jpg",
    thumbnail: true,
    productId: doekjeDraak.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/knuffeldoekje-draak/doek-draak1_size.jpg",
    thumbnail: false,
    productId: doekjeDraak.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/knuffeldoekje-draak/doek-draak2_size.jpg",
    thumbnail: false,
    productId: doekjeDraak.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/knuffeldoekje-draak/doek-draak3_size.jpg",
    thumbnail: false,
    productId: doekjeDraak.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/knuffeldoekje-draak/doek-draak4_size.jpg",
    thumbnail: false,
    productId: doekjeDraak.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/speenknuffel-konijn/speen-kim.jpg",
    thumbnail: true,
    productId: speenKonijn.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/speenknuffel-konijn/speen-konijn_size.jpg",
    thumbnail: false,
    productId: speenKonijn.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/speenknuffel-konijn/speen-konijn1_size.jpg",
    thumbnail: false,
    productId: speenKonijn.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/speenknuffel-konijn/speen-konijn2_size.jpg",
    thumbnail: false,
    productId: speenKonijn.id
  });

  ProductImage.create({
    url: "https://haakdraak.nl/Test/afbeeldingen/bijtring-koe/bijt-koe.JPG",
    thumbnail: true,
    productId: bijtringKoe.id
  });

  ProductImage.create({
    url:
      "https://haakdraak.nl/Test/afbeeldingen/bijtring-koe/bijt-koe_size.jpg",
    thumbnail: false,
    productId: bijtringKoe.id
  });

  const bijtringVarken = await Product.create({
    name: "Bijtring/Rammelaar Varken",
    price: "12.50",
    description:
      "Bijtring van een varkens kop met een rammelkraal erin. Dit varken is gemaakt van zacht knuffelgaren en katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-varken/bijt-varken.jpg",
    thumbnail: true,
    productId: bijtringVarken.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-varken/bijt-varken_size.jpg",
    thumbnail: false,
    productId: bijtringVarken.id
  });

  const bijtringDraak = await Product.create({
    name: "Bijtring/Rammelaar Draak",
    price: "12.50",
    description:
      "Bijtring van een draak met een staart. Er zit een rammeltje in de staart. Deze stoere draak is gemaakt van katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "Het rammeltje kan vervangen worden voor een piepertje in de staart. Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 1,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-draak/bijt-draak.jpg",
    thumbnail: true,
    productId: bijtringDraak.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-draak/bijt-draak_size.jpg",
    thumbnail: false,
    productId: bijtringDraak.id
  });

  const bijtringEenhoorn = await Product.create({
    name: "Bijtring/Rammelaar Eenhoorn",
    price: "12.50",
    description:
      "Bijtring van een eenhoorn hoofd   met een rammelkraal erin. Deze eenhoorn is gemaakt van katoengaren met veel vrolijke kleurtjes, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-eenhoorn/bijt-eenhoorn.jpg",
    thumbnail: true,
    productId: bijtringEenhoorn.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-eenhoorn/bijt-eenhoorn_size.jpg",
    thumbnail: false,
    productId: bijtringEenhoorn.id
  });

  const bijtringTriceratops = await Product.create({
    name: "Bijtring/Rammelaar Triceratops",
    price: "12.50",
    description:
      "Bijtring van een  triceratops hoofd met een rammelkraal erin. Deze triceratops is gemaakt van katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-triceratops/bijt-triceratops.jpg",
    thumbnail: true,
    productId: bijtringTriceratops.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-triceratops/bijt-triceratops_size.jpg",
    thumbnail: false,
    productId: bijtringTriceratops.id
  });

  const bijtringPinguVis = await Product.create({
    name: "Bijtring/Rammelaar Pinguin met vis",
    price: "12.50",
    description:
      "Bijtring van een pinguin met een vis bijtring vast. Er zit een rammelkraal in. Deze pinguin is gemaakt van katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "10cm",
    optioneel:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-pinguin/vis-pingu.jpg",
    thumbnail: true,
    productId: bijtringPinguVis.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-pinguin/bijt-pingu-vis_size.jpg",
    thumbnail: false,
    productId: bijtringPinguVis.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-pinguin/bijt-pingu-vis_size1.jpg",
    thumbnail: true,
    productId: bijtringPinguVis.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-pinguin/bijt-pingu-vis_size2.jpg",
    thumbnail: false,
    productId: bijtringPinguVis.id
  });

  const bijtringZeepaard = await Product.create({
    name: "Bijtring/Rammelaar Zeepaardje",
    price: "9.95",
    description:
      "Bijtring van een zeepaardje met een rammelkraal erin. Dit zeepaardje is gemaakt van dikker katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-zeepaard/bijt-zeepaard.jpg",
    thumbnail: true,
    productId: bijtringZeepaard.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-zeepaard/bijt-zeepaard_size.jpg",
    thumbnail: false,
    productId: bijtringZeepaard.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-zeepaard/bijt-zeepaard1_size.jpg",
    thumbnail: false,
    productId: bijtringZeepaard.id
  });

  // ProductImage.create({
  //   url:
  //     "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-zeepaard/bijt-zeepaard1.jpg",
  //   thumbnail: true,
  //   productId: bijtringZeepaard.id
  // });

  const bijtringHert = await Product.create({
    name: "Bijtring/Rammelaar Hert",
    price: "12.50",
    description:
      "Bijtring van een herten kop met een rammelkraal erin. Dit hert is gemaakt van zacht knuffelgaren en katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-hert/bijt-hert.JPG",
    thumbnail: true,
    productId: bijtringHert.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-hert/bijt-hert_size.jpg",
    thumbnail: false,
    productId: bijtringHert.id
  });

  const bijtringPinguin = await Product.create({
    name: "Bijtring/Rammelaar Pinguin",
    price: "9.95",
    description:
      "Bijtring van een pinguin met een rammelkraal erin en leuke wiebelpootjes. Deze pinguin is gemaakt van katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "10cm",
    optioneel:
      "In de voetjes kan ook knisper gestopt worden. Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-pinguin/bijt-pingu.jpg",
    thumbnail: true,
    productId: bijtringPinguin.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-pinguin/bijt-pingu_size.jpg",
    thumbnail: false,
    productId: bijtringPinguin.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-pinguin/bijt-pingu_size1.jpg",
    thumbnail: false,
    productId: bijtringPinguin.id
  });

  const bijtringVliegtuig = await Product.create({
    name: "Bijtring/Rammelaar Vliegtuig",
    price: "9.95",
    description:
      "Bijtring van een vliegtuig met een rammelkraal erin. Dit vliegtuig is gemaakt van katoengaren, de bijtring is van hout.",
    size: "10cm",
    optioneel: "Zonder geluid is natuurlijk ook mogelijk.",
    stock: 1,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-vliegtuig/bijt-vliegtuig.jpg",
    thumbnail: true,
    productId: bijtringVliegtuig.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-vliegtuig/bijt-vliegtuig_size1.jpg",
    thumbnail: false,
    productId: bijtringVliegtuig.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-vliegtuig/bijt-vliegtuig_size2.jpg",
    thumbnail: false,
    productId: bijtringVliegtuig.id
  });

  const bijtringOlifant = await Product.create({
    name: "Bijtring/Rammelaar Olifant",
    price: "9.95",
    description:
      "Bijtring met een olifantje met een rammelkraal erin. Dit olifantje is gemaakt van katoengaren, de bijtring is van hout. Deze is vrij plat.",
    size: "10cm",
    optioneel:
      "De rammelkraal kan vervangen worden voor knisper. Zonder geluid is natuurlijk ook mogelijk. ",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-olifant/bijt-platolifant.jpg",
    thumbnail: true,
    productId: bijtringOlifant.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-olifant/bijt-platolifant_size.jpg",
    thumbnail: false,
    productId: bijtringOlifant.id
  });

  const bijtringNijlpaard = await Product.create({
    name: "Bijtring/Rammelaar Nijlpaard",
    price: "9.95",
    description:
      "Bijtring van een nijpaard kop met een rammelkraal erin. Dit nijlpaard is gemaakt van katoengaren, de bijtring is van hout. Ik maak gebruik van veiligheids oogjes deze bevestig ik ook goed aan de binnenkant.",
    size: "12cm",
    optioneel:
      "Zonder geluid is natuurlijk ook mogelijk. Veiligheids oogjes kunnen vervangen worden door borduurde slapende oogjes.",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-nijlpaard/bijt-nijlpaard.jpg",
    thumbnail: true,
    productId: bijtringNijlpaard.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-nijlpaard/bijt-nijlpaard_size.jpg",
    thumbnail: false,
    productId: bijtringNijlpaard.id
  });

  const kralenSilOlifant = await Product.create({
    name: "Gele Olifant met kralen",
    price: "9.95",
    description:
      "Silicone olifant bijtring met kralen ketting. Een aantal kralen is omhaakt met katoengaren. De kralen ketting is goed bevestigd met waxkoord.",
    size: "15cm",
    optioneel: "Dit is de enige optie van deze en de laatste.",
    stock: 1,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/bijt-gele-olifant.jpg",
    thumbnail: true,
    productId: kralenSilOlifant.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/bijt-gele-olifant_size.jpg",
    thumbnail: false,
    productId: kralenSilOlifant.id
  });

  const kralenGiraf = await Product.create({
    name: "Giraf bijtring met kralen",
    price: "12.50",
    description:
      "Giraf bijtring met slierten met kralen, een omhaakte rammelkraal en 2 houten ringetjes. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralen ketting is goed bevestigd met waxkoord.",
    size: "15cm",
    optioneel:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. De giraf is ook mogelijk met kralen ketting. Zonder geluid is een optie.",
    stock: 1,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-giraf.jpg",
    thumbnail: true,
    productId: kralenGiraf.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-giraf_size.jpg",
    thumbnail: false,
    productId: kralenGiraf.id
  });

  const kralenNijlpaard = await Product.create({
    name: "Nijlpaard bijtring met kralen",
    price: "12.50",
    description:
      "Nijlpaard bijtring met slierten met kralen, een omhaakte rammelkraal en 2 houten ringetjes. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralen ketting is goed bevestigd met waxkoord.",
    size: "15cm",
    optioneel:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. Het nijlpaard is ook mogelijk met kralen ketting. Zonder geluid is een optie.",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-nijlpaard.jpg",
    thumbnail: true,
    productId: kralenNijlpaard.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-nijlpaard_size_.jpg",
    thumbnail: false,
    productId: kralenNijlpaard.id
  });

  const kralenSchaap = await Product.create({
    name: "Schaap bijtring met kralen",
    price: "17.50",
    description:
      "Schaap bijtring met twee kralen kettingen, een mooie bloem bijtring en een houten bijtring met de tekst 'Sweet Dreams' erop. Daarnaast zitten er kleine plastic ringetjes aan die leuke rammelen. Een aantal kralen is omhaakt met katoengaren, het schaap is van hout, de bloem is van plastic. De kralen kettingen zijn goed bevestigd met waxkoord.",
    size: "20cm",
    optioneel:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. De bloem bijtring en de kleine ringetjes kunnen ook in andere kleuren. Het schaap is ook mogelijk alleen met een kralen ketting.",
    stock: 1,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-schaap.jpg",
    thumbnail: true,
    productId: kralenSchaap.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-schaap_size.jpg",
    thumbnail: false,
    productId: kralenSchaap.id
  });

  const kralenVos = await Product.create({
    name: "Vos bijtring met kralen",
    price: "12.50",
    description:
      "Vos bijtring met een kralen ketting en een bloem plastic bijtring. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralen ketting is goed bevestigd met waxkoord.",
    size: "13cm",
    optioneel:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. De bloem bijtring kan ook in andere kleuren. De vos is ook mogelijk zonder de bloem bijtring.",
    stock: 1,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-vos.jpg",
    thumbnail: true,
    productId: kralenVos.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-vos_size.jpg",
    thumbnail: false,
    productId: kralenVos.id
  });

  const kralenCupcake = await Product.create({
    name: "Cupcake bijtring met kralen",
    price: "9.95",
    description:
      "Cupcake bijtring met een kralen ketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralen ketting is goed bevestigd met waxkoord.",
    size: "9cm",
    optioneel:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-cupcake.jpg",
    thumbnail: true,
    productId: kralenCupcake.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-cupcake_size.jpg",
    thumbnail: false,
    productId: kralenCupcake.id
  });

  const kralenPinguin = await Product.create({
    name: "Pinguin bijtring met kralen",
    price: "9.95",
    description:
      "Pinguin bijtring met een kralen ketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralen ketting is goed bevestigd met waxkoord.",
    size: "9cm",
    optioneel:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
    stock: 1,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-pingu.jpg",
    thumbnail: true,
    productId: kralenPinguin.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-pingu_size.jpg",
    thumbnail: false,
    productId: kralenPinguin.id
  });

  const kralenDolfijn = await Product.create({
    name: "Dolfijn bijtring met kralen",
    price: "9.95",
    description:
      "Dolfijn bijtring met een kralen ketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralen ketting is goed bevestigd met waxkoord.",
    size: "9cm",
    optioneel:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-dolfijn.jpg",
    thumbnail: true,
    productId: kralenDolfijn.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-dolfijn_size.jpg",
    thumbnail: false,
    productId: kralenDolfijn.id
  });

  const kralenOlifant = await Product.create({
    name: "Olifant bijtring met kralen",
    price: "9.95",
    description:
      "Olifant bijtring met een kralen ketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralen ketting is goed bevestigd met waxkoord.",
    size: "9cm",
    optioneel:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
    stock: 0,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-olifant1.jpg",
    thumbnail: true,
    productId: kralenOlifant.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-olifant_size.jpg",
    thumbnail: false,
    productId: kralenOlifant.id
  });

  const kralenDino = await Product.create({
    name: "Dino bijtring met kralen",
    price: "9.95",
    description:
      "Dino bijtring met een kralen ketting. Een aantal kralen is omhaakt met katoengaren, de bijtring is van hout. De kralen ketting is goed bevestigd met waxkoord.",
    size: "9cm",
    optioneel:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
    stock: 1,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-dino.jpg",
    thumbnail: true,
    productId: kralenDino.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/kraal-dino_size.jpg",
    thumbnail: false,
    productId: kralenDino.id
  });

  const kralen = await Product.create({
    name: "Bijtringen met kralen",
    price: "7.50",
    description:
      "Twee bijtringen met een kralen ketting. Een aantal kralen is omhaakt met katoengaren, de bijtringen zijn van hout. De kralen ketting is goed bevestigd met waxkoord. Doordat er twee bijtringen aanzitten maakt het ook geluid.",
    size: "12cm",
    optioneel:
      "Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt.",
    stock: 1,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/bijt-kraal.jpg",
    thumbnail: true,
    productId: kralen.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-kralen/bijt-kraal_size.jpg",
    thumbnail: false,
    productId: kralen.id
  });

  const bijtringKonijnOren = await Product.create({
    name: "Knisperende Konijnen Oren",
    price: "7.50",
    description:
      "Bijtring met knisperend konijnenoren. Deze konijnen oren is gemaakt van katoengaren, de bijtring is van hout.",
    size: "11cm",
    optioneel:
      "Het knisper kan vervangen worden door een piepertje, het oor wordt dan wel dikker. Zonder geluid is natuurlijk ook mogelijk. Deze is leuk in heel veel verschillende kleuren, laat bij opmerkingen even weten welke kleur je wilt. ",
    stock: 1,
    categorieId: rammelaar.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-konijn-oren/bijt-konijnoor1.jpg",
    thumbnail: true,
    productId: bijtringKonijnOren.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-konijn-oren/bijt-konijnoor_size.jpg",
    thumbnail: false,
    productId: bijtringKonijnOren.id
  });

  ProductImage.create({
    url:
      "https://www.haakdraak.nl/Test/afbeeldingen/bijtring-konijn-oren/bijt-konijnoor_size1.jpg",
    thumbnail: false,
    productId: bijtringKonijnOren.id
  });
}

seedDataBase();
