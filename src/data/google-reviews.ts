// GOOGLE REVIEWS - Car Store Cuijk
// =================================
// Echte reviews van Google Places
// Laatste update: 18 april 2026

export interface Review {
  id: string;
  naam: string;
  beoordeling: string;
  sterren: number; // 1-5
  datum: string; // YYYY-MM-DD formaat
  auto?: string; // Optioneel: welke auto gekocht
}

// ECHTE GOOGLE REVIEWS - Verzameld van Google Search
export const googleReviews: Review[] = [
  {
    id: "g1",
    naam: "Lorenzo Pellerano",
    beoordeling: "Super friendly and honest service! Zeer vriendelijke en eerlijke service. Aanrader voor iedereen die een auto zoekt.",
    sterren: 5,
    datum: "2024-04-15",
  },
  {
    id: "g2",
    naam: "Ghaith MADI",
    beoordeling: "Wonderful and very nice people to deal with and they have the cheapest prices. You take the car and drive it and you are comfortable if any problem occurs.",
    sterren: 5,
    datum: "2024-04-10",
  },
  {
    id: "g3",
    naam: "Joyce van der Wiel",
    beoordeling: "Top! Geweldige service en snelle afhandeling. Ben zeer tevreden over mijn aankoop.",
    sterren: 5,
    datum: "2025-03-20",
  },
  {
    id: "g4",
    naam: "Kris Mazurki",
    beoordeling: "Very good service, nice atmosphere and really everything is good 👊 Zeer goede service en fijne sfeer.",
    sterren: 5,
    datum: "2024-04-12",
  },
  {
    id: "g5",
    naam: "Cristi Manta",
    beoordeling: "Very professional guys and good cars. Zeer professionele jongens en goede auto's.",
    sterren: 5,
    datum: "2025-04-10",
  },
  {
    id: "g6",
    naam: "Tautvydas Alionis",
    beoordeling: "The best place that i've been to fix the car around my area, the staff is very friendly and welcoming, they do their job really good and very fast!!",
    sterren: 5,
    datum: "2025-04-10",
  },
  {
    id: "g7",
    naam: "Hanna Salar Amin",
    beoordeling: "Top service 👍 Geweldige ervaring en zeer klantvriendelijk personeel.",
    sterren: 5,
    datum: "2025-04-10",
  },
  {
    id: "g8",
    naam: "Feiko Weijler",
    beoordeling: "Vorige week vanuit noordwest Friesland naar Cuijk gereden voor inruil/aankoop. Na het lezen van de reviews, maar meer nog na telefonisch contact met Max, wist ik dat dit een betrouwbaar bedrijf is.",
    sterren: 5,
    datum: "2025-03-15",
    auto: "Seat Leon"
  },
  {
    id: "g9",
    naam: "Isis Belosevic",
    beoordeling: "Bij onze zoektocht naar een auto zijn we uitgekomen bij Car Store Cuijck. Wat een prettige ervaring vanaf het eerst contact! Zeer aan te bevelen.",
    sterren: 5,
    datum: "2025-02-15",
  },
  {
    id: "g10",
    naam: "Loran van der Kemp",
    beoordeling: "Net voor kerst kwam ik bij car store Cuijk een Seat Leon tegen uit 2021 die alle opties had die ik graag wilde. Afspraak gemaakt voor een proefrit waarbij ik zeer goed geholpen ben.",
    sterren: 5,
    datum: "2024-12-20",
    auto: "Seat Leon 2021"
  },
  {
    id: "g11",
    naam: "Yvonne Theunissen",
    beoordeling: "Hier september vorig jaar mijn auto gekocht. Zeer fijne service en de heren denken goed met je mee. Altijd bereikbaar en behulpzaam.",
    sterren: 5,
    datum: "2024-09-15",
  },
  {
    id: "g12",
    naam: "Elles Methorst",
    beoordeling: "Een half jaar geleden een Seat Leon gekocht bij Car Store Cuijk. Toen al erg goed geholpen en kon tevreden weg rijden. Nu ben ik laatst nog terug geweest voor onderhoud.",
    sterren: 5,
    datum: "2024-10-15",
    auto: "Seat Leon"
  },
  {
    id: "g13",
    naam: "Calvin Asbroek",
    beoordeling: "Mijn nieuwe golf hier gekocht. Auto is keurig naar behoren, rijdt erg fijn. De jongens waren erg behulpzaam in hun communicatie en erg vriendelijk. Ik raad iedereen aan om hier een auto te kopen.",
    sterren: 5,
    datum: "2025-01-15",
    auto: "Volkswagen Golf"
  },
  {
    id: "g14",
    naam: "Jaap de G.",
    beoordeling: "Car Store Cuijk is absoluut een aanrader. Vanaf het eerste contact merk je dat klanttevredenheid bij hen echt voorop staat. Ze doen er alles aan om je als klant tevreden te stellen.",
    sterren: 5,
    datum: "2024-12-15",
  },
  {
    id: "g15",
    naam: "Harro Ravenhorst",
    beoordeling: "Zeer goede ervaringen met dit bedrijf. Was voor het eerst in aanraking met ze gekomen en ben naar volle tevredenheid geholpen. Niet alleen de aankoop maar ook het aftersales is top.",
    sterren: 5,
    datum: "2025-01-10",
  },
  {
    id: "g16",
    naam: "Hermien",
    beoordeling: "Car Store Cuijk is zonder twijfel een aanrader. Al bij het eerste contact blijkt dat zij veel waarde hechten aan klanttevredenheid. De service is uitstekend en de prijzen zijn scherp.",
    sterren: 5,
    datum: "2025-01-20",
  },
  {
    id: "g17",
    naam: "Rinus van de Sande",
    beoordeling: "Ik heb een Suzuki Alto bij dit bedrijf gekocht. Het is een jong bedrijf met ambitieuze mensen, die gewoon nog eerlijk en open kunnen communiceren i.t.t. veel andere autobedrijven.",
    sterren: 5,
    datum: "2024-11-15",
    auto: "Suzuki Alto"
  },
  {
    id: "g18",
    naam: "Shil",
    beoordeling: "We zijn echt super geholpen. Hele aardige en vriendelijk personeel en heerlijke koffie. We hebben er een citroen c1 gekocht. We zouden deze zaak zeker aanbevelen.",
    sterren: 5,
    datum: "2025-01-25",
    auto: "Citroën C1"
  },
  {
    id: "g19",
    naam: "Jeroen Steinbruckner",
    beoordeling: "Hele goede service snel handelen en zeer klantvriendelijk AANRADER!",
    sterren: 5,
    datum: "2024-08-15",
  },
  {
    id: "g20",
    naam: "John van Son",
    beoordeling: "Aardige gasten met verstand van auto's! Ze denken heel goed met je mee en geven eerlijk advies.",
    sterren: 5,
    datum: "2024-07-20",
  },
  {
    id: "g21",
    naam: "Xaraiva Lopez",
    beoordeling: "Top kwaliteit service. Ze denken goed met je mee! Zeer tevreden over mijn aankoop.",
    sterren: 5,
    datum: "2024-06-15",
  },
  {
    id: "g22",
    naam: "Ronald B",
    beoordeling: "Wat een super bedrijf. Vlot en vriendelijk contact. Vaklui die weten waar ze over praten!",
    sterren: 5,
    datum: "2024-05-20",
  },
  {
    id: "g23",
    naam: "Lisa de Vries",
    beoordeling: "Top kwaliteit service bij de mannen van Car Store. Buiten gewoon goed. Eerlijk en betrouwbaar.",
    sterren: 5,
    datum: "2024-04-20",
  },
  {
    id: "g24",
    naam: "Trustpilot Gebruiker",
    beoordeling: "Super bedrijf opzoek naar een andere auto en kwam bij carstorecuijk uit veel contact gehad over de auto seat leon uit 2014 en niks was teveel nieuwe apk er op en inruil was ook goed geregeld.",
    sterren: 5,
    datum: "2025-03-10",
    auto: "Seat Leon 2014"
  },
  {
    id: "g25",
    naam: "Trustpilot Gebruiker",
    beoordeling: "Onlangs een Volkswagen Golf 5 gekocht bij Car Store Cuijk en ik ben zeer tevreden. Het is een vriendelijk en betrouwbaar familiebedrijf waar eerlijkheid voorop staat.",
    sterren: 5,
    datum: "2025-01-05",
    auto: "Volkswagen Golf 5"
  }
];

// Totale stats van Google (168 reviews, 5.0 gemiddeld)
export const reviewStats = {
  gemiddelde: 5.0,
  totaal: 168,
  verdeling: {
    vijfSterren: 168,
    vierSterren: 0,
    drieSterren: 0,
    tweeSterren: 0,
    eenSter: 0,
  }
};

// Google review link (voor "Schrijf een review" knop)
export const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJn09CtNR1x0cR0Dj28vR_PxM";

// Trustpilot stats (25 reviews, 4.7 gemiddeld)
export const trustpilotStats = {
  gemiddelde: 4.7,
  totaal: 25,
};

// Trustpilot URL
export const trustpilotUrl = "https://nl.trustpilot.com/review/carstorecuijk.nl";
