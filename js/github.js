/* ============================
   ALPINE.2K — GitHub API client
   Reads releases from every Alpine.2K console repo.
   ============================ */

const GITHUB_API = 'https://api.github.com';
const RELEASE_CACHE_TTL = 1000 * 60 * 10; // 10 min
const releaseCache = new Map();

function ghHeaders() {
  const h = { Accept: 'application/vnd.github+json' };
  const token = window.ALPINE_GH_TOKEN;
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

async function ghFetch(url) {
  const res = await fetch(url, { headers: ghHeaders() });
  if (res.status === 404) return null;
  if (res.status === 403) {
    console.warn('GitHub rate limit hit — see js/github.js for token setup');
    throw new Error('rate-limit');
  }
  if (!res.ok) throw new Error(`GitHub ${res.status}`);
  return res.json();
}

/** All releases for one repo (newest first), with 10-min cache. */
async function fetchRepoReleases(org, repo, limit = 100) {
  const key = `${org}/${repo}`;
  const cached = releaseCache.get(key);
  if (cached && Date.now() - cached.time < RELEASE_CACHE_TTL) {
    return cached.data;
  }
  const url = `${GITHUB_API}/repos/${org}/${repo}/releases?per_page=${limit}`;
  const data = (await ghFetch(url)) || [];
  releaseCache.set(key, { data, time: Date.now() });
  return data;
}

/** Attach console metadata so cards can render without lookups. */
function attachConsole(release, console_) {
  return {
    ...release,
    consoleId: console_.id,
    consoleShort: console_.short,
    consoleAccent: console_.accent,
    repoFull: `${GITHUB_ORG}/${console_.repo}`
  };
}

/** Fetch releases for every console, merged + sorted newest first. */
async function fetchAllReleases(limitPerRepo = 50) {
  const results = await Promise.all(
    CONSOLES.map(async (c) => {
      try {
        const releases = await fetchRepoReleases(GITHUB_ORG, c.repo, limitPerRepo);
        return releases.map((r) => attachConsole(r, c));
      } catch (err) {
        console.warn(`Failed to load ${c.repo}`, err);
        return [];
      }
    })
  );
  return results
    .flat()
    .filter((r) => !r.draft)
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
}
