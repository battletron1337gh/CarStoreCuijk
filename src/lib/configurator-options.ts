/**
 * Central options catalog for the Auto Configurator.
 * AI-ready: categories and options are data-driven and can be extended
 * without touching UI components.
 */

export type ConfigCategoryId = 'exterieur' | 'interieur' | 'onderhoud' | 'tuning';

export type OverlayType =
  | 'wheels'
  | 'calipers'
  | 'roof'
  | 'windows'
  | 'mirrors'
  | 'skirts'
  | 'splitter'
  | 'spoiler'
  | 'diffuser'
  | 'exhaust'
  | 'suspension'
  | 'lights'
  | 'wheel-rim-protectors'
  | 'chrome-delete';

export interface ConfigOption {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ConfigCategoryId;
  iconName: string;
  installTimeHours: number;
  deliveryDays: number;
  overlayType?: OverlayType;
  overlayColor?: string;
  imageUrl?: string;
  /** If true, the user can pick a custom color for this overlay option. */
  allowColor?: boolean;
  /** If true, only one option with the same overlayType can be selected at a time. */
  exclusive?: boolean;
  /** Optional group key for mutually exclusive options that don't share an overlayType. */
  exclusiveGroup?: string;
}

export interface ConfigCategory {
  id: ConfigCategoryId;
  name: string;
  iconName: string;
}

export const CONFIG_CATEGORIES: ConfigCategory[] = [
  { id: 'exterieur', name: 'Exterieur', iconName: 'Car' },
  { id: 'interieur', name: 'Interieur', iconName: 'Sofa' },
  { id: 'onderhoud', name: 'Onderhoud', iconName: 'Wrench' },
  { id: 'tuning', name: 'Tuning', iconName: 'Gauge' },
];

export const CONFIG_OPTIONS: ConfigOption[] = [
  // ─── EXTERIEUR ───
  {
    id: 'velgen-zwart-18',
    name: 'Lichtmetalen velgen 18" zwart',
    description: 'Set van 4 sportieve zwarte velgen inclusief montage.',
    price: 799,
    category: 'exterieur',
    iconName: 'Disc',
    installTimeHours: 2,
    deliveryDays: 5,
    overlayType: 'wheels',
    overlayColor: '#1a1a1a',
    exclusive: true,
  },
  {
    id: 'velgen-zilver-18',
    name: 'Lichtmetalen velgen 18" zilver',
    description: 'Set van 4 premium zilveren velgen inclusief montage.',
    price: 849,
    category: 'exterieur',
    iconName: 'Disc',
    installTimeHours: 2,
    deliveryDays: 5,
    overlayType: 'wheels',
    overlayColor: '#c0c0c0',
    exclusive: true,
  },
  {
    id: 'velgen-bronze-18',
    name: 'Lichtmetalen velgen 18" bronze',
    description: 'Set van 4 stijlvolle bronze velgen inclusief montage.',
    price: 899,
    category: 'exterieur',
    iconName: 'Disc',
    installTimeHours: 2,
    deliveryDays: 5,
    overlayType: 'wheels',
    overlayColor: '#8c6239',
    exclusive: true,
  },
  {
    id: 'velgenbeschermers',
    name: 'Velgenbeschermers',
    description: 'Beschermranden tegen stoeprandschade.',
    price: 49,
    category: 'exterieur',
    iconName: 'Shield',
    installTimeHours: 0.5,
    deliveryDays: 2,
    overlayType: 'wheel-rim-protectors',
    allowColor: true,
  },
  {
    id: 'remklauwen-rood',
    name: 'Remklauwen spuiten rood',
    description: 'Sportieve rode remklauwen voor een premium look.',
    price: 199,
    category: 'exterieur',
    iconName: 'CircleDot',
    installTimeHours: 3,
    deliveryDays: 1,
    overlayType: 'calipers',
    overlayColor: '#c8102e',
    exclusive: true,
    allowColor: true,
  },
  {
    id: 'remklauwen-geel',
    name: 'Remklauwen spuiten geel',
    description: 'Opvallende gele remklauwen voor een racelook.',
    price: 199,
    category: 'exterieur',
    iconName: 'CircleDot',
    installTimeHours: 3,
    deliveryDays: 1,
    overlayType: 'calipers',
    overlayColor: '#facc15',
    exclusive: true,
    allowColor: true,
  },
  {
    id: 'dakwrap-zwart',
    name: 'Dakwrap zwart glans',
    description: 'Contrastvol zwart dak voor een sportieve uitstraling.',
    price: 349,
    category: 'exterieur',
    iconName: 'Layers',
    installTimeHours: 4,
    deliveryDays: 2,
    overlayType: 'roof',
    overlayColor: '#0a0a0a',
    exclusive: true,
    allowColor: true,
  },
  {
    id: 'spiegelkappen-zwart',
    name: 'Spiegelkappen zwart',
    description: 'Matzwarte spiegelkappen voor een chique contrast.',
    price: 129,
    category: 'exterieur',
    iconName: 'FlipHorizontal',
    installTimeHours: 1,
    deliveryDays: 2,
    overlayType: 'mirrors',
    overlayColor: '#111111',
    exclusive: true,
    allowColor: true,
  },
  {
    id: 'chroom-delete',
    name: 'Chroom delete',
    description: 'Ramenlijsten en sierlijsten voorzien van zwarte folie.',
    price: 249,
    category: 'exterieur',
    iconName: 'Minus',
    installTimeHours: 3,
    deliveryDays: 2,
    overlayType: 'chrome-delete',
  },
  {
    id: 'ramen-tint-5',
    name: 'Ramen tinten 5%',
    description: 'Donkere privacy tint over alle zij- en achterramen.',
    price: 299,
    category: 'exterieur',
    iconName: 'SunDim',
    installTimeHours: 4,
    deliveryDays: 2,
    overlayType: 'windows',
    overlayColor: 'rgba(0,0,0,0.85)',
    exclusive: true,
  },
  {
    id: 'ramen-tint-20',
    name: 'Ramen tinten 20%',
    description: 'Middeldonkere tint voor een sportieve look.',
    price: 279,
    category: 'exterieur',
    iconName: 'SunDim',
    installTimeHours: 4,
    deliveryDays: 2,
    overlayType: 'windows',
    overlayColor: 'rgba(0,0,0,0.65)',
    exclusive: true,
  },
  {
    id: 'side-skirts',
    name: 'Side skirts',
    description: 'Sportieve sideskirts voor een lager, agressiever profiel.',
    price: 399,
    category: 'exterieur',
    iconName: 'StretchHorizontal',
    installTimeHours: 2.5,
    deliveryDays: 4,
    overlayType: 'skirts',
    overlayColor: '#1a1a1a',
    allowColor: true,
  },
  {
    id: 'front-splitter',
    name: 'Front splitter',
    description: 'Aggressieve front splitter voor een racelook.',
    price: 279,
    category: 'exterieur',
    iconName: 'ChevronDown',
    installTimeHours: 1.5,
    deliveryDays: 3,
    overlayType: 'splitter',
    overlayColor: '#1a1a1a',
    allowColor: true,
  },
  {
    id: 'achterspoiler',
    name: 'Achterspoiler',
    description: 'Subtiele achterspoiler voor meer sportiviteit.',
    price: 329,
    category: 'exterieur',
    iconName: 'Wing',
    installTimeHours: 1.5,
    deliveryDays: 3,
    overlayType: 'spoiler',
    overlayColor: '#1a1a1a',
    allowColor: true,
  },
  {
    id: 'diffuser',
    name: 'Achterdiffuser',
    description: 'Sportieve diffuser met geïntegreerde uitlaatsierstukken.',
    price: 449,
    category: 'exterieur',
    iconName: 'SquareStack',
    installTimeHours: 2,
    deliveryDays: 4,
    overlayType: 'diffuser',
    overlayColor: '#1a1a1a',
    allowColor: true,
  },
  {
    id: 'uitlaatsierstukken',
    name: 'Uitlaatsierstukken',
    description: 'Chroom/zilveren uitlaateindstukken voor een premium detail.',
    price: 159,
    category: 'exterieur',
    iconName: 'Circle',
    installTimeHours: 1,
    deliveryDays: 2,
    overlayType: 'exhaust',
  },
  {
    id: 'kentekenplaathouder',
    name: 'Kentekenplaathouder',
    description: 'Carbon look kentekenplaathouder met merklogo.',
    price: 29,
    category: 'exterieur',
    iconName: 'RectangleHorizontal',
    installTimeHours: 0.25,
    deliveryDays: 1,
  },
  {
    id: 'verlichting-led',
    name: 'LED koplampen & taillights',
    description: 'Upgrade naar moderne LED-verlichting met lichtsignatuur.',
    price: 599,
    category: 'exterieur',
    iconName: 'Lightbulb',
    installTimeHours: 3,
    deliveryDays: 5,
    overlayType: 'lights',
    overlayColor: '#60a5fa',
  },
  {
    id: 'dakdragers',
    name: 'Dakdragers',
    description: 'Stijlvolle aluminium dakdragers voor extra bagage.',
    price: 189,
    category: 'exterieur',
    iconName: 'Luggage',
    installTimeHours: 1,
    deliveryDays: 3,
  },

  // ─── INTERIEUR ───
  {
    id: 'ambient-verlichting',
    name: 'Ambient verlichting',
    description: 'Meerkleurige LED-sfeerverlichting in het interieur.',
    price: 249,
    category: 'interieur',
    iconName: 'Sparkles',
    installTimeHours: 3,
    deliveryDays: 3,
  },
  {
    id: 'stoelhoezen',
    name: 'Stoelhoezen',
    description: 'Premium kunstleren stoelhoezen op maat gemaakt.',
    price: 179,
    category: 'interieur',
    iconName: 'Armchair',
    installTimeHours: 1.5,
    deliveryDays: 4,
  },
  {
    id: 'stuurhoes',
    name: 'Stuurhoes',
    description: 'Leren stuurhoes voor extra grip en luxe.',
    price: 59,
    category: 'interieur',
    iconName: 'Circle',
    installTimeHours: 0.5,
    deliveryDays: 2,
  },
  {
    id: 'vloermatten',
    name: 'Vloermatten op maat',
    description: 'Rubberen of luxe velours vloermatten op maat.',
    price: 89,
    category: 'interieur',
    iconName: 'Square',
    installTimeHours: 0.5,
    deliveryDays: 3,
  },
  {
    id: 'dashboard-accessoires',
    name: 'Dashboard accessoires',
    description: 'Carbon look panelen en sierlijsten voor het dashboard.',
    price: 119,
    category: 'interieur',
    iconName: 'LayoutDashboard',
    installTimeHours: 1,
    deliveryDays: 3,
  },
  {
    id: 'multimedia',
    name: 'Multimedia upgrade',
    description: 'Android Auto / Apple CarPlay systeem inclusief installatie.',
    price: 499,
    category: 'interieur',
    iconName: 'Monitor',
    installTimeHours: 4,
    deliveryDays: 5,
  },
  {
    id: 'telefoonhouder',
    name: 'Telefoonhouder',
    description: 'Universele draadloze oplader telefoonhouder.',
    price: 69,
    category: 'interieur',
    iconName: 'Smartphone',
    installTimeHours: 0.5,
    deliveryDays: 2,
  },

  // ─── ONDERHOUD ───
  {
    id: 'kleine-beurt',
    name: 'Kleine beurt',
    description: 'Olie + filter, vloeistofcontrole en basisinspectie.',
    price: 149,
    category: 'onderhoud',
    iconName: 'Wrench',
    installTimeHours: 1.5,
    deliveryDays: 1,
  },
  {
    id: 'grote-beurt',
    name: 'Grote beurt',
    description: 'Olie, filters, bougies en riemcontrole.',
    price: 299,
    category: 'onderhoud',
    iconName: 'Settings',
    installTimeHours: 3,
    deliveryDays: 1,
  },
  {
    id: 'airco-onderhoud',
    name: 'Airco onderhoud',
    description: 'Vullen, reinigen en lekcontrole van het aircosysteem.',
    price: 99,
    category: 'onderhoud',
    iconName: 'Snowflake',
    installTimeHours: 1.5,
    deliveryDays: 1,
  },
  {
    id: 'apk',
    name: 'APK keuring',
    description: 'APK keuring inclusief herkeuring binnen 30 dagen.',
    price: 49.99,
    category: 'onderhoud',
    iconName: 'ShieldCheck',
    installTimeHours: 1,
    deliveryDays: 1,
  },
  {
    id: 'remmen',
    name: 'Remmen service',
    description: 'Remblokken en schijven controleren en vervangen.',
    price: 249,
    category: 'onderhoud',
    iconName: 'Disc',
    installTimeHours: 2,
    deliveryDays: 2,
  },
  {
    id: 'accu',
    name: 'Accu vervangen',
    description: 'Vervangen van de accu inclusief uitlezen voertuig.',
    price: 189,
    category: 'onderhoud',
    iconName: 'Battery',
    installTimeHours: 0.5,
    deliveryDays: 1,
  },
  {
    id: 'distributieriem',
    name: 'Distributieriem',
    description: 'Vervangen van distributieriem en waterpomp.',
    price: 699,
    category: 'onderhoud',
    iconName: 'Cog',
    installTimeHours: 6,
    deliveryDays: 2,
  },
  {
    id: 'banden',
    name: 'Banden wissel',
    description: 'Seizoenswissel inclusief balanceer en controle.',
    price: 79,
    category: 'onderhoud',
    iconName: 'Circle',
    installTimeHours: 1,
    deliveryDays: 1,
  },

  // ─── TUNING ───
  {
    id: 'chiptuning',
    name: 'Chiptuning Stage 1',
    description: 'Optimalisatie motorsoftware voor meer vermogen en koppel.',
    price: 499,
    category: 'tuning',
    iconName: 'Cpu',
    installTimeHours: 2,
    deliveryDays: 1,
  },
  {
    id: 'uitlaat-sport',
    name: 'Sport uitlaatsysteem',
    description: 'Volledig sport uitlaatsysteem voor betere flow en sound.',
    price: 849,
    category: 'tuning',
    iconName: 'Volume2',
    installTimeHours: 3,
    deliveryDays: 5,
    overlayType: 'exhaust',
  },
  {
    id: 'inlaat-sport',
    name: 'Sport inlaatsysteem',
    description: 'Open luchtinlaat voor betere respons en geluid.',
    price: 349,
    category: 'tuning',
    iconName: 'Wind',
    installTimeHours: 1.5,
    deliveryDays: 3,
  },
  {
    id: 'vering-sport',
    name: 'Sport vering',
    description: 'Verlagingsveren voor strakkere wegligging.',
    price: 599,
    category: 'tuning',
    iconName: 'MoveVertical',
    installTimeHours: 3,
    deliveryDays: 4,
    overlayType: 'suspension',
  },
  {
    id: 'verlaging-schroefset',
    name: 'Schroefset verlaging',
    description: 'Instelbare schroefset voor maximale verlaging.',
    price: 1199,
    category: 'tuning',
    iconName: 'ArrowDown',
    installTimeHours: 4,
    deliveryDays: 5,
    overlayType: 'suspension',
    exclusive: true,
  },
  {
    id: 'sportfilters',
    name: 'Sportluchtfilter',
    description: 'High-flow luchtfilter voor betere ademhaling motor.',
    price: 129,
    category: 'tuning',
    iconName: 'Filter',
    installTimeHours: 0.5,
    deliveryDays: 2,
  },
];

export function getOptionsByCategory(categoryId: ConfigCategoryId): ConfigOption[] {
  return CONFIG_OPTIONS.filter((o) => o.category === categoryId);
}

export function getOptionById(id: string): ConfigOption | undefined {
  return CONFIG_OPTIONS.find((o) => o.id === id);
}
