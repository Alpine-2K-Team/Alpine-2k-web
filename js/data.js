/* ============================
   ALPINE.2K — Data
   ============================ */

const CONSOLES = [
  { id: 'ps5',     name: 'PlayStation 5',    short: 'PS5',         accent: '#0070D1', status: 'planned', games: 0, homebrew: 0 },
  { id: 'ps4',     name: 'PlayStation 4',    short: 'PS4',         accent: '#0070D1', status: 'planned', games: 0, homebrew: 0 },
  { id: 'ps3',     name: 'PlayStation 3',    short: 'PS3',         accent: '#0070D1', status: 'planned', games: 0, homebrew: 0 },
  { id: 'xbox',    name: 'Xbox',             short: 'Xbox',        accent: '#107C10', status: 'planned', games: 0, homebrew: 0 },
  { id: 'xbox360', name: 'Xbox 360',         short: 'Xbox 360',    accent: '#107C10', status: 'planned', games: 0, homebrew: 0 },
  { id: 'wii',     name: 'Nintendo Wii',     short: 'Wii',         accent: '#00A0E9', status: 'planned', games: 0, homebrew: 0 },
  { id: 'nds',     name: 'Nintendo DS',      short: 'Nintendo DS', accent: '#E60012', status: 'planned', games: 0, homebrew: 0 },
  { id: 'switch',  name: 'Nintendo Switch',  short: 'Switch',      accent: '#E60012', status: 'planned', games: 0, homebrew: 0 },
  { id: '3ds',     name: 'Nintendo 3DS',     short: '3DS',         accent: '#E60012', status: 'planned', games: 0, homebrew: 0 },
  { id: 'wiiu',    name: 'Wii U',            short: 'Wii U',       accent: '#00A0E9', status: 'planned', games: 0, homebrew: 0 },
  { id: 'psvita',  name: 'PS Vita',          short: 'PS Vita',     accent: '#0070D1', status: 'planned', games: 0, homebrew: 0 },
  { id: 'psp',     name: 'PSP',              short: 'PSP',         accent: '#0070D1', status: 'planned', games: 0, homebrew: 0 }
];

const GAMES = [
  { id: 1, title: 'Astro Bot',            console: 'ps5',     price: 'Free' },
  { id: 2, title: 'Spider-Man 2',         console: 'ps5',     price: 'Free' },
  { id: 3, title: 'Gran Turismo 7',       console: 'ps4',     price: 'Free' },
  { id: 4, title: 'God of War',           console: 'ps3',     price: 'Free' },
  { id: 5, title: 'Halo 3',               console: 'xbox360', price: 'Free' },
  { id: 6, title: 'Forza Horizon',        console: 'xbox',    price: 'Free' },
  { id: 7, title: 'Mario Kart Wii',       console: 'wii',     price: 'Free' },
  { id: 8, title: 'New Super Mario Bros', console: 'nds',     price: 'Free' }
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
