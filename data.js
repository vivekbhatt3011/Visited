// ─── CATEGORIES ───────────────────────────────────────────────────────────────
const CATS = {
  monument:  { label: 'Monument',  emoji: '🏛️', color: '#FAB005' },
  park:      { label: 'Park',      emoji: '🌿', color: '#52b788' },
  waterfall: { label: 'Waterfall', emoji: '💧', color: '#339AF0' },
  fort:      { label: 'Fort',      emoji: '🏰', color: '#e8603c' },
  other:     { label: 'Other',     emoji: '📍', color: '#CC5DE8' },
};

// ─── EUROPE ───────────────────────────────────────────────────────────────────
const EUROPE_LANDMARKS = [
  { id: 'eiffel',           name: 'Eiffel Tower',              country: 'France',         emoji: '🗼', lat:  48.858,  lng:   2.295,  region: 'europe' },
  { id: 'louvre',           name: 'The Louvre',                country: 'France',         emoji: '🖼️', lat:  48.860,  lng:   2.337,  region: 'europe' },
  { id: 'mont-saint-michel',name: 'Mont Saint-Michel',         country: 'France',         emoji: '🏰', lat:  48.636,  lng:  -1.511,  region: 'europe' },
  { id: 'versailles',       name: 'Palace of Versailles',      country: 'France',         emoji: '🏛️', lat:  48.805,  lng:   2.120,  region: 'europe' },
  { id: 'notre-dame',       name: 'Notre-Dame Cathedral',      country: 'France',         emoji: '⛪', lat:  48.853,  lng:   2.350,  region: 'europe' },
  { id: 'colosseum',        name: 'Colosseum',                 country: 'Italy',          emoji: '🏛️', lat:  41.890,  lng:  12.492,  region: 'europe' },
  { id: 'vatican',          name: 'Vatican City / St Peters',  country: 'Italy',          emoji: '⛪', lat:  41.902,  lng:  12.453,  region: 'europe' },
  { id: 'leaning-tower',    name: 'Leaning Tower of Pisa',     country: 'Italy',          emoji: '🗼', lat:  43.723,  lng:  10.397,  region: 'europe' },
  { id: 'amalfi-coast',     name: 'Amalfi Coast',              country: 'Italy',          emoji: '🌊', lat:  40.634,  lng:  14.602,  region: 'europe' },
  { id: 'trevi-fountain',   name: 'Trevi Fountain',            country: 'Italy',          emoji: '⛲', lat:  41.901,  lng:  12.483,  region: 'europe' },
  { id: 'venice-canal',     name: 'Venice Grand Canal',        country: 'Italy',          emoji: '🚤', lat:  45.440,  lng:  12.331,  region: 'europe' },
  { id: 'bigben',           name: 'Big Ben',                   country: 'UK',             emoji: '🕐', lat:  51.501,  lng:  -0.124,  region: 'europe' },
  { id: 'stonehenge',       name: 'Stonehenge',                country: 'UK',             emoji: '🪨', lat:  51.180,  lng:  -1.826,  region: 'europe' },
  { id: 'edinburgh-castle', name: 'Edinburgh Castle',          country: 'UK',             emoji: '🏰', lat:  55.948,  lng:  -3.200,  region: 'europe' },
  { id: 'tower-london',     name: 'Tower of London',           country: 'UK',             emoji: '🏰', lat:  51.508,  lng:  -0.076,  region: 'europe' },
  { id: 'buckingham',       name: 'Buckingham Palace',         country: 'UK',             emoji: '👑', lat:  51.502,  lng:  -0.141,  region: 'europe' },
  { id: 'sagrada',          name: 'Sagrada Família',           country: 'Spain',          emoji: '⛪', lat:  41.404,  lng:   2.174,  region: 'europe' },
  { id: 'alhambra',         name: 'Alhambra',                  country: 'Spain',          emoji: '🏰', lat:  37.177,  lng:  -3.588,  region: 'europe' },
  { id: 'park-guell',       name: 'Park Güell',                country: 'Spain',          emoji: '🌿', lat:  41.414,  lng:   2.153,  region: 'europe' },
  { id: 'neuschwanstein',   name: 'Neuschwanstein Castle',     country: 'Germany',        emoji: '🏰', lat:  47.558,  lng:  10.750,  region: 'europe' },
  { id: 'brandenburg-gate', name: 'Brandenburg Gate',          country: 'Germany',        emoji: '🏛️', lat:  52.516,  lng:  13.378,  region: 'europe' },
  { id: 'cologne-cathedral',name: 'Cologne Cathedral',         country: 'Germany',        emoji: '⛪', lat:  50.941,  lng:   6.958,  region: 'europe' },
  { id: 'berlin-wall',      name: 'Berlin Wall Memorial',      country: 'Germany',        emoji: '🧱', lat:  52.535,  lng:  13.390,  region: 'europe' },
  { id: 'acropolis',        name: 'Acropolis of Athens',       country: 'Greece',         emoji: '🏺', lat:  37.971,  lng:  23.726,  region: 'europe' },
  { id: 'santorini',        name: 'Santorini',                 country: 'Greece',         emoji: '🌅', lat:  36.393,  lng:  25.461,  region: 'europe' },
  { id: 'hagia',            name: 'Hagia Sophia',              country: 'Turkey',         emoji: '🕌', lat:  41.009,  lng:  28.980,  region: 'europe' },
  { id: 'cappadocia',       name: 'Cappadocia',                country: 'Turkey',         emoji: '🎈', lat:  38.643,  lng:  34.830,  region: 'europe' },
  { id: 'ephesus',          name: 'Ephesus Ruins',             country: 'Turkey',         emoji: '🏛️', lat:  37.939,  lng:  27.341,  region: 'europe' },
  { id: 'aurora',           name: 'Northern Lights',           country: 'Iceland',        emoji: '🌌', lat:  64.900,  lng: -19.000,  region: 'europe' },
  { id: 'geysir',           name: 'Geysir Hot Springs',        country: 'Iceland',        emoji: '♨️', lat:  64.313,  lng: -20.302,  region: 'europe' },
  { id: 'amsterdam-canals', name: 'Amsterdam Canals',          country: 'Netherlands',    emoji: '🚲', lat:  52.366,  lng:   4.904,  region: 'europe' },
  { id: 'anne-frank-house', name: 'Anne Frank House',          country: 'Netherlands',    emoji: '🏠', lat:  52.375,  lng:   4.884,  region: 'europe' },
  { id: 'atomium',          name: 'Atomium',                   country: 'Belgium',        emoji: '⚛️', lat:  50.895,  lng:   4.341,  region: 'europe' },
  { id: 'manneken-pis',     name: 'Grand Place Brussels',      country: 'Belgium',        emoji: '🏛️', lat:  50.847,  lng:   4.352,  region: 'europe' },
  { id: 'charles-bridge',   name: 'Charles Bridge',            country: 'Czech Republic', emoji: '🌉', lat:  50.086,  lng:  14.411,  region: 'europe' },
  { id: 'prague-castle',    name: 'Prague Castle',             country: 'Czech Republic', emoji: '🏰', lat:  50.091,  lng:  14.400,  region: 'europe' },
  { id: 'schoenbrunn',      name: 'Schönbrunn Palace',         country: 'Austria',        emoji: '🏛️', lat:  48.186,  lng:  16.313,  region: 'europe' },
  { id: 'hallstatt',        name: 'Hallstatt Village',         country: 'Austria',        emoji: '🏘️', lat:  47.562,  lng:  13.649,  region: 'europe' },
  { id: 'swiss-alps',       name: 'Matterhorn',                country: 'Switzerland',    emoji: '🏔️', lat:  45.977,  lng:   7.659,  region: 'europe' },
  { id: 'jungfraujoch',     name: 'Jungfraujoch',              country: 'Switzerland',    emoji: '🗻', lat:  46.548,  lng:   7.985,  region: 'europe' },
  { id: 'colossus',         name: 'Colosseum Rome',            country: 'Italy',          emoji: '🏟️', lat:  41.890,  lng:  12.492,  region: 'europe' },
  { id: 'buda-castle',      name: 'Buda Castle',               country: 'Hungary',        emoji: '🏰', lat:  47.496,  lng:  19.040,  region: 'europe' },
  { id: 'parliament-budapest',name:'Hungarian Parliament',     country: 'Hungary',        emoji: '🏛️', lat:  47.507,  lng:  19.046,  region: 'europe' },
  { id: 'wawel-castle',     name: 'Wawel Castle',              country: 'Poland',         emoji: '🏰', lat:  50.054,  lng:  19.935,  region: 'europe' },
  { id: 'auschwitz',        name: 'Auschwitz Memorial',        country: 'Poland',         emoji: '🕯️', lat:  50.027,  lng:  19.202,  region: 'europe' },
  { id: 'kremlin',          name: 'Moscow Kremlin',            country: 'Russia',         emoji: '🏰', lat:  55.752,  lng:  37.617,  region: 'europe' },
  { id: 'st-basils',        name: "St. Basil's Cathedral",     country: 'Russia',         emoji: '🎡', lat:  55.753,  lng:  37.623,  region: 'europe' },
  { id: 'hermitage',        name: 'The Hermitage Museum',      country: 'Russia',         emoji: '🖼️', lat:  59.940,  lng:  30.315,  region: 'europe' },
  { id: 'lake-baikal',      name: 'Lake Baikal',               country: 'Russia',         emoji: '💧', lat:  53.500,  lng: 107.996,  region: 'europe' },
  { id: 'colosseum-rome',   name: 'Roman Forum',               country: 'Italy',          emoji: '🏛️', lat:  41.892,  lng:  12.485,  region: 'europe' },
  { id: 'lisbon-belem',     name: 'Belém Tower',               country: 'Portugal',       emoji: '🗼', lat:  38.692,  lng:  -9.216,  region: 'europe' },
  { id: 'pena-palace',      name: 'Pena Palace Sintra',        country: 'Portugal',       emoji: '🏰', lat:  38.788,  lng:  -9.390,  region: 'europe' },
  { id: 'dubrovnik-walls',  name: 'Dubrovnik Old Town',        country: 'Croatia',        emoji: '🏰', lat:  42.641,  lng:  18.110,  region: 'europe' },
  { id: 'plitvice',         name: 'Plitvice Lakes',            country: 'Croatia',        emoji: '🌊', lat:  44.865,  lng:  15.582,  region: 'europe' },
  { id: 'sigiriya',         name: 'Sigiriya Rock Fortress',    country: 'Sri Lanka',      emoji: '🪨', lat:   7.957,  lng:  80.759,  region: 'europe' },
  { id: 'fjords-norway',    name: 'Norwegian Fjords',          country: 'Norway',         emoji: '⛰️', lat:  60.472,  lng:   6.862,  region: 'europe' },
  { id: 'northern-lights-norway', name: 'Tromsø (Aurora)',     country: 'Norway',         emoji: '🌌', lat:  69.649,  lng:  18.956,  region: 'europe' },
];

// ─── AMERICAS ─────────────────────────────────────────────────────────────────
const AMERICAS_LANDMARKS = [
  // North America
  { id: 'liberty',          name: 'Statue of Liberty',         country: 'USA – New York',        emoji: '🗽', lat:  40.689, lng: -74.044,  region: 'americas' },
  { id: 'grand-canyon',     name: 'Grand Canyon',              country: 'USA – Arizona',         emoji: '🏜️', lat:  36.107, lng:-112.113,  region: 'americas' },
  { id: 'yellowstone',      name: 'Yellowstone / Old Faithful',country: 'USA – Wyoming',         emoji: '♨️', lat:  44.460, lng:-110.828,  region: 'americas' },
  { id: 'golden-gate',      name: 'Golden Gate Bridge',        country: 'USA – San Francisco',   emoji: '🌉', lat:  37.819, lng:-122.478,  region: 'americas' },
  { id: 'niagara',          name: 'Niagara Falls',             country: 'USA / Canada',          emoji: '💧', lat:  43.083, lng: -79.071,  region: 'americas' },
  { id: 'rushmore',         name: 'Mount Rushmore',            country: 'USA – South Dakota',    emoji: '🏔️', lat:  43.879, lng:-103.459,  region: 'americas' },
  { id: 'capitol-hill',     name: 'US Capitol Building',       country: 'USA – Washington DC',   emoji: '🏛️', lat:  38.890, lng: -77.009,  region: 'americas' },
  { id: 'times-square',     name: 'Times Square',              country: 'USA – New York',        emoji: '🌆', lat:  40.758, lng: -73.985,  region: 'americas' },
  { id: 'alcatraz',         name: 'Alcatraz Island',           country: 'USA – San Francisco',   emoji: '🏝️', lat:  37.827, lng:-122.423,  region: 'americas' },
  { id: 'hawaii-volcanoes', name: 'Hawaii Volcanoes NP',       country: 'USA – Hawaii',          emoji: '🌋', lat:  19.432, lng:-155.257,  region: 'americas' },
  { id: 'banff',            name: 'Banff National Park',       country: 'Canada – Alberta',      emoji: '🏔️', lat:  51.495, lng:-115.928,  region: 'americas' },
  { id: 'cn-tower',         name: 'CN Tower',                  country: 'Canada – Toronto',      emoji: '🗼', lat:  43.642, lng: -79.387,  region: 'americas' },
  { id: 'chichen',          name: 'Chichén Itzá',              country: 'Mexico',                emoji: '🏛️', lat:  20.683, lng: -88.568,  region: 'americas' },
  { id: 'teotihuacan',      name: 'Teotihuacan Pyramids',      country: 'Mexico',                emoji: '🔺', lat:  19.692, lng: -98.844,  region: 'americas' },
  { id: 'palenque',         name: 'Palenque Ruins',            country: 'Mexico',                emoji: '🏛️', lat:  17.483, lng: -92.046,  region: 'americas' },
  // Caribbean & Central America
  { id: 'havana-old',       name: 'Old Havana',                country: 'Cuba',                  emoji: '🎺', lat:  23.137, lng: -82.358,  region: 'americas' },
  { id: 'tikal',            name: 'Tikal Mayan Ruins',         country: 'Guatemala',             emoji: '🏛️', lat:  17.222, lng: -89.624,  region: 'americas' },
  // South America
  { id: 'christ',           name: 'Christ the Redeemer',       country: 'Brazil – Rio',          emoji: '✝️', lat: -22.952, lng: -43.210,  region: 'americas' },
  { id: 'iguazu',           name: 'Iguazú Falls',              country: 'Brazil / Argentina',    emoji: '🌊', lat: -25.696, lng: -54.437,  region: 'americas' },
  { id: 'amazon',           name: 'Amazon Rainforest',         country: 'Brazil',                emoji: '🌳', lat:  -3.400, lng: -60.000,  region: 'americas' },
  { id: 'copacabana',       name: 'Copacabana Beach',          country: 'Brazil – Rio',          emoji: '🏖️', lat: -22.971, lng: -43.182,  region: 'americas' },
  { id: 'machu',            name: 'Machu Picchu',              country: 'Peru',                  emoji: '⛰️', lat: -13.163, lng: -72.545,  region: 'americas' },
  { id: 'lake-titicaca',    name: 'Lake Titicaca',             country: 'Peru / Bolivia',        emoji: '💧', lat: -15.840, lng: -69.330,  region: 'americas' },
  { id: 'galapagos',        name: 'Galápagos Islands',         country: 'Ecuador',               emoji: '🦎', lat:  -0.966, lng: -91.000,  region: 'americas' },
  { id: 'easter-island',    name: 'Easter Island (Moai)',      country: 'Chile',                 emoji: '🗿', lat: -27.112, lng:-109.349,  region: 'americas' },
  { id: 'patagonia',        name: 'Torres del Paine',          country: 'Chile',                 emoji: '🏔️', lat: -50.942, lng: -72.999,  region: 'americas' },
  { id: 'angel-falls',      name: 'Angel Falls',               country: 'Venezuela',             emoji: '🌊', lat:   5.968, lng: -62.535,  region: 'americas' },
  { id: 'cartagena',        name: 'Cartagena Walled City',     country: 'Colombia',              emoji: '🏰', lat:  10.422, lng: -75.550,  region: 'americas' },
  { id: 'salt-flats',       name: 'Salar de Uyuni',            country: 'Bolivia',               emoji: '🧂', lat: -20.136, lng: -67.489,  region: 'americas' },
  { id: 'perito-moreno',    name: 'Perito Moreno Glacier',     country: 'Argentina',             emoji: '🧊', lat: -50.493, lng: -73.046,  region: 'americas' },
  { id: 'buenos-aires-obelisk', name: 'Buenos Aires Obelisk',  country: 'Argentina',             emoji: '🗼', lat: -34.603, lng: -58.382,  region: 'americas' },
];

// ─── AFRICA ───────────────────────────────────────────────────────────────────
const AFRICA_LANDMARKS = [
  { id: 'pyramids',         name: 'Pyramids of Giza',          country: 'Egypt',                 emoji: '🔺', lat:  29.979, lng:  31.134,  region: 'africa' },
  { id: 'sphinx',           name: 'Great Sphinx of Giza',      country: 'Egypt',                 emoji: '🦁', lat:  29.975, lng:  31.137,  region: 'africa' },
  { id: 'karnak-temple',    name: 'Karnak Temple',             country: 'Egypt – Luxor',         emoji: '🏛️', lat:  25.719, lng:  32.657,  region: 'africa' },
  { id: 'abu-simbel',       name: 'Abu Simbel Temples',        country: 'Egypt',                 emoji: '🏛️', lat:  22.337, lng:  31.625,  region: 'africa' },
  { id: 'victoria',         name: 'Victoria Falls',            country: 'Zimbabwe / Zambia',     emoji: '🌊', lat: -17.924, lng:  25.856,  region: 'africa' },
  { id: 'kilimanjaro',      name: 'Mount Kilimanjaro',         country: 'Tanzania',              emoji: '🏔️', lat:  -3.067, lng:  37.356,  region: 'africa' },
  { id: 'serengeti',        name: 'Serengeti National Park',   country: 'Tanzania',              emoji: '🦁', lat:  -2.333, lng:  34.833,  region: 'africa' },
  { id: 'ngorongoro',       name: 'Ngorongoro Crater',         country: 'Tanzania',              emoji: '🦏', lat:  -3.175, lng:  35.587,  region: 'africa' },
  { id: 'cape-hope',        name: 'Cape of Good Hope',         country: 'South Africa',          emoji: '⛵', lat: -34.357, lng:  18.474,  region: 'africa' },
  { id: 'table-mountain',   name: 'Table Mountain',            country: 'South Africa',          emoji: '🗻', lat: -33.963, lng:  18.405,  region: 'africa' },
  { id: 'kruger',           name: 'Kruger National Park',      country: 'South Africa',          emoji: '🐘', lat: -23.989, lng:  31.554,  region: 'africa' },
  { id: 'robben-island',    name: 'Robben Island',             country: 'South Africa',          emoji: '🏝️', lat: -33.804, lng:  18.366,  region: 'africa' },
  { id: 'sahara',           name: 'Sahara Desert',             country: 'Morocco / Algeria',     emoji: '🏜️', lat:  23.000, lng:   5.000,  region: 'africa' },
  { id: 'marrakech',        name: 'Jemaa el-Fna Square',       country: 'Morocco',               emoji: '🕌', lat:  31.626, lng:  -7.989,  region: 'africa' },
  { id: 'ait-benhaddou',    name: 'Aït Benhaddou Kasbah',      country: 'Morocco',               emoji: '🏯', lat:  31.047, lng:  -7.131,  region: 'africa' },
  { id: 'lalibela',         name: 'Lalibela Rock Churches',    country: 'Ethiopia',              emoji: '⛪', lat:  12.032, lng:  39.044,  region: 'africa' },
  { id: 'aksum',            name: 'Aksum Obelisks',            country: 'Ethiopia',              emoji: '🗿', lat:  14.130, lng:  38.717,  region: 'africa' },
  { id: 'pyramids-meroe',   name: 'Pyramids of Meroë',         country: 'Sudan',                 emoji: '🔺', lat:  16.934, lng:  33.749,  region: 'africa' },
  { id: 'zanzibar',         name: 'Zanzibar Stone Town',       country: 'Tanzania',              emoji: '🌴', lat:  -6.163, lng:  39.188,  region: 'africa' },
  { id: 'bwindi',           name: 'Bwindi (Mountain Gorilla)', country: 'Uganda',                emoji: '🦍', lat:  -1.050, lng:  29.700,  region: 'africa' },
  { id: 'dakar-africa',     name: 'African Renaissance Monument', country: 'Senegal',            emoji: '🗿', lat:  14.729, lng: -17.491,  region: 'africa' },
  { id: 'djenne',           name: 'Great Mosque of Djenné',    country: 'Mali',                  emoji: '🕌', lat:  13.906, lng:  -4.555,  region: 'africa' },
  { id: 'lake-nakuru',      name: 'Lake Nakuru (Flamingos)',   country: 'Kenya',                 emoji: '🦩', lat:  -0.360, lng:  36.082,  region: 'africa' },
  { id: 'masai-mara',       name: 'Masai Mara',                country: 'Kenya',                 emoji: '🦓', lat:  -1.509, lng:  35.144,  region: 'africa' },
];

// ─── MIDDLE EAST ──────────────────────────────────────────────────────────────
const MIDDLE_EAST_LANDMARKS = [
  { id: 'petra',            name: 'Petra (Rose City)',         country: 'Jordan',                emoji: '🏜️', lat:  30.328, lng:  35.441,  region: 'middle-east' },
  { id: 'wadi-rum',         name: 'Wadi Rum Desert',           country: 'Jordan',                emoji: '🏜️', lat:  29.576, lng:  35.418,  region: 'middle-east' },
  { id: 'burj',             name: 'Burj Khalifa',              country: 'UAE – Dubai',           emoji: '🏙️', lat:  25.197, lng:  55.274,  region: 'middle-east' },
  { id: 'dubai-frame',      name: 'Dubai Frame',               country: 'UAE – Dubai',           emoji: '🖼️', lat:  25.235, lng:  55.300,  region: 'middle-east' },
  { id: 'palm-jumeirah',    name: 'Palm Jumeirah',             country: 'UAE – Dubai',           emoji: '🌴', lat:  25.112, lng:  55.139,  region: 'middle-east' },
  { id: 'sheikh-zayed',     name: 'Sheikh Zayed Grand Mosque', country: 'UAE – Abu Dhabi',       emoji: '🕌', lat:  24.413, lng:  54.475,  region: 'middle-east' },
  { id: 'western-wall',     name: 'Western Wall',              country: 'Israel – Jerusalem',    emoji: '✡️', lat:  31.778, lng:  35.235,  region: 'middle-east' },
  { id: 'dome-rock',        name: 'Dome of the Rock',          country: 'Israel – Jerusalem',    emoji: '🕌', lat:  31.778, lng:  35.236,  region: 'middle-east' },
  { id: 'dead-sea',         name: 'Dead Sea',                  country: 'Israel / Jordan',       emoji: '💧', lat:  31.559, lng:  35.473,  region: 'middle-east' },
  { id: 'masada',           name: 'Masada Fortress',           country: 'Israel',                emoji: '🏔️', lat:  31.316, lng:  35.353,  region: 'middle-east' },
  { id: 'kaaba',            name: 'Masjid al-Haram (Kaaba)',   country: 'Saudi Arabia – Mecca',  emoji: '🕋', lat:  21.423, lng:  39.826,  region: 'middle-east' },
  { id: 'al-ula',           name: 'AlUla / Hegra',             country: 'Saudi Arabia',          emoji: '🏜️', lat:  26.617, lng:  37.917,  region: 'middle-east' },
  { id: 'persepolis',       name: 'Persepolis',                country: 'Iran',                  emoji: '🏛️', lat:  29.936, lng:  52.891,  region: 'middle-east' },
  { id: 'isfahan',          name: 'Naghsh-e Jahan Square',     country: 'Iran – Isfahan',        emoji: '🕌', lat:  32.657, lng:  51.677,  region: 'middle-east' },
  { id: 'pamukkale',        name: 'Pamukkale Thermal Pools',   country: 'Turkey',                emoji: '🏊', lat:  37.921, lng:  29.119,  region: 'middle-east' },
  { id: 'byblos',           name: 'Byblos Ancient City',       country: 'Lebanon',               emoji: '🏛️', lat:  34.120, lng:  35.649,  region: 'middle-east' },
  { id: 'jerash',           name: 'Jerash Roman Ruins',        country: 'Jordan',                emoji: '🏛️', lat:  32.273, lng:  35.892,  region: 'middle-east' },
];

// ─── ASIA (excluding India) ───────────────────────────────────────────────────
const ASIA_LANDMARKS = [
  // China
  { id: 'great-wall',       name: 'Great Wall of China',       country: 'China',                 emoji: '🏯', lat:  40.432, lng: 116.570,  region: 'asia' },
  { id: 'forbidden',        name: 'Forbidden City',            country: 'China – Beijing',       emoji: '🏯', lat:  39.916, lng: 116.391,  region: 'asia' },
  { id: 'terracotta',       name: 'Terracotta Army',           country: "China – Xi'an",         emoji: '🪆', lat:  34.385, lng: 109.274,  region: 'asia' },
  { id: 'li-river',         name: 'Li River / Guilin',         country: 'China',                 emoji: '🏞️', lat:  24.814, lng: 110.490,  region: 'asia' },
  { id: 'potala-palace',    name: 'Potala Palace',             country: 'China – Tibet',         emoji: '🏛️', lat:  29.657, lng:  91.117,  region: 'asia' },
  { id: 'yellow-mountains', name: 'Huangshan Mountains',       country: 'China',                 emoji: '🌁', lat:  30.130, lng: 118.155,  region: 'asia' },
  { id: 'zhangjiajie',      name: 'Zhangjiajie Pillars',       country: 'China',                 emoji: '⛰️', lat:  29.325, lng: 110.435,  region: 'asia' },
  // Japan
  { id: 'fuji',             name: 'Mount Fuji',                country: 'Japan',                 emoji: '🗻', lat:  35.361, lng: 138.731,  region: 'asia' },
  { id: 'fushimi-inari',    name: 'Fushimi Inari Shrine',      country: 'Japan – Kyoto',         emoji: '⛩️', lat:  34.967, lng: 135.772,  region: 'asia' },
  { id: 'tokyo-tower',      name: 'Tokyo Tower',               country: 'Japan',                 emoji: '🗼', lat:  35.659, lng: 139.745,  region: 'asia' },
  { id: 'hiroshima-dome',   name: 'Hiroshima Peace Memorial',  country: 'Japan',                 emoji: '☮️', lat:  34.395, lng: 132.453,  region: 'asia' },
  { id: 'miyajima-gate',    name: 'Miyajima Torii Gate',       country: 'Japan',                 emoji: '⛩️', lat:  34.296, lng: 132.320,  region: 'asia' },
  { id: 'himeji-castle',    name: 'Himeji Castle',             country: 'Japan',                 emoji: '🏯', lat:  34.839, lng: 134.694,  region: 'asia' },
  { id: 'arashiyama',       name: 'Arashiyama Bamboo Grove',   country: 'Japan – Kyoto',         emoji: '🎋', lat:  35.017, lng: 135.672,  region: 'asia' },
  // Korea
  { id: 'gyeongbokgung',    name: 'Gyeongbokgung Palace',      country: 'South Korea – Seoul',   emoji: '🏯', lat:  37.580, lng: 126.977,  region: 'asia' },
  { id: 'jeju-island',      name: 'Jeju Island Hallasan',      country: 'South Korea',           emoji: '🌋', lat:  33.362, lng: 126.533,  region: 'asia' },
  // Southeast Asia
  { id: 'angkor',           name: 'Angkor Wat',                country: 'Cambodia',              emoji: '🛕', lat:  13.412, lng: 103.866,  region: 'asia' },
  { id: 'halong-bay',       name: 'Hạ Long Bay',               country: 'Vietnam',               emoji: '⛵', lat:  20.910, lng: 107.184,  region: 'asia' },
  { id: 'hoi-an',           name: 'Hội An Ancient Town',       country: 'Vietnam',               emoji: '🏮', lat:  15.879, lng: 108.335,  region: 'asia' },
  { id: 'bagan-temples',    name: 'Bagan Temples',             country: 'Myanmar',               emoji: '🛕', lat:  21.172, lng:  94.857,  region: 'asia' },
  { id: 'shwedagon-pagoda', name: 'Shwedagon Pagoda',          country: 'Myanmar',               emoji: '🛕', lat:  16.799, lng:  96.149,  region: 'asia' },
  { id: 'temples-bangkok',  name: 'Wat Phra Kaew',             country: 'Thailand – Bangkok',    emoji: '🛕', lat:  13.751, lng: 100.492,  region: 'asia' },
  { id: 'chiang-mai',       name: 'Doi Suthep Temple',         country: 'Thailand – Chiang Mai', emoji: '🛕', lat:  18.804, lng:  98.921,  region: 'asia' },
  { id: 'bali-pura-besakih',name: 'Pura Besakih Temple',       country: 'Indonesia – Bali',      emoji: '🛕', lat:  -8.374, lng: 115.452,  region: 'asia' },
  { id: 'borobudur',        name: 'Borobudur Temple',          country: 'Indonesia',             emoji: '🛕', lat:  -7.608, lng: 110.204,  region: 'asia' },
  { id: 'komodo',           name: 'Komodo Island',             country: 'Indonesia',             emoji: '🦎', lat:  -8.550, lng: 119.490,  region: 'asia' },
  { id: 'petronas',         name: 'Petronas Twin Towers',      country: 'Malaysia – KL',         emoji: '🏙️', lat:   3.157, lng: 101.712,  region: 'asia' },
  { id: 'singapore-marina', name: 'Marina Bay Sands',          country: 'Singapore',             emoji: '🏙️', lat:   1.283, lng: 103.861,  region: 'asia' },
  { id: 'gardens-bay',      name: 'Gardens by the Bay',        country: 'Singapore',             emoji: '🌿', lat:   1.281, lng: 103.865,  region: 'asia' },
  { id: 'temples-pagan',    name: 'Sigiriya Rock Fortress',    country: 'Sri Lanka',             emoji: '🪨', lat:   7.957, lng:  80.759,  region: 'asia' },
  { id: 'forbidden-city-china', name: 'Summer Palace Beijing', country: 'China – Beijing',      emoji: '🏛️', lat:  40.002, lng: 116.276,  region: 'asia' },
  // Central Asia
  { id: 'samarkand-registan', name: 'Registan Square',         country: 'Uzbekistan – Samarkand',emoji: '🕌', lat:  39.655, lng:  66.976,  region: 'asia' },
  { id: 'everest',           name: 'Mount Everest',            country: 'Nepal / Tibet',         emoji: '🏔️', lat:  27.988, lng:  86.925,  region: 'asia' },
  { id: 'boudhanath',        name: 'Boudhanath Stupa',         country: 'Nepal – Kathmandu',     emoji: '☸️', lat:  27.722, lng:  85.362,  region: 'asia' },
  { id: 'pashupatinath',     name: 'Pashupatinath Temple',     country: 'Nepal – Kathmandu',     emoji: '🛕', lat:  27.711, lng:  85.348,  region: 'asia' },
  { id: 'bhutan-tigers-nest',name: "Tiger's Nest Monastery",   country: 'Bhutan',                emoji: '🏔️', lat:  27.488, lng:  89.363,  region: 'asia' },
];

// ─── OCEANIA & PACIFIC ────────────────────────────────────────────────────────
const OCEANIA_LANDMARKS = [
  { id: 'sydney',            name: 'Sydney Opera House',       country: 'Australia',             emoji: '🎭', lat: -33.857, lng: 151.215,  region: 'oceania' },
  { id: 'sydney-bridge',     name: 'Sydney Harbour Bridge',    country: 'Australia',             emoji: '🌉', lat: -33.852, lng: 151.211,  region: 'oceania' },
  { id: 'uluru',             name: 'Uluru (Ayers Rock)',        country: 'Australia – NT',        emoji: '🪨', lat: -25.344, lng: 131.036,  region: 'oceania' },
  { id: 'great-barrier-reef',name: 'Great Barrier Reef',       country: 'Australia – QLD',       emoji: '🐠', lat: -18.286, lng: 147.700,  region: 'oceania' },
  { id: 'blue-mountains',    name: 'Blue Mountains',           country: 'Australia',             emoji: '⛰️', lat: -33.620, lng: 150.290,  region: 'oceania' },
  { id: 'milford-sound',     name: 'Milford Sound',            country: 'New Zealand',           emoji: '🏔️', lat: -44.671, lng: 167.897,  region: 'oceania' },
  { id: 'hobbiton',          name: 'Hobbiton Movie Set',       country: 'New Zealand',           emoji: '🧙', lat: -37.858, lng: 175.682,  region: 'oceania' },
  { id: 'rotorua-geothermal',name: 'Rotorua Geothermal',       country: 'New Zealand',           emoji: '♨️', lat: -38.140, lng: 176.250,  region: 'oceania' },
  { id: 'bora-bora',         name: 'Bora Bora Lagoon',         country: 'French Polynesia',      emoji: '🌴', lat: -16.500, lng:-151.741,  region: 'oceania' },
  { id: 'moai',              name: 'Easter Island (Moai)',     country: 'Chile',                 emoji: '🗿', lat: -27.112, lng:-109.349,  region: 'oceania' },
  { id: 'fiordland',         name: 'Fiordland NP',             country: 'New Zealand',           emoji: '⛰️', lat: -45.415, lng: 167.719,  region: 'oceania' },
  { id: 'whitsundays',       name: 'Whitsunday Islands',       country: 'Australia',             emoji: '🏖️', lat: -20.267, lng: 148.996,  region: 'oceania' },
];

// ─── INDIA LANDMARKS ──────────────────────────────────────────────────────────
const INDIA_LANDMARKS = [

  // ══════════════════════════════════════════════════════════════════════════
  // DELHI & NCR
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'tajmahal',           name: 'Taj Mahal',                    country: 'India – Agra, UP',              emoji: '🕌', lat:  27.175, lng:  78.042, region: 'india' },
  { id: 'red-fort',           name: 'Red Fort',                     country: 'India – Delhi',                 emoji: '🏰', lat:  28.656, lng:  77.241, region: 'india' },
  { id: 'qutub',              name: 'Qutub Minar',                  country: 'India – Delhi',                 emoji: '🗼', lat:  28.524, lng:  77.185, region: 'india' },
  { id: 'india-gate',         name: 'India Gate',                   country: 'India – Delhi',                 emoji: '🏛️', lat:  28.613, lng:  77.230, region: 'india' },
  { id: 'lotus',              name: 'Lotus Temple',                 country: 'India – Delhi',                 emoji: '🌸', lat:  28.553, lng:  77.259, region: 'india' },
  { id: 'humayun',            name: "Humayun's Tomb",               country: 'India – Delhi',                 emoji: '⛩️', lat:  28.593, lng:  77.251, region: 'india' },
  { id: 'akshardhm',          name: 'Akshardham Temple',            country: 'India – Delhi',                 emoji: '🛕', lat:  28.613, lng:  77.277, region: 'india' },
  { id: 'jama-masjid-delhi',  name: 'Jama Masjid',                  country: 'India – Delhi',                 emoji: '🕌', lat:  28.651, lng:  77.234, region: 'india' },
  { id: 'chandni-chowk',      name: 'Chandni Chowk',                country: 'India – Delhi',                 emoji: '🛍️', lat:  28.657, lng:  77.230, region: 'india' },
  { id: 'lodhi-garden',       name: 'Lodhi Garden',                 country: 'India – Delhi',                 emoji: '🌿', lat:  28.592, lng:  77.220, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // UTTAR PRADESH
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'fatehpur',           name: 'Fatehpur Sikri',               country: 'India – Agra, UP',              emoji: '🏯', lat:  27.094, lng:  77.661, region: 'india' },
  { id: 'agra-fort',          name: 'Agra Fort',                    country: 'India – Agra, UP',              emoji: '🏰', lat:  27.180, lng:  78.021, region: 'india' },
  { id: 'varanasi',           name: 'Varanasi Ghats',               country: 'India – Varanasi, UP',          emoji: '🕯️', lat:  25.305, lng:  83.014, region: 'india' },
  { id: 'sarnath',            name: 'Sarnath Buddhist Site',        country: 'India – Varanasi, UP',          emoji: '☸️', lat:  25.381, lng:  83.024, region: 'india' },
  { id: 'allahabad-fort',     name: 'Allahabad Fort (Prayagraj)',   country: 'India – Prayagraj, UP',         emoji: '🏰', lat:  25.422, lng:  81.884, region: 'india' },
  { id: 'triveni-sangam',     name: 'Triveni Sangam',               country: 'India – Prayagraj, UP',         emoji: '🕉️', lat:  25.425, lng:  81.885, region: 'india' },
  { id: 'lucknow-bara-imambara', name: 'Bara Imambara',             country: 'India – Lucknow, UP',           emoji: '🕌', lat:  26.874, lng:  80.912, region: 'india' },
  { id: 'mathura',            name: 'Krishna Janmabhoomi Mathura',  country: 'India – Mathura, UP',           emoji: '🛕', lat:  27.502, lng:  77.673, region: 'india' },
  { id: 'vrindavan',          name: 'Vrindavan (Banke Bihari)',     country: 'India – Mathura, UP',           emoji: '🛕', lat:  27.582, lng:  77.700, region: 'india' },
  { id: 'dudhwa-np',          name: 'Dudhwa National Park',         country: 'India – Lakhimpur, UP',         emoji: '🐯', lat:  28.632, lng:  80.752, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // RAJASTHAN
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'hawa-mahal',         name: 'Hawa Mahal',                   country: 'India – Jaipur, Rajasthan',     emoji: '🏯', lat:  26.924, lng:  75.827, region: 'india' },
  { id: 'amber-fort',         name: 'Amber Fort',                   country: 'India – Jaipur, Rajasthan',     emoji: '🏰', lat:  26.985, lng:  75.851, region: 'india' },
  { id: 'city-palace-jaipur', name: 'City Palace Jaipur',           country: 'India – Jaipur, Rajasthan',     emoji: '🏛️', lat:  26.926, lng:  75.824, region: 'india' },
  { id: 'jantar-mantar',      name: 'Jantar Mantar',                country: 'India – Jaipur, Rajasthan',     emoji: '🔭', lat:  26.925, lng:  75.824, region: 'india' },
  { id: 'city-palace-udaipur',name: 'City Palace Udaipur',          country: 'India – Udaipur, Rajasthan',    emoji: '🏛️', lat:  24.577, lng:  73.684, region: 'india' },
  { id: 'lake-pichola',       name: 'Lake Pichola',                 country: 'India – Udaipur, Rajasthan',    emoji: '💧', lat:  24.573, lng:  73.680, region: 'india' },
  { id: 'mehrangarh',         name: 'Mehrangarh Fort',              country: 'India – Jodhpur, Rajasthan',    emoji: '🏰', lat:  26.298, lng:  73.017, region: 'india' },
  { id: 'jaisalmer-fort',     name: 'Jaisalmer Fort',               country: 'India – Jaisalmer, Rajasthan',  emoji: '🏯', lat:  26.913, lng:  70.914, region: 'india' },
  { id: 'ranthambore',        name: 'Ranthambore Fort & Tiger Reserve', country:'India – Sawai Madhopur, Rajasthan', emoji:'🐯', lat: 25.990, lng: 76.510, region: 'india' },
  { id: 'chittorgarh-fort',   name: 'Chittorgarh Fort',             country: 'India – Chittorgarh, Rajasthan',emoji: '🏰', lat:  24.889, lng:  74.645, region: 'india' },
  { id: 'pushkar-lake',       name: 'Pushkar Lake & Brahma Temple', country: 'India – Pushkar, Rajasthan',    emoji: '🛕', lat:  26.490, lng:  74.552, region: 'india' },
  { id: 'thar-desert',        name: 'Thar Desert (Sam Sand Dunes)', country: 'India – Jaisalmer, Rajasthan',  emoji: '🏜️', lat:  26.874, lng:  70.554, region: 'india' },
  { id: 'kumbhalgarh',        name: 'Kumbhalgarh Fort',             country: 'India – Rajsamand, Rajasthan',  emoji: '🏰', lat:  25.148, lng:  73.587, region: 'india' },
  { id: 'dilwara-temples',    name: 'Dilwara Jain Temples',         country: 'India – Mount Abu, Rajasthan',  emoji: '🛕', lat:  24.596, lng:  72.712, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // MADHYA PRADESH
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'khajuraho',          name: 'Khajuraho Temples',            country: 'India – Khajuraho, MP',         emoji: '🏛️', lat:  24.851, lng:  79.921, region: 'india' },
  { id: 'sanchi',             name: 'Sanchi Stupa',                 country: 'India – Sanchi, MP',            emoji: '☸️', lat:  23.480, lng:  77.740, region: 'india' },
  { id: 'bandhavgarh',        name: 'Bandhavgarh National Park',    country: 'India – Umaria, MP',            emoji: '🐯', lat:  23.717, lng:  81.030, region: 'india' },
  { id: 'kanha-np',           name: 'Kanha National Park',          country: 'India – Mandla, MP',            emoji: '🐯', lat:  22.340, lng:  80.610, region: 'india' },
  { id: 'pachmarhi',          name: 'Pachmarhi Hill Station',       country: 'India – Hoshangabad, MP',       emoji: '🏘️', lat:  22.467, lng:  78.433, region: 'india' },
  { id: 'gwalior-fort',       name: 'Gwalior Fort',                 country: 'India – Gwalior, MP',           emoji: '🏰', lat:  26.223, lng:  78.169, region: 'india' },
  { id: 'orchha',             name: 'Orchha Fort & Temples',        country: 'India – Orchha, MP',            emoji: '🏯', lat:  25.352, lng:  78.641, region: 'india' },
  { id: 'omkareshwar',        name: 'Omkareshwar Temple',           country: 'India – Khandwa, MP',           emoji: '🛕', lat:  22.238, lng:  76.152, region: 'india' },
  { id: 'mandu',              name: 'Mandu (City of Joy)',          country: 'India – Dhar, MP',              emoji: '🏯', lat:  22.339, lng:  75.393, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // MAHARASHTRA
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'gateway',            name: 'Gateway of India',             country: 'India – Mumbai, Maharashtra',   emoji: '🏛️', lat:  18.922, lng:  72.835, region: 'india' },
  { id: 'elephanta',          name: 'Elephanta Caves',              country: 'India – Mumbai, Maharashtra',   emoji: '⛩️', lat:  18.963, lng:  72.931, region: 'india' },
  { id: 'ajanta',             name: 'Ajanta Caves',                 country: 'India – Aurangabad, MH',        emoji: '🏺', lat:  20.552, lng:  75.700, region: 'india' },
  { id: 'ellora',             name: 'Ellora Caves',                 country: 'India – Aurangabad, MH',        emoji: '⛩️', lat:  20.027, lng:  75.179, region: 'india' },
  { id: 'bibi-ka-maqbara',    name: 'Bibi Ka Maqbara',              country: 'India – Aurangabad, MH',        emoji: '🕌', lat:  19.904, lng:  75.324, region: 'india' },
  { id: 'shani-shingnapur',   name: 'Shani Shingnapur Temple',      country: 'India – Ahmednagar, MH',        emoji: '🛕', lat:  19.344, lng:  74.818, region: 'india' },
  { id: 'raigad-fort',        name: 'Raigad Fort',                  country: 'India – Raigad, MH',            emoji: '🏰', lat:  18.237, lng:  73.444, region: 'india' },
  { id: 'shirdi',             name: 'Sai Baba Temple Shirdi',       country: 'India – Ahmednagar, MH',        emoji: '🛕', lat:  19.765, lng:  74.477, region: 'india' },
  { id: 'lonavala',           name: 'Lonavala & Khandala',          country: 'India – Pune, MH',              emoji: '🌿', lat:  18.751, lng:  73.407, region: 'india' },
  { id: 'mahabaleshwar',      name: 'Mahabaleshwar Hill Station',   country: 'India – Satara, MH',            emoji: '🏘️', lat:  17.924, lng:  73.658, region: 'india' },
  { id: 'nashik-trimbakeshwar',name:'Trimbakeshwar Temple',         country: 'India – Nashik, MH',            emoji: '🛕', lat:  19.934, lng:  73.529, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // GOA
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'basilica-bom',       name: 'Basilica of Bom Jesus',        country: 'India – Old Goa',               emoji: '⛪', lat:  15.500, lng:  73.911, region: 'india' },
  { id: 'se-cathedral',       name: 'Se Cathedral Old Goa',         country: 'India – Old Goa',               emoji: '⛪', lat:  15.502, lng:  73.913, region: 'india' },
  { id: 'chapora-fort',       name: 'Chapora Fort',                 country: 'India – North Goa',             emoji: '🏰', lat:  15.601, lng:  73.737, region: 'india' },
  { id: 'dudhsagar-falls',    name: 'Dudhsagar Waterfalls',         country: 'India – Goa/Karnataka border',  emoji: '💧', lat:  15.314, lng:  74.313, region: 'india' },
  { id: 'calangute-beach',    name: 'Calangute Beach',              country: 'India – North Goa',             emoji: '🏖️', lat:  15.545, lng:  73.754, region: 'india' },
  { id: 'palolem-beach',      name: 'Palolem Beach',                country: 'India – South Goa',             emoji: '🏖️', lat:  15.010, lng:  74.024, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // GUJARAT
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'rani-ki-vav',        name: 'Rani ki Vav',                  country: 'India – Patan, Gujarat',        emoji: '🏛️', lat:  23.859, lng:  72.101, region: 'india' },
  { id: 'statue-unity',       name: 'Statue of Unity',              country: 'India – Kevadia, Gujarat',      emoji: '🗽', lat:  21.838, lng:  73.719, region: 'india' },
  { id: 'somnath-temple',     name: 'Somnath Temple',               country: 'India – Somnath, Gujarat',      emoji: '🛕', lat:  20.888, lng:  70.401, region: 'india' },
  { id: 'dwarka-temple',      name: 'Dwarkadhish Temple',           country: 'India – Dwarka, Gujarat',       emoji: '🛕', lat:  22.238, lng:  68.968, region: 'india' },
  { id: 'rann-of-kutch',      name: 'Rann of Kutch (White Desert)', country: 'India – Kutch, Gujarat',        emoji: '🏜️', lat:  23.736, lng:  70.208, region: 'india' },
  { id: 'gir-forest',         name: 'Gir National Park (Asiatic Lion)', country:'India – Junagadh, Gujarat',  emoji: '🦁', lat:  21.124, lng:  70.825, region: 'india' },
  { id: 'sabarmati-ashram',   name: 'Sabarmati Ashram (Gandhi)',    country: 'India – Ahmedabad, Gujarat',    emoji: '🕊️', lat:  23.060, lng:  72.580, region: 'india' },
  { id: 'adalaj-stepwell',    name: 'Adalaj Stepwell',              country: 'India – Gandhinagar, Gujarat',  emoji: '🏛️', lat:  23.166, lng:  72.580, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // KARNATAKA
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'mysore-palace',      name: 'Mysore Palace',                country: 'India – Mysuru, Karnataka',     emoji: '🏯', lat:  12.305, lng:  76.655, region: 'india' },
  { id: 'hampi',              name: 'Hampi Ruins (Virupaksha)',     country: 'India – Hampi, Karnataka',      emoji: '🏚️', lat:  15.335, lng:  76.462, region: 'india' },
  { id: 'coorg',              name: 'Coorg (Kodagu) Coffee Estates',country: 'India – Coorg, Karnataka',      emoji: '☕', lat:  12.420, lng:  75.740, region: 'india' },
  { id: 'jog-falls',          name: 'Jog Falls',                    country: 'India – Shivamogga, Karnataka', emoji: '💧', lat:  14.228, lng:  74.797, region: 'india' },
  { id: 'badami-caves',       name: 'Badami Cave Temples',          country: 'India – Bagalkot, Karnataka',   emoji: '⛩️', lat:  15.922, lng:  75.685, region: 'india' },
  { id: 'lepakshi',           name: 'Lepakshi Temple',              country: 'India – Anantapur, AP/Karnataka',emoji:'🛕', lat: 13.803, lng:  77.607, region: 'india' },
  { id: 'belur-halebidu',     name: 'Belur & Halebidu Temples',     country: 'India – Hassan, Karnataka',     emoji: '🛕', lat:  13.165, lng:  75.862, region: 'india' },
  { id: 'gokarna',            name: 'Gokarna Beach & Temple',       country: 'India – Uttara Kannada, Karnataka',emoji:'🏖️',lat:14.548, lng:  74.317, region: 'india' },
  { id: 'bandipur-np',        name: 'Bandipur National Park',       country: 'India – Chamarajanagar, Karnataka',emoji:'🐘',lat:11.671, lng:  76.634, region: 'india' },
  { id: 'shravanabelagola',   name: 'Shravanabelagola (Gommateshwara)',country:'India – Hassan, Karnataka',   emoji: '🗿', lat:  12.856, lng:  76.491, region: 'india' },
  { id: 'chikmagalur',        name: 'Chikmagalur Coffee Hills',     country: 'India – Chikmagalur, Karnataka',emoji: '🌿', lat:  13.316, lng:  75.773, region: 'india' },
  { id: 'tungabhadra-dam',    name: 'Tungabhadra Dam',              country: 'India – Hospet, Karnataka',     emoji: '💧', lat:  15.373, lng:  76.323, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // KERALA
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'munnar',             name: 'Munnar Tea Gardens',           country: 'India – Idukki, Kerala',        emoji: '🍵', lat:  10.089, lng:  77.060, region: 'india' },
  { id: 'alleppey-backwaters',name: 'Alleppey Backwaters',          country: 'India – Alappuzha, Kerala',     emoji: '⛵', lat:   9.498, lng:  76.339, region: 'india' },
  { id: 'periyar-wildlife',   name: 'Periyar Wildlife Sanctuary',   country: 'India – Thekkady, Kerala',      emoji: '🐘', lat:   9.592, lng:  77.164, region: 'india' },
  { id: 'varkala-beach',      name: 'Varkala Cliff Beach',          country: 'India – Thiruvananthapuram, Kerala',emoji:'🏖️',lat: 8.733, lng:  76.716, region: 'india' },
  { id: 'kovalam-beach',      name: 'Kovalam Beach',                country: 'India – Thiruvananthapuram, Kerala',emoji:'🏖️',lat: 8.401, lng:  76.978, region: 'india' },
  { id: 'padmanabhaswamy',    name: 'Padmanabhaswamy Temple',       country: 'India – Thiruvananthapuram, Kerala',emoji:'🛕',lat: 8.482, lng:  76.944, region: 'india' },
  { id: 'wayanad',            name: 'Wayanad Wildlife Sanctuary',   country: 'India – Wayanad, Kerala',       emoji: '🌿', lat:  11.686, lng:  76.131, region: 'india' },
  { id: 'athirapally-falls',  name: 'Athirapally Waterfalls',       country: 'India – Thrissur, Kerala',      emoji: '💧', lat:  10.286, lng:  76.569, region: 'india' },
  { id: 'bekal-fort',         name: 'Bekal Fort',                   country: 'India – Kasaragod, Kerala',     emoji: '🏰', lat:  12.393, lng:  75.033, region: 'india' },
  { id: 'guruvayur-temple',   name: 'Guruvayur Temple',             country: 'India – Thrissur, Kerala',      emoji: '🛕', lat:  10.594, lng:  76.041, region: 'india' },
  { id: 'kumarakom-birds',    name: 'Kumarakom Bird Sanctuary',     country: 'India – Kottayam, Kerala',      emoji: '🦅', lat:   9.617, lng:  76.432, region: 'india' },
  { id: 'vagamon',            name: 'Vagamon Hills & Meadows',      country: 'India – Idukki, Kerala',        emoji: '🌿', lat:   9.688, lng:  76.909, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // TAMIL NADU
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'meenakshi',          name: 'Meenakshi Amman Temple',       country: 'India – Madurai, Tamil Nadu',   emoji: '🛕', lat:   9.920, lng:  78.120, region: 'india' },
  { id: 'brihadeeswara',      name: 'Brihadeeswarar Temple',        country: 'India – Thanjavur, Tamil Nadu', emoji: '🛕', lat:  10.783, lng:  79.132, region: 'india' },
  { id: 'rameshwaram',        name: 'Ramanathaswamy Temple',        country: 'India – Rameswaram, Tamil Nadu',emoji: '🛕', lat:   9.288, lng:  79.318, region: 'india' },
  { id: 'kanyakumari',        name: "Kanyakumari (Land's End)",     country: 'India – Kanyakumari, Tamil Nadu',emoji:'🌅', lat:  8.078, lng:  77.552, region: 'india' },
  { id: 'ooty',               name: 'Ooty Hill Station (Nilgiris)', country: 'India – Ooty, Tamil Nadu',      emoji: '🏘️', lat:  11.414, lng:  76.695, region: 'india' },
  { id: 'kodaikanal',         name: 'Kodaikanal Hill Station',      country: 'India – Dindigul, Tamil Nadu',  emoji: '🏘️', lat:  10.237, lng:  77.490, region: 'india' },
  { id: 'mahabalipuram',      name: 'Mahabalipuram Shore Temple',   country: 'India – Chengalpattu, TN',      emoji: '🏛️', lat:  12.621, lng:  80.193, region: 'india' },
  { id: 'chidambaram-temple', name: 'Nataraja Temple Chidambaram',  country: 'India – Cuddalore, TN',         emoji: '🛕', lat:  11.399, lng:  79.693, region: 'india' },
  { id: 'tiruchendur',        name: 'Tiruchendur Murugan Temple',   country: 'India – Thoothukudi, TN',       emoji: '🛕', lat:   8.490, lng:  78.120, region: 'india' },
  { id: 'hogenakkal-falls',   name: 'Hogenakkal Waterfalls',        country: 'India – Dharmapuri, TN',        emoji: '💧', lat:  12.109, lng:  77.793, region: 'india' },
  { id: 'valparai',           name: 'Valparai Tea & Coffee Estate', country: 'India – Coimbatore, TN',        emoji: '🍵', lat:  10.327, lng:  76.956, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // ANDHRA PRADESH & TELANGANA
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'charminar',          name: 'Charminar',                    country: 'India – Hyderabad, Telangana',  emoji: '🕌', lat:  17.361, lng:  78.474, region: 'india' },
  { id: 'golconda-fort',      name: 'Golconda Fort',                country: 'India – Hyderabad, Telangana',  emoji: '🏰', lat:  17.383, lng:  78.402, region: 'india' },
  { id: 'ramoji-film-city',   name: 'Ramoji Film City',             country: 'India – Hyderabad, Telangana',  emoji: '🎬', lat:  17.254, lng:  78.681, region: 'india' },
  { id: 'tirupati-temple',    name: 'Tirumala Venkateswara Temple', country: 'India – Tirupati, AP',          emoji: '🛕', lat:  13.683, lng:  79.347, region: 'india' },
  { id: 'araku-valley',       name: 'Araku Valley Coffee Hills',    country: 'India – Visakhapatnam, AP',     emoji: '🌿', lat:  18.328, lng:  82.878, region: 'india' },
  { id: 'borra-caves',        name: 'Borra Caves',                  country: 'India – Visakhapatnam, AP',     emoji: '🕳️', lat:  18.278, lng:  83.042, region: 'india' },
  { id: 'nagarjunasagar-dam', name: 'Nagarjunasagar Dam',           country: 'India – Nalgonda, Telangana',   emoji: '💧', lat:  16.574, lng:  79.318, region: 'india' },
  { id: 'warangal-fort',      name: 'Warangal Fort',                country: 'India – Warangal, Telangana',   emoji: '🏰', lat:  17.987, lng:  79.597, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // ODISHA
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'jagannath',          name: 'Jagannath Temple Puri',        country: 'India – Puri, Odisha',          emoji: '🛕', lat:  19.805, lng:  85.831, region: 'india' },
  { id: 'sun-temple',         name: 'Sun Temple Konark',            country: 'India – Konark, Odisha',        emoji: '☀️', lat:  19.888, lng:  86.095, region: 'india' },
  { id: 'lingaraj-temple',    name: 'Lingaraj Temple',              country: 'India – Bhubaneswar, Odisha',   emoji: '🛕', lat:  20.238, lng:  85.834, region: 'india' },
  { id: 'chilika-lake',       name: 'Chilika Lake (Flamingos)',     country: 'India – Puri, Odisha',          emoji: '🦩', lat:  19.700, lng:  85.320, region: 'india' },
  { id: 'simlipal-np',        name: 'Simlipal National Park',       country: 'India – Mayurbhanj, Odisha',    emoji: '🐯', lat:  21.843, lng:  86.304, region: 'india' },
  { id: 'udayagiri-khandagiri',name:'Udayagiri & Khandagiri Caves', country: 'India – Bhubaneswar, Odisha',   emoji: '⛩️', lat:  20.262, lng:  85.773, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // WEST BENGAL
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'victoria-mem',       name: 'Victoria Memorial',            country: 'India – Kolkata, WB',           emoji: '🏛️', lat:  22.545, lng:  88.342, region: 'india' },
  { id: 'howrah-bridge',      name: 'Howrah Bridge',                country: 'India – Kolkata, WB',           emoji: '🌉', lat:  22.585, lng:  88.346, region: 'india' },
  { id: 'sundarbans',         name: 'Sundarbans (Royal Bengal Tiger)',country:'India – South 24 Parganas, WB', emoji: '🐯', lat:  21.949, lng:  88.923, region: 'india' },
  { id: 'dakshineswar-kali',  name: 'Dakshineswar Kali Temple',     country: 'India – Kolkata, WB',           emoji: '🛕', lat:  22.655, lng:  88.357, region: 'india' },
  { id: 'darjeeling',         name: 'Darjeeling Tea Gardens & Tiger Hill',country:'India – Darjeeling, WB',   emoji: '🍵', lat:  27.041, lng:  88.263, region: 'india' },
  { id: 'tiger-hill',         name: 'Tiger Hill Sunrise (Darjeeling)',country:'India – Darjeeling, WB',       emoji: '🌄', lat:  27.015, lng:  88.273, region: 'india' },
  { id: 'belur-math',         name: 'Belur Math (Ramakrishna)',     country: 'India – Howrah, WB',            emoji: '🛕', lat:  22.629, lng:  88.352, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // BIHAR & JHARKHAND
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'bodh-gaya',          name: 'Bodh Gaya Mahabodhi Temple',   country: 'India – Gaya, Bihar',           emoji: '☸️', lat:  24.697, lng:  84.991, region: 'india' },
  { id: 'nalanda-ruins',      name: 'Nalanda University Ruins',     country: 'India – Nalanda, Bihar',        emoji: '🏛️', lat:  25.136, lng:  85.444, region: 'india' },
  { id: 'vikramshila',        name: 'Vikramshila University',       country: 'India – Bhagalpur, Bihar',      emoji: '🏛️', lat:  25.323, lng:  87.277, region: 'india' },
  { id: 'rajgir-hills',       name: 'Rajgir Hot Springs & Hills',   country: 'India – Nalanda, Bihar',        emoji: '♨️', lat:  25.026, lng:  85.420, region: 'india' },
  { id: 'netarhat',           name: 'Netarhat (Queen of Chotanagpur)',country:'India – Latehar, Jharkhand',   emoji: '🌄', lat:  23.480, lng:  84.270, region: 'india' },
  { id: 'hundru-falls',       name: 'Hundru Falls',                 country: 'India – Ranchi, Jharkhand',     emoji: '💧', lat:  23.360, lng:  85.716, region: 'india' },
  { id: 'betla-np',           name: 'Betla National Park',          country: 'India – Palamu, Jharkhand',     emoji: '🐘', lat:  23.676, lng:  84.065, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // NORTHEAST — ASSAM, MEGHALAYA, SIKKIM, MANIPUR etc.
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'kaziranga-np',       name: 'Kaziranga National Park (Rhino)',country:'India – Nagaon, Assam',         emoji: '🦏', lat:  26.578, lng:  93.173, region: 'india' },
  { id: 'majuli-island',      name: 'Majuli River Island',          country: 'India – Jorhat, Assam',         emoji: '🏝️', lat:  26.950, lng:  94.200, region: 'india' },
  { id: 'kamakhya-temple',    name: 'Kamakhya Temple',              country: 'India – Guwahati, Assam',       emoji: '🛕', lat:  26.166, lng:  91.704, region: 'india' },
  { id: 'cherrapunji',        name: 'Cherrapunji (Wettest Place)',   country: 'India – East Khasi Hills, Meghalaya',emoji:'🌧️',lat:25.284,lng:91.732, region: 'india' },
  { id: 'living-root-bridges',name: 'Living Root Bridges Nongriat',  country: 'India – Ri Bhoi, Meghalaya',   emoji: '🌿', lat:  25.202, lng:  91.745, region: 'india' },
  { id: 'dawki-river',        name: 'Dawki Crystal Clear River',    country: 'India – West Jaintia Hills, Meghalaya',emoji:'💧',lat:25.185,lng:92.023,region:'india'},
  { id: 'nohkalikai-falls',   name: 'Nohkalikai Falls',             country: 'India – East Khasi Hills, Meghalaya',emoji:'💧',lat:25.299,lng:91.683,region:'india'},
  { id: 'gurudongmar-lake',   name: 'Gurudongmar Lake',             country: 'India – North Sikkim',          emoji: '💧', lat:  27.724, lng:  88.723, region: 'india' },
  { id: 'yumthang-valley',    name: 'Yumthang Valley (Valley of Flowers Sikkim)',country:'India – North Sikkim',emoji:'🌸',lat:27.855,lng:88.694,region:'india'},
  { id: 'rumtek-monastery',   name: 'Rumtek Monastery',             country: 'India – East Sikkim',           emoji: '🛕', lat:  27.291, lng:  88.601, region: 'india' },
  { id: 'dzukou-valley',      name: 'Dzükou Valley (Nagaland)',      country: 'India – Kohima, Nagaland',      emoji: '🌸', lat:  25.456, lng:  94.098, region: 'india' },
  { id: 'loktak-lake',        name: 'Loktak Lake (Floating Islands)',country:'India – Bishnupur, Manipur',     emoji: '💧', lat:  24.525, lng:  93.774, region: 'india' },
  { id: 'arunachal-tawang',   name: 'Tawang Monastery',             country: 'India – Tawang, Arunachal Pradesh',emoji:'🛕',lat:27.586,lng:91.859,region:'india'},
  { id: 'ziro-valley',        name: 'Ziro Valley',                  country: 'India – Lower Subansiri, Arunachal Pradesh',emoji:'🌿',lat:27.604,lng:93.826,region:'india'},

  // ══════════════════════════════════════════════════════════════════════════
  // PUNJAB & HARYANA
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'golden-temple',      name: 'Golden Temple (Harmandir Sahib)',country:'India – Amritsar, Punjab',      emoji: '⛪', lat:  31.620, lng:  74.877, region: 'india' },
  { id: 'wagah-border',       name: 'Wagah Border Ceremony',        country: 'India – Amritsar, Punjab',      emoji: '🏳️', lat:  31.604, lng:  74.572, region: 'india' },
  { id: 'jallianwala-bagh',   name: 'Jallianwala Bagh Memorial',    country: 'India – Amritsar, Punjab',      emoji: '🕯️', lat:  31.621, lng:  74.880, region: 'india' },
  { id: 'anandpur-sahib',     name: 'Anandpur Sahib Gurudwara',     country: 'India – Rupnagar, Punjab',      emoji: '⛪', lat:  31.240, lng:  76.499, region: 'india' },
  { id: 'kurukshetra',        name: 'Kurukshetra (Mahabharata)',     country: 'India – Kurukshetra, Haryana',  emoji: '🛕', lat:  29.968, lng:  76.849, region: 'india' },
  { id: 'pinjore-gardens',    name: 'Yadavindra Gardens Pinjore',   country: 'India – Panchkula, Haryana',    emoji: '🌿', lat:  30.797, lng:  76.923, region: 'india' },
  { id: 'sukhna-lake',        name: 'Sukhna Lake Chandigarh',       country: 'India – Chandigarh',            emoji: '💧', lat:  30.742, lng:  76.817, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // JAMMU & KASHMIR / LADAKH
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'dal-lake',           name: 'Dal Lake Srinagar',            country: 'India – Srinagar, J&K',         emoji: '⛵', lat:  34.090, lng:  74.830, region: 'india' },
  { id: 'gulmarg',            name: 'Gulmarg Ski Resort',           country: 'India – Baramulla, J&K',        emoji: '⛷️', lat:  34.051, lng:  74.381, region: 'india' },
  { id: 'pahalgam',           name: 'Pahalgam Valley',              country: 'India – Anantnag, J&K',         emoji: '🏔️', lat:  34.012, lng:  75.315, region: 'india' },
  { id: 'sonamarg',           name: 'Sonamarg (Meadow of Gold)',    country: 'India – Ganderbal, J&K',        emoji: '🌸', lat:  34.302, lng:  75.293, region: 'india' },
  { id: 'vaishno-devi',       name: 'Vaishno Devi Temple',          country: 'India – Reasi, J&K',            emoji: '🛕', lat:  33.030, lng:  74.946, region: 'india' },
  { id: 'pangong-lake',       name: 'Pangong Tso Lake',             country: 'India – Leh, Ladakh',           emoji: '💧', lat:  33.762, lng:  78.648, region: 'india' },
  { id: 'nubra-valley',       name: 'Nubra Valley (Bactrian Camels)',country:'India – Leh, Ladakh',           emoji: '🐪', lat:  34.659, lng:  77.556, region: 'india' },
  { id: 'leh-palace',         name: 'Leh Palace',                   country: 'India – Leh, Ladakh',           emoji: '🏛️', lat:  34.165, lng:  77.584, region: 'india' },
  { id: 'thiksey-monastery',  name: 'Thiksey Monastery',            country: 'India – Leh, Ladakh',           emoji: '🛕', lat:  33.981, lng:  77.667, region: 'india' },
  { id: 'magnetic-hill',      name: 'Magnetic Hill Leh',            country: 'India – Leh, Ladakh',           emoji: '🧲', lat:  34.244, lng:  77.441, region: 'india' },
  { id: 'zanskar-valley',     name: 'Zanskar Valley',               country: 'India – Kargil, Ladakh',        emoji: '🏔️', lat:  33.457, lng:  76.998, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // UTTARAKHAND – GARHWAL
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'kedarnath',          name: 'Kedarnath Temple',             country: 'India – Rudraprayag, Uttarakhand',emoji:'🏔️',lat:30.735,lng:79.067,region:'india'},
  { id: 'badrinath',          name: 'Badrinath Temple',             country: 'India – Chamoli, Uttarakhand',  emoji: '🛕', lat:  30.744, lng:  79.493, region: 'india' },
  { id: 'valley-flowers',     name: 'Valley of Flowers',            country: 'India – Chamoli, Uttarakhand',  emoji: '🌸', lat:  30.728, lng:  79.608, region: 'india' },
  { id: 'rishikesh',          name: 'Rishikesh Ghats & Laxman Jhula',country:'India – Dehradun, Uttarakhand', emoji: '🕉️', lat:  30.086, lng:  78.263, region: 'india' },
  { id: 'haridwar',           name: 'Haridwar Har Ki Pauri',        country: 'India – Haridwar, Uttarakhand', emoji: '🕉️', lat:  29.958, lng:  78.164, region: 'india' },
  { id: 'mussoorie',          name: 'Mussoorie Hill Station',       country: 'India – Dehradun, Uttarakhand', emoji: '🏘️', lat:  30.459, lng:  78.068, region: 'india' },
  { id: 'kempty-falls',       name: 'Kempty Falls',                 country: 'India – Mussoorie, Uttarakhand',emoji: '💧', lat:  30.494, lng:  78.024, region: 'india' },
  { id: 'dhanaulti',          name: 'Dhanaulti Eco Park',           country: 'India – Tehri, Uttarakhand',    emoji: '🌲', lat:  30.429, lng:  78.244, region: 'india' },
  { id: 'tehri-dam',          name: 'Tehri Dam & Lake',             country: 'India – Tehri, Uttarakhand',    emoji: '🌊', lat:  30.378, lng:  78.480, region: 'india' },
  { id: 'auli',               name: 'Auli Ski Resort',              country: 'India – Chamoli, Uttarakhand',  emoji: '⛷️', lat:  30.523, lng:  79.565, region: 'india' },
  { id: 'chopta',             name: 'Chopta (Mini Switzerland)',    country: 'India – Rudraprayag, Uttarakhand',emoji:'🏔️',lat:30.451,lng:79.229,region:'india'},
  { id: 'tungnath',           name: 'Tungnath Temple',              country: 'India – Rudraprayag, Uttarakhand',emoji:'🛕',lat:30.486,lng:79.217,region:'india'},
  { id: 'deoria-tal',         name: 'Deoria Tal Lake',              country: 'India – Rudraprayag, Uttarakhand',emoji:'💧',lat:30.489,lng:79.146,region:'india'},
  { id: 'roopkund',           name: 'Roopkund Skeleton Lake',       country: 'India – Chamoli, Uttarakhand',  emoji: '💧', lat:  30.248, lng:  79.726, region: 'india' },

  // ── Uttarakhand – Kumaon Lakes & Hill Stations ────────────────────────────
  { id: 'nainital-lake',      name: 'Naini Lake',                   country: 'India – Nainital, Uttarakhand', emoji: '💧', lat:  29.400, lng:  79.470, region: 'india' },
  { id: 'bhimtal-lake',       name: 'Bhimtal Lake',                 country: 'India – Bhimtal, Uttarakhand',  emoji: '💧', lat:  29.343, lng:  79.560, region: 'india' },
  { id: 'sattal-lake',        name: 'Sattal (Seven Lakes)',         country: 'India – Nainital, Uttarakhand', emoji: '💧', lat:  29.308, lng:  79.524, region: 'india' },
  { id: 'naukuchiatal',       name: 'Naukuchiatal Lake',            country: 'India – Nainital, Uttarakhand', emoji: '💧', lat:  29.318, lng:  79.560, region: 'india' },
  { id: 'khurpatal',          name: 'Khurpatal Lake',               country: 'India – Nainital, Uttarakhand', emoji: '💧', lat:  29.352, lng:  79.480, region: 'india' },
  { id: 'almora',             name: 'Almora Hill Station',          country: 'India – Almora, Uttarakhand',   emoji: '🏘️', lat:  29.597, lng:  79.659, region: 'india' },
  { id: 'mukteshwar',         name: 'Mukteshwar Temple & View',     country: 'India – Nainital, Uttarakhand', emoji: '🛕', lat:  29.474, lng:  79.641, region: 'india' },
  { id: 'ranikhet',           name: 'Ranikhet Hill Station',        country: 'India – Almora, Uttarakhand',   emoji: '🌿', lat:  29.647, lng:  79.431, region: 'india' },
  { id: 'kausani',            name: 'Kausani (Himalayan View)',     country: 'India – Bageshwar, Uttarakhand',emoji: '🏔️', lat:  29.841, lng:  79.607, region: 'india' },
  { id: 'binsar',             name: 'Binsar Wildlife Sanctuary',    country: 'India – Almora, Uttarakhand',   emoji: '🌲', lat:  29.720, lng:  79.748, region: 'india' },
  { id: 'lansdowne',          name: 'Lansdowne Hill Station',       country: 'India – Pauri, Uttarakhand',    emoji: '🏘️', lat:  29.838, lng:  78.686, region: 'india' },
  { id: 'munsiyari',          name: 'Munsiyari (Little Kashmir)',   country: 'India – Pithoragarh, Uttarakhand',emoji:'❄️',lat:30.068,lng:80.237,region:'india'},
  { id: 'chaukori',           name: 'Chaukori Tea Gardens',         country: 'India – Pithoragarh, Uttarakhand',emoji:'🍵',lat:29.865,lng:80.417,region:'india'},
  { id: 'pithoragarh',        name: 'Pithoragarh Fort',             country: 'India – Pithoragarh, Uttarakhand',emoji:'🏰',lat:29.582,lng:80.217,region:'india'},
  { id: 'kainchi-dham',       name: 'Kainchi Dham Ashram',          country: 'India – Nainital, Uttarakhand', emoji: '🕉️', lat:  29.433, lng:  79.524, region: 'india' },
  { id: 'jageshwar',          name: 'Jageshwar Dham Temples',       country: 'India – Almora, Uttarakhand',   emoji: '🛕', lat:  29.638, lng:  79.852, region: 'india' },
  { id: 'corbett-np',         name: 'Jim Corbett National Park',    country: 'India – Nainital, Uttarakhand', emoji: '🐯', lat:  29.530, lng:  78.774, region: 'india' },
  { id: 'bageshwar',          name: 'Bageshwar (Bagnath Temple)',   country: 'India – Bageshwar, Uttarakhand',emoji: '🛕', lat:  29.837, lng:  79.773, region: 'india' },
  { id: 'patal-bhuvaneshwar', name: 'Patal Bhuvaneshwar Cave',      country: 'India – Pithoragarh, Uttarakhand',emoji:'🕳️',lat:29.845,lng:80.119,region:'india'},

  // ══════════════════════════════════════════════════════════════════════════
  // HIMACHAL PRADESH
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'shimla',             name: 'Shimla – The Ridge',           country: 'India – Shimla, Himachal Pradesh',emoji:'🏘️',lat:31.104,lng:77.173,region:'india'},
  { id: 'manali',             name: 'Manali – Rohtang Pass',        country: 'India – Kullu, Himachal Pradesh', emoji:'🏔️',lat:32.259,lng:77.189,region:'india'},
  { id: 'dharamshala',        name: 'Dharamshala / McLeod Ganj',   country: 'India – Kangra, Himachal Pradesh',emoji:'🧘',lat:32.219,lng:76.324,region:'india'},
  { id: 'kasol',              name: 'Kasol (Parvati Valley)',       country: 'India – Kullu, Himachal Pradesh', emoji:'🌿',lat:31.997,lng:77.316,region:'india'},
  { id: 'spiti-valley',       name: 'Spiti Valley / Key Monastery', country: 'India – Spiti, HP',               emoji:'🛕',lat:32.299,lng:78.010,region:'india'},
  { id: 'khajjiar',           name: "Khajjiar (India's Mini Switzerland)",country:'India – Chamba, HP',         emoji: '🌿', lat:  32.547, lng:  76.074, region: 'india' },
  { id: 'dalhousie',          name: 'Dalhousie Hill Station',       country: 'India – Chamba, HP',              emoji: '🏘️', lat:  32.538, lng:  75.974, region: 'india' },
  { id: 'triund-trek',        name: 'Triund Trek',                  country: 'India – Kangra, HP',              emoji: '⛺', lat:  32.291, lng:  76.376, region: 'india' },
  { id: 'kullu-valley',       name: 'Kullu Valley',                 country: 'India – Kullu, HP',               emoji: '🏔️', lat:  31.958, lng:  77.110, region: 'india' },
  { id: 'sangla-valley',      name: 'Sangla Valley (Kinnaur)',      country: 'India – Kinnaur, HP',             emoji: '🍎', lat:  31.416, lng:  78.244, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // CHHATTISGARH
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'chitrakoot-falls',   name: 'Chitrakoot Falls (Niagara of India)',country:'India – Bastar, Chhattisgarh',emoji:'💧',lat:19.093,lng:81.722,region:'india'},
  { id: 'bastar-dantewada',   name: 'Dantewada Danteshwari Temple', country: 'India – Dantewada, CG',          emoji: '🛕', lat:  18.900, lng:  81.349, region: 'india' },
  { id: 'barnawapara',        name: 'Barnawapara Wildlife Sanctuary',country:'India – Raipur, CG',             emoji: '🌿', lat:  21.340, lng:  82.410, region: 'india' },

  // ══════════════════════════════════════════════════════════════════════════
  // ANDAMAN & NICOBAR / LAKSHADWEEP
  // ══════════════════════════════════════════════════════════════════════════
  { id: 'cellular-jail',      name: 'Cellular Jail (Kaala Paani)',  country: 'India – Port Blair, Andaman',    emoji: '🏛️', lat:  11.667, lng:  92.748, region: 'india' },
  { id: 'radhanagar-beach',   name: 'Radhanagar Beach (Havelock)',  country: 'India – Andaman Islands',        emoji: '🏖️', lat:  11.978, lng:  92.944, region: 'india' },
  { id: 'barren-island',      name: 'Barren Island Volcano',        country: 'India – Andaman Islands',        emoji: '🌋', lat:  12.279, lng:  93.858, region: 'india' },
  { id: 'lakshadweep-agatti', name: 'Agatti Island Lakshadweep',    country: 'India – Lakshadweep',            emoji: '🌴', lat:  10.824, lng:  72.190, region: 'india' },

];


// ─── COMBINED ─────────────────────────────────────────────────────────────────
const WORLD_LANDMARKS = [
  ...EUROPE_LANDMARKS,
  ...AMERICAS_LANDMARKS,
  ...AFRICA_LANDMARKS,
  ...MIDDLE_EAST_LANDMARKS,
  ...ASIA_LANDMARKS,
  ...OCEANIA_LANDMARKS,
];

const ALL_LANDMARKS = [...WORLD_LANDMARKS, ...INDIA_LANDMARKS];
