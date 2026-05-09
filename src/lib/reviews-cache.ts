// Reviews Cache System - Car Store Cuijk
// Gratis automatisch reviews systeem zonder API kosten
// Werkt met static export - client-side fetch
// ===========================================

export interface Review {
  id: string;
  naam: string;
  beoordeling: string;
  sterren: number;
  datum: string;
  auto?: string;
}

export interface ReviewStats {
  gemiddelde: number;
  totaal: number;
  verdeling: {
    vijfSterren: number;
    vierSterren: number;
    drieSterren: number;
    tweeSterren: number;
    eenSter: number;
  };
}

export interface ReviewsCache {
  reviews: Review[];
  stats: ReviewStats;
  trustpilotStats: {
    gemiddelde: number;
    totaal: number;
  };
  lastUpdated: string;
  source: 'cache' | 'fresh';
}

// Cache duration: 24 uur in milliseconds
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000;

// LocalStorage key
const STORAGE_KEY = 'carstore-reviews-cache';
const STORAGE_TIMESTAMP_KEY = 'carstore-reviews-timestamp';

// Fallback reviews (hardcoded als backup)
const fallbackReviews: Review[] = [
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

const fallbackStats: ReviewStats = {
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

const fallbackTrustpilotStats = {
  gemiddelde: 4.7,
  totaal: 25,
};

// Lees cache van localStorage (client-side only)
function readLocalStorageCache(): ReviewsCache | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached) as ReviewsCache;
    }
  } catch {
    // Ignore localStorage errors
  }
  return null;
}

// Schrijf cache naar localStorage (client-side only)
function writeLocalStorageCache(cache: ReviewsCache): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
    localStorage.setItem(STORAGE_TIMESTAMP_KEY, Date.now().toString());
  } catch {
    // Ignore localStorage errors
  }
}

// Check of cache verlopen is
function isCacheExpired(cache: ReviewsCache): boolean {
  const lastUpdate = new Date(cache.lastUpdated).getTime();
  const now = Date.now();
  return now - lastUpdate > CACHE_DURATION_MS;
}

// Fetch reviews van JSON file (static export compatible)
async function fetchReviewsFromJson(): Promise<ReviewsCache | null> {
  try {
    // Fetch van public/data/reviews-cache.json
    const response = await fetch('/data/reviews-cache.json?v=' + Date.now(), {
      cache: 'no-cache'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    
    const data = await response.json();
    return {
      ...data,
      source: 'fresh' as const,
    };
  } catch (error) {
    console.error('Error fetching reviews JSON:', error);
    return null;
  }
}

// Haal reviews op (met caching)
export async function getReviews(forceRefresh = false): Promise<ReviewsCache> {
  // Client-side: check localStorage eerst
  if (!forceRefresh && typeof window !== 'undefined') {
    const localCache = readLocalStorageCache();
    if (localCache && !isCacheExpired(localCache)) {
      return { ...localCache, source: 'cache' };
    }
  }

  // Fetch nieuwe data van JSON file
  const freshData = await fetchReviewsFromJson();
  
  if (freshData) {
    // Update localStorage
    if (typeof window !== 'undefined') {
      writeLocalStorageCache(freshData);
    }
    return freshData;
  }

  // Fallback: gebruik localStorage cache als beschikbaar
  const localCache = readLocalStorageCache();
  if (localCache) {
    return { ...localCache, source: 'cache' };
  }

  // Laatste fallback: hardcoded data
  return {
    reviews: fallbackReviews,
    stats: fallbackStats,
    trustpilotStats: fallbackTrustpilotStats,
    lastUpdated: new Date().toISOString(),
    source: 'fresh',
  };
}

// Forceer cache refresh (voor admin gebruik)
export async function refreshReviews(): Promise<ReviewsCache> {
  return getReviews(true);
}

// Update reviews met nieuwe data (voor admin/handmatige update)
// In static export: dit update de JSON file niet, alleen localStorage
export async function updateReviews(
  reviews: Review[],
  stats: ReviewStats,
  trustpilotStats?: { gemiddelde: number; totaal: number }
): Promise<ReviewsCache> {
  const newCache: ReviewsCache = {
    reviews,
    stats,
    trustpilotStats: trustpilotStats || fallbackTrustpilotStats,
    lastUpdated: new Date().toISOString(),
    source: 'fresh',
  };

  writeLocalStorageCache(newCache);
  return newCache;
}

// Exporteer URLs voor reviews schrijven
export const googleReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJn09CtNR1x0cR0Dj28vR_PxM";
export const trustpilotUrl = "https://nl.trustpilot.com/review/carstorecuijk.nl";