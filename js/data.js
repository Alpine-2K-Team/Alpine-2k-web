/* ============================
   ALPINE.2K — Console → Repo map
   The website reads releases from each of these repos.
   Add a console → add one entry here + a filter button.
   ============================ */

const GITHUB_ORG = 'Alpine-2K';

const CONSOLES = [
  {
    id: 'ps5',
    name: 'PlayStation 5',
    short: 'PS5',
    accent: '#0070D1',
    logo: 'ps5-console-logo-free-vector.jpg',
    repo: 'alpine-2k-ps5'
  },
  {
    id: 'ps4',
    name: 'PlayStation 4',
    short: 'PS4',
    accent: '#0070D1',
    logo: 'PS4-Logo.jpg',
    repo: 'alpine-2k-ps4'
  },
  {
    id: 'ps3',
    name: 'PlayStation 3',
    short: 'PS3',
    accent: '#0070D1',
    logo: 'PS3-Logo.png',
    repo: 'alpine-2k-ps3'
  },
  {
    id: 'xbox',
    name: 'Xbox',
    short: 'Xbox',
    accent: '#107C10',
    logo: 'xbox-logo-2001.webp',
    repo: 'alpine-2k-xbox'
  },
  {
    id: 'xbox360',
    name: 'Xbox 360',
    short: 'Xbox 360',
    accent: '#107C10',
    logo: '659323-xbox360_001.jpg',
    repo: 'alpine-2k-xbox360'
  },
  {
    id: 'nds',
    name: 'Nintendo DS',
    short: 'Nintendo DS',
    accent: '#E60012',
    logo: '',   // send filename when ready
    repo: 'alpine-2k-nds'
  },
  {
    id: 'wii',
    name: 'Nintendo Wii',
    short: 'Wii',
    accent: '#00A0E9',
    logo: 'NmqpY2dduBuVtW5kPzdyyZ.jpg',
    repo: 'alpine-2k-wii'
  }
];

/** Helper — find a console by its id. */
function getConsole(id) {
  return CONSOLES.find((c) => c.id === id) || null;
}
