//name, flags, population, capital, region, borders;

//sample
const localData = [
  {
    name: {
      common: "Qualla Boundary",
      official: "Eastern Band of Cherokee Indians Territory",
      nativeName: null,
    },
    cca3: "",
    capital: ["Cherokee"],
    region: "Americas",
    subregion: "North America",
    translations: {
      fra: {
        official: "Territoire de la Bande orientale des Indiens Cherokee",
        common: "Territoire de la Bande orientale des Indiens Cherokee",
      },
      spa: {
        official: "Territorio de la Banda Oriental de Indios Cherokee",
        common: "Territorio de la Banda Oriental de Indios Cherokee",
      },
      rus: {
        official: "Территория Восточной группы индейцев чероки",
        common: "Территория Восточной группы индейцев чероки",
      },
    },
    flags: {
      alt: "A yellow field with the tribal seal featuring a seven-pointed star in the center within an orange and green wreath of oak leaves, representing the seven original Cherokee clans and the eternal flame of the Cherokee people.",
    },
    population: 14000,
    borders: null,
  },
  {
    name: {
      common: "East Turkestan",
      official: "Xinjiang Uyghur Autonomous Region",
      nativeName: null,
    },
    cca3: "",
    capital: ["Urumqi"],
    region: "Asia",
    subregion: "Central Asia",
    translations: {
      fra: { official: "Turkestan oriental", common: "Turkestan oriental" },
      spa: { official: "Turkestán Oriental", common: "Turkestán Oriental" },
      rus: { official: "Восточный Туркестан", common: "Восточный Туркестан" },
    },
    flags: {
      alt: "A blue field with a white crescent moon and five-pointed star, known as the Kökbayraq or sky flag, representing Turkic peoples and their connection to the eternal blue sky.",
    },
    population: 21810000,
    borders: null,
  },
  {
    name: {
      common: "Quebec",
      official: "Province de Québec",
      nativeName: null,
    },
    cca3: "QC",
    capital: ["Quebec City"],
    region: "Americas",
    subregion: "North America",
    translations: {
      fra: { official: "Québec", common: "Québec" },
      spa: { official: "Quebec", common: "Quebec" },
      rus: { official: "Квебек", common: "Квебек" },
    },
    flags: {
      alt: "A blue field with a white cross dividing it into four sections, each containing a white fleur-de-lis, representing French heritage and Catholic tradition.",
    },
    population: 8501833,
    borders: null,
  },
  {
    name: {
      common: "Yakutia",
      official: "Sakha Republic",
      nativeName: null,
    },
    cca3: "",
    capital: ["Yakutsk"],
    region: "Asia",
    subregion: "Northern Asia",
    translations: {
      fra: { official: "République de Sakha", common: "République de Sakha" },
      spa: { official: "República de Sajá", common: "República de Sajá" },
      rus: { official: "Республика Саха", common: "Республика Саха" },
    },
    flags: {
      alt: "Four horizontal stripes of light blue, white, red, and green with a white disc in the center of the blue stripe, representing the northern sun, sky, snow, taiga, and the courage of the people.",
    },
    population: 1007058,
    borders: null,
  },
  {
    name: {
      common: "Buryatia",
      official: "Republic of Buryatia",
      nativeName: null,
    },
    cca3: "",
    capital: ["Ulan-Ude"],
    region: "Asia",
    subregion: "Northern Asia",
    translations: {
      fra: {
        official: "République de Bouriatie",
        common: "République de Bouriatie",
      },
      spa: {
        official: "República de Buriatia",
        common: "República de Buriatia",
      },
      rus: { official: "Республика Бурятия", common: "Республика Бурятия" },
    },
    flags: {
      alt: "Three horizontal stripes of blue, white, and yellow in a 2:1:1 ratio with a yellow Soyombo symbol on the blue stripe, representing the moon, sun, and fire elements of Buryat culture.",
    },
    population: 970679,
    borders: null,
  },
  {
    name: {
      common: "Guam",
      official: "Territory of Guam",
      nativeName: null,
    },
    cca3: "GUM",
    capital: ["Hagåtña"],
    region: "Oceania",
    subregion: "Micronesia",
    translations: {
      fra: { official: "Guam", common: "Guam" },
      spa: { official: "Guam", common: "Guam" },
      rus: { official: "Гуам", common: "Гуам" },
    },
    flags: {
      alt: "A dark blue field with a red border and the territorial seal in the center, depicting a coconut palm, beach, sailboat, and cliffs representing Guam's natural beauty and maritime heritage.",
    },
    population: 168999,
    borders: null,
  },
  {
    name: {
      common: "American Samoa",
      official: "Territory of American Samoa",
      nativeName: null,
    },
    cca3: "ASM",
    capital: ["Pago Pago"],
    region: "Oceania",
    subregion: "Polynesia",
    translations: {
      fra: { official: "Samoa américaines", common: "Samoa américaines" },
      spa: { official: "Samoa Americana", common: "Samoa Americana" },
      rus: { official: "Американское Самоа", common: "Американское Самоа" },
    },
    flags: {
      alt: "A red-edged white triangle pointing towards the hoist with a bald eagle clutching a war club and fly-whisk, flanked by blue triangles, representing the unity between the United States and Samoa.",
    },
    population: 58681,
    borders: null,
  },
  {
    name: {
      common: "Northern Mariana Islands",
      official: "Commonwealth of the Northern Mariana Islands",
      nativeName: null,
    },
    cca3: "MNP",
    capital: ["Saipan"],
    region: "Oceania",
    subregion: "Micronesia",
    translations: {
      fra: {
        official: "Îles Mariannes du Nord",
        common: "Îles Mariannes du Nord",
      },
      spa: {
        official: "Islas Marianas del Norte",
        common: "Islas Marianas del Norte",
      },
      rus: {
        official: "Северные Марианские острова",
        common: "Северные Марианские острова",
      },
    },
    flags: {
      alt: "A blue field with a white star superimposed on a gray latte stone surrounded by a traditional Carolinian mwáár floral wreath, representing the Chamorro and Carolinian peoples and their connection to the United States.",
    },
    population: 43571,
    borders: null,
  },
  {
    name: {
      common: "US Virgin Islands",
      official: "United States Virgin Islands",
      nativeName: null,
    },
    cca3: "VIR",
    capital: ["Charlotte Amalie"],
    region: "Americas",
    subregion: "Caribbean",
    translations: {
      fra: {
        official: "Îles Vierges américaines",
        common: "Îles Vierges américaines",
      },
      spa: {
        official: "Islas Vírgenes de los Estados Unidos",
        common: "Islas Vírgenes de los Estados Unidos",
      },
      rus: {
        official: "Виргинские острова США",
        common: "Виргинские острова США",
      },
    },
    flags: {
      alt: "A white field with a modified US coat of arms between the blue letters V and I, featuring a yellow eagle holding arrows and an olive branch, representing the three main islands and their relationship with the United States.",
    },
    population: 103000,
    borders: null,
  },
  {
    name: {
      common: "Sápmi",
      official: "Sámi Homeland",
      nativeName: null,
    },
    cca3: "",
    capital: ["Kautokeino"],
    region: "Europe",
    subregion: "Northern Europe",
    translations: {
      fra: { official: "Sápmi", common: "Sápmi" },
      spa: { official: "Sápmi", common: "Sápmi" },
      rus: { official: "Сапми", common: "Сапми" },
    },
    flags: {
      alt: "A flag with vertical red and blue stripes and a central circle split red/blue, symbolizing the sun and moon.",
    },
    population: 80000,
    borders: null,
  },
  {
    name: {
      common: "Ainu Mosir",
      official: "Ainu Mosir",
      nativeName: null,
    },
    cca3: "",
    capital: ["Sapporo"],
    region: "Asia",
    subregion: "Eastern Asia",
    translations: {
      fra: { official: "Terre des Aïnous", common: "Terre des Aïnous" },
      spa: { official: "Tierra Ainu", common: "Tierra Ainu" },
      rus: { official: "Земля Айнов", common: "Земля Айнов" },
    },
    flags: {
      alt: "A green field with a white geometric pattern and traditional Ainu motifs.",
    },
    population: 25000,
    borders: null,
  },
  {
    name: {
      common: "Wallmapu",
      official: "Mapuche Nation",
      nativeName: null,
    },
    cca3: "",
    capital: ["Temuco"],
    region: "Americas",
    subregion: "South America",
    translations: {
      fra: { official: "Nation Mapuche", common: "Nation Mapuche" },
      spa: { official: "Nación Mapuche", common: "Nación Mapuche" },
      rus: { official: "Нация Мапуче", common: "Нация Мапуче" },
    },
    flags: {
      alt: "A blue, green, and red flag with a yellow kultrun (drum) in the center, symbolizing the Mapuche worldview.",
    },
    population: 2000000,
    borders: null,
  },
  {
    name: {
      common: "Lakota Nation",
      official: "Oceti Sakowin",
      nativeName: null,
    },
    cca3: "",
    capital: ["Pine Ridge"],
    region: "Americas",
    subregion: "North America",
    translations: {
      fra: { official: "Nation Lakota", common: "Nation Lakota" },
      spa: { official: "Nación Lakota", common: "Nación Lakota" },
      rus: { official: "Нация Лакота", common: "Нация Лакота" },
    },
    flags: {
      alt: "A sky blue field with a circle of white tipis representing the seven council fires.",
    },
    population: 170000,
    borders: null,
  },
  {
    name: {
      common: "Guarani Territory",
      official: "Guarani Yvyrupa",
      nativeName: null,
    },
    cca3: "",
    capital: ["Dourados"],
    region: "Americas",
    subregion: "South America",
    translations: {
      fra: { official: "Terre Guarani", common: "Terre Guarani" },
      spa: { official: "Territorio Guaraní", common: "Territorio Guaraní" },
      rus: { official: "Земля Гуарани", common: "Земля Гуарани" },
    },
    flags: {
      alt: "A green and white field with a central red diamond and yellow sun, reflecting Guarani cosmology.",
    },
    population: 510000,
    borders: null,
  },
  {
    name: {
      common: "Ogiek Territory",
      official: "Ogiek Ancestral Land",
      nativeName: null,
    },
    cca3: "",
    capital: ["Nessuit"],
    region: "Africa",
    subregion: "Eastern Africa",
    translations: {
      fra: { official: "Terre Ogiek", common: "Terre Ogiek" },
      spa: { official: "Tierra Ogiek", common: "Tierra Ogiek" },
      rus: { official: "Земля Огиек", common: "Земля Огиек" },
    },
    flags: {
      alt: "No official flag; Ogiek symbols often use trees and honeycombs representing forest life.",
    },
    population: 52000,
    borders: null,
  },
  {
    name: {
      common: "Baka Territory",
      official: "Baka Forest",
      nativeName: null,
    },
    cca3: "",
    capital: ["Mindourou"],
    region: "Africa",
    subregion: "Central Africa",
    translations: {
      fra: { official: "Terre Baka", common: "Terre Baka" },
      spa: { official: "Tierra Baka", common: "Tierra Baka" },
      rus: { official: "Земля Бака", common: "Земля Бака" },
    },
    flags: {
      alt: "No official flag; Baka art often features forest and animal motifs.",
    },
    population: 30000,
    borders: null,
  },
  {
    name: {
      common: "Kurdistan",
      official: "Kurdistan Region",
      nativeName: null,
    },
    cca3: "",
    capital: ["Erbil"],
    region: "Asia",
    subregion: "Western Asia",
    translations: {
      fra: { official: "Kurdistan", common: "Kurdistan" },
      spa: { official: "Kurdistán", common: "Kurdistán" },
      rus: { official: "Курдистан", common: "Курдистан" },
    },
    flags: {
      alt: "A tricolor of red, white, and green with a yellow sun disk in the center.",
    },
    population: 30000000,
    borders: null,
  },
  {
    name: {
      common: "West Papua",
      official: "West Papua",
      nativeName: null,
    },
    cca3: "",
    capital: ["Jayapura"],
    region: "Oceania",
    subregion: "Melanesia",
    translations: {
      fra: {
        official: "Papouasie occidentale",
        common: "Papouasie occidentale",
      },
      spa: { official: "Papúa Occidental", common: "Papúa Occidental" },
      rus: { official: "Западное Папуа", common: "Западное Папуа" },
    },
    flags: {
      alt: "A red vertical stripe with a white star, and blue and white horizontal stripes, known as the Morning Star flag.",
    },
    population: 4000000,
    borders: null,
  },
  {
    name: {
      common: "Tibet",
      official: "Tibet Autonomous Region",
      nativeName: null,
    },
    cca3: "",
    capital: ["Lhasa"],
    region: "Asia",
    subregion: "Central Asia",
    translations: {
      fra: { official: "Tibet", common: "Tibet" },
      spa: { official: "Tíbet", common: "Tíbet" },
      rus: { official: "Тибет", common: "Тибет" },
    },
    flags: {
      alt: "A white mountain with a rising sun, two snow lions, and a blue and red striped background.",
    },
    population: 6000000,
    borders: null,
  },
  {
    name: {
      common: "Sentinelese Territory",
      official: "North Sentinel Island",
      nativeName: null,
    },
    cca3: "",
    capital: ["(none)"],
    region: "Asia",
    subregion: "Southern Asia",
    translations: {
      fra: { official: "Île Sentinel du Nord", common: "Île Sentinel du Nord" },
      spa: {
        official: "Isla Sentinel del Norte",
        common: "Isla Sentinel del Norte",
      },
      rus: { official: "Северный Сентинел", common: "Северный Сентинел" },
    },
    flags: {
      alt: "",
    },
    population: 100,
    borders: null,
  },
  {
    name: {
      common: "Mi'kma'ki",
      official: "Mi'kmaq Territory",
      nativeName: null,
    },
    cca3: "",
    capital: ["Membertou"],
    region: "Americas",
    subregion: "North America",
    translations: {
      fra: { official: "Mi'kma'ki", common: "Mi'kma'ki" },
      spa: { official: "Mi'kma'ki", common: "Mi'kma'ki" },
      rus: { official: "Микмаки", common: "Микмаки" },
    },
    flags: {
      alt: "A white field with a red cross and a central star and crescent, representing the Mi'kmaq Grand Council.",
    },
    population: 17000,
    borders: null,
  },
  {
    name: {
      common: "Naga Homeland",
      official: "Naga Hills",
      nativeName: null,
    },
    cca3: "",
    capital: ["Kohima"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    translations: {
      fra: { official: "Territoire Naga", common: "Territoire Naga" },
      spa: { official: "Territorio Naga", common: "Territorio Naga" },
      rus: { official: "Земля Нагов", common: "Земля Нагов" },
    },
    flags: {
      alt: "A blue, red, and green flag with a rainbow, star, and spear, symbolizing unity and peace.",
    },
    population: 3500000,
    borders: null,
  },
  {
    name: {
      common: "Aotearoa",
      official: "Te Ika-a-Māui & Te Waipounamu",
      nativeName: null,
    },
    cca3: "",
    capital: ["Rotorua"],
    region: "Oceania",
    subregion: "Polynesia",
    translations: {
      fra: { official: "Territoire Maori", common: "Territoire Maori" },
      spa: { official: "Territorio Maorí", common: "Territorio Maorí" },
      rus: { official: "Маори", common: "Маори" },
    },
    flags: {
      alt: "A black, white, and red koru (spiral) design flag representing new life and growth.",
    },
    population: 775000,
    borders: null,
  },
  {
    name: {
      common: "Saramaka Territory",
      official: "Saramaka Maroon Land",
      nativeName: null,
    },
    cca3: "",
    capital: ["Asindohopo"],
    region: "Americas",
    subregion: "South America",
    translations: {
      fra: { official: "Terre Saramaka", common: "Terre Saramaka" },
      spa: { official: "Tierra Saramaka", common: "Tierra Saramaka" },
      rus: { official: "Земля Сарамака", common: "Земля Сарамака" },
    },
    flags: {
      alt: "",
    },
    population: 56000,
    borders: null,
  },
  {
    name: {
      common: "Adivasi Territory",
      official: "Central Indian Tribal Belt",
      nativeName: null,
    },
    cca3: "",
    capital: ["Ranchi"],
    region: "Asia",
    subregion: "Southern Asia",
    translations: {
      fra: { official: "Territoire Adivasi", common: "Territoire Adivasi" },
      spa: { official: "Territorio Adivasi", common: "Territorio Adivasi" },
      rus: { official: "Земля Адиваси", common: "Земля Адиваси" },
    },
    flags: {
      alt: "",
    },
    population: 100000000,
    borders: null,
  },
  {
    name: {
      common: "Tuareg Territory",
      official: "Azawad",
      nativeName: null,
    },
    cca3: "",
    capital: ["Timbuktu"],
    region: "Africa",
    subregion: "Western Africa",
    translations: {
      fra: { official: "Terre Touareg", common: "Terre Touareg" },
      spa: { official: "Tierra Tuareg", common: "Tierra Tuareg" },
      rus: { official: "Земля Туарегов", common: "Земля Туарегов" },
    },
    flags: {
      alt: "A blue field with a red Tifinagh letter yaz, symbolizing freedom.",
    },
    population: 3500000,
    borders: null,
  },
  {
    name: {
      common: "Sahrawi Land",
      official: "Western Sahara",
      nativeName: null,
    },
    cca3: "",
    capital: ["Laayoune"],
    region: "Africa",
    subregion: "Northern Africa",
    translations: {
      fra: { official: "Sahara occidental", common: "Sahara occidental" },
      spa: { official: "Sáhara Occidental", common: "Sáhara Occidental" },
      rus: { official: "Западная Сахара", common: "Западная Сахара" },
    },
    flags: {
      alt: "A tricolor of black, white, and green with a red triangle and star/crescent.",
    },
    population: 600000,
    borders: null,
  },
  {
    name: {
      common: "Yanomami Territory",
      official: "Yanomami Land",
      nativeName: null,
    },
    cca3: "",
    capital: ["Demini"],
    region: "Americas",
    subregion: "South America",
    translations: {
      fra: { official: "Terre Yanomami", common: "Terre Yanomami" },
      spa: { official: "Tierra Yanomami", common: "Tierra Yanomami" },
      rus: { official: "Земля Яномами", common: "Земля Яномами" },
    },
    flags: {
      alt: "",
    },
    population: 45000,
    borders: null,
  },
];
export default localData;
