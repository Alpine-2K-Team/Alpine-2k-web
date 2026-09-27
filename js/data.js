/* ============================
   ALPINE.2K — Console → Repo map
   The website reads releases from each of these GitHub repos.
   ============================ */

const GITHUB_ORG = 'Alpine-2K';

const CONSOLES = [
  { id: 'ps5',     name: 'PlayStation 5',   short: 'PS5',         accent: '#0070D1', logo: 'ps5-console-logo-free-vector.jpg', repo: 'Alpine-2K-Ps5',     modMethod: 'CFW' },
  { id: 'ps4',     name: 'PlayStation 4',   short: 'PS4',         accent: '#0070D1', logo: 'PS4-Logo.jpg',                    repo: 'Alpine-2K-Ps4',     modMethod: 'CFW / HEN' },
  { id: 'ps3',     name: 'PlayStation 3',   short: 'PS3',         accent: '#0070D1', logo: 'PS3-Logo.png',                    repo: 'Alpine-2K-Ps3',     modMethod: 'CFW / HEN' },
  { id: 'xbox',    name: 'Xbox',            short: 'Xbox',        accent: '#107C10', logo: 'xbox-logo-2001.webp',             repo: 'Alpine-2K-Xbox',    modMethod: 'Softmod' },
  { id: 'xbox360', name: 'Xbox 360',        short: 'Xbox 360',    accent: '#107C10', logo: '659323-xbox360_001.jpg',          repo: 'Alpine-2K-Xbox360', modMethod: 'RGH / JTAG' },
  { id: 'nds',     name: 'Nintendo DS',     short: 'Nintendo DS', accent: '#E60012', logo: '',                                repo: 'Alpine-2K-Nds',     modMethod: 'Flashcart' },
  { id: 'wii',     name: 'Nintendo Wii',    short: 'Wii',         accent: '#00A0E9', logo: 'NmqpY2dduBuVtW5kPzdyyZ.jpg',      repo: 'Alpine-2K-Wii',     modMethod: 'Homebrew Channel' }
];

function getConsole(id) {
  return CONSOLES.find((c) => c.id === id) || null;
}
