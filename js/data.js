/* ============================
   ALPINE.2K — Data
   ============================ */

/* Hero background rotation — every image in assets/ */
const BACKGROUNDS = [
  'assets/d13b6895-d53b-4b17-a660-808b03d1cf97.gif',
  'assets/forza-horizon-2-is-the-best-looking-game-on-xbox-one-change-v0-mp9w1wyk1lge1.jpg',
  'assets/homefront-xbox-360-17_orig.png',
  'assets/RM01-600x337.jpg',
  'assets/GRID-Autosport-Xbox-360.jpg',
  'assets/1054.jpg'
];

/* Consoles — status: planned | coming | live
   logo: filename in assets/ (leave '' to fall back to text) */
const CONSOLES = [
  {
    id: 'ps5',
    name: 'PlayStation 5',
    short: 'PS5',
    accent: '#0070D1',
    status: 'planned',
    logo: 'ps5-console-logo-free-vector.jpg',
    games: 0,
    homebrew: 0
  },
  {
    id: 'ps4',
    name: 'PlayStation 4',
    short: 'PS4',
    accent: '#0070D1',
    status: 'planned',
    logo: 'PS4-Logo.jpg',
    games: 0,
    homebrew: 0
  },
  {
    id: 'ps3',
    name: 'PlayStation 3',
    short: 'PS3',
    accent: '#0070D1',
    status: 'planned',
    logo: 'PS3-Logo.png',
    games: 0,
    homebrew: 0
  },
  {
    id: 'psvita',
    name: 'PS Vita',
    short: 'PS Vita',
    accent: '#0070D1',
    status: 'planned',
    logo: 'ps-vita-logo.png',
    games: 0,
    homebrew: 0
  },
  {
    id: 'psp',
    name: 'PSP',
    short: 'PSP',
    accent: '#0070D1',
    status: 'planned',
    logo: '',   // ← send filename later
    games: 0,
    homebrew: 0
  },
  {
    id: 'xbox',
    name: 'Xbox',
    short: 'Xbox',
    accent: '#107C10',
    status: 'planned',
    logo: 'xbox-logo-2001.webp',
    games: 0,
    homebrew: 0
  },
  {
    id: 'xbox360',
    name: 'Xbox 360',
    short: 'Xbox 360',
    accent: '#107C10',
    status: 'planned',
    logo: '659323-xbox360_001.jpg',
    games: 0,
    homebrew: 0
  },
  {
    id: 'wii',
    name: 'Nintendo Wii',
    short: 'Wii',
    accent: '#00A0E9',
    status: 'planned',
    logo: 'NmqpY2dduBuVtW5kPzdyyZ.jpg',
    games: 0,
    homebrew: 0
  },
  {
    id: 'wiiu',
    name: 'Wii U',
    short: 'Wii U',
    accent: '#00A0E9',
    status: 'planned',
    logo: '',   // ← send filename later
    games: 0,
    homebrew: 0
  },
  {
    id: 'nds',
    name: 'Nintendo DS',
    short: 'Nintendo DS',
    accent: '#E60012',
    status: 'planned',
    logo: '',   // ← send filename later
    games: 0,
    homebrew: 0
  },
  {
    id: '3ds',
    name: 'Nintendo 3DS',
    short: '3DS',
    accent: '#E60012',
    status: 'planned',
    logo: '',   // ← send filename later
    games: 0,
    homebrew: 0
  },
  {
    id: 'switch',
    name: 'Nintendo Switch',
    short: 'Switch',
    accent: '#E60012',
    status: 'planned',
    logo: '',   // ← send filename later
    games: 0,
    homebrew: 0
  }
];

const GAMES = [
  { id: 1,  title: 'Astro Bot',             console: 'ps5',     price: 'Free' },
  { id: 2,  title: 'Spider-Man 2',          console: 'ps5',     price: 'Free' },
  { id: 3,  title: 'Gran Turismo 7',        console: 'ps4',     price: 'Free' },
  { id: 4,  title: 'God of War',            console: 'ps3',     price: 'Free' },
  { id: 5,  title: 'Uncharted: Golden Abyss',console: 'psvita', price: 'Free' },
  { id: 6,  title: 'Halo 3',                console: 'xbox360', price: 'Free' },
  { id: 7,  title: 'Forza Horizon 2',       console: 'xbox',    price: 'Free' },
  { id: 8,  title: 'Homefront',             console: 'xbox360', price: 'Free' },
  { id: 9,  title: 'GRID Autosport',        console: 'xbox360', price: 'Free' },
  { id: 10, title: 'Mario Kart Wii',        console: 'wii',     price: 'Free' },
  { id: 11, title: 'New Super Mario Bros',  console: 'nds',     price: 'Free' }
];

const HOMEBREW = [
  { id: 1, title: 'RetroArch',        console: 'all',     author: 'Libretro' },
  { id: 2, title: 'Custom Firmware',  console: 'ps3',     author: 'Community' },
  { id: 3, title: 'Aurora Dashboard', console: 'xbox360', author: 'Phoenix' },
  { id: 4, title: 'Homebrew Channel', console: 'wii',     author: 'Team Twiizers' },
  { id: 5, title: 'Twilight Menu++',  console: 'nds',     author: 'DS-Homebrew' },
  { id: 6, title: 'Atmosphere',       console: 'switch',  author: 'SciresM' },
  { id: 7, title: 'Moonlight',        console: 'psvita',  author: 'Community' },
  { id: 8, title: 'Adrenaline',       console: 'psvita',  author: 'TheFloW' }
];
