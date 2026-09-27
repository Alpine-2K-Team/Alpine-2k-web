/* ============================
   ALPINE.2K — Single console page
   ============================ */

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const c = getConsole(id);

  const head = document.getElementById('consoleHead');
  const body = document.getElementById('consoleBody');
  const releasesEl = document.getElementById('consoleReleases');

  if (!c) {
    if (head) head.innerHTML = `<h1>Console not found</h1><p class="muted">That console isn't in Alpine.2K yet.</p><a class="btn btn-ghost" href="consoles.html" style="margin-top:24px;display:inline-flex;">Back to consoles</a>`;
    if (body) body.style.display = 'none';
    return;
  }

  document.title = `${c.name} — Alpine.2K`;

  if (head) {
    const logo = c.logo ? `<img src="assets/${c.logo}" alt="${c.name}" class="page-logo" />` : '';
    head.innerHTML = `
      ${logo}
      <p class="eyebrow">Alpine.2K for</p>
      <h1>${c.name}</h1>
      <p class="muted">Every release published to <a class="accent" href="https://github.com/${GITHUB_ORG}/${c.repo}" target="_blank" rel="noopener">${GITHUB_ORG}/${c.repo}</a> appears below — download and install on your modded ${c.short}.</p>
    `;
  }

  if (releasesEl) releasesEl.innerHTML = `<p class="muted" style="text-align:center;padding:32px 0;">Loading releases…</p>`;

  try {
    const releases = await fetchRepoReleases(GITHUB_ORG, c.repo);
    const decorated = releases.filter((r) => !r.draft).map((r) => attachConsole(r, c));
    if (releasesEl) renderReleaseList('consoleReleases', decorated);
  } catch {
    if (releasesEl) releasesEl.innerHTML = `<p class="muted" style="text-align:center;padding:32px 0;">Couldn't load releases. Try again in a bit.</p>`;
  }
});
