/* ============================
   ALPINE.2K — Render Functions
   ============================ */

/* ---------- Console card ---------- */
function consoleCard(c) {
  const thumbInner = c.logo
    ? `<img src="assets/${c.logo}" alt="${c.name}" class="console-logo" loading="lazy"
         onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement('span'),{className:'console-short',textContent:'${c.short}'}));" />`
    : `<span class="console-short">${c.short}</span>`;

  return `
    <a class="console-card" href="console.html?id=${c.id}" style="--accent:${c.accent}">
      <div class="console-thumb">
        <div class="console-glow"></div>
        ${thumbInner}
      </div>
      <div class="console-body">
        <div class="console-top">
          <h3>${c.name}</h3>
          <span class="badge badge-planned" data-count="${c.id}">…</span>
        </div>
        <div class="console-meta">
          <span class="small muted">${GITHUB_ORG}/${c.repo}</span>
          <span class="small" style="color:var(--pink)">Open →</span>
        </div>
      </div>
    </a>
  `;
}

/* ---------- Release (game) card ---------- */
function releaseCard(r) {
  const firstAsset = (r.assets || [])[0];
  const url = firstAsset ? firstAsset.browser_download_url : r.html_url;
  const size = firstAsset ? `${(firstAsset.size / 1024 / 1024).toFixed(1)} MB` : 'Open';

  return `
    <div class="game-card" data-console="${r.consoleId}">
      <div class="game-thumb" style="--accent:${r.consoleAccent}">
        <span class="game-tag">${r.consoleShort}</span>
      </div>
      <div class="game-body">
        <h3 title="${r.name || r.tag_name}">${r.name || r.tag_name}</h3>
        <p class="muted small" style="margin-bottom:8px;">${r.tag_name}</p>
        <div class="game-meta">
          <span class="game-price">${size}</span>
          <a class="btn btn-primary btn-sm" href="${url}" target="_blank" rel="noopener">Download</a>
        </div>
      </div>
    </div>
  `;
}

/* ---------- Release row (used on console page) ---------- */
function releaseRow(r) {
  const firstAsset = (r.assets || [])[0];
  const url = firstAsset ? firstAsset.browser_download_url : r.html_url;
  const date = r.published_at ? new Date(r.published_at).toLocaleDateString() : '';
  const size = firstAsset ? `${(firstAsset.size / 1024 / 1024).toFixed(1)} MB` : '';

  return `
    <div class="release-row">
      <div>
        <h4 style="font-size:1.1rem;margin-bottom:6px;">${r.name || r.tag_name}</h4>
        <p class="muted small">${r.tag_name}${date ? ' · ' + date : ''}${size ? ' · ' + size : ''}</p>
      </div>
      <a class="btn btn-primary btn-sm" href="${url}" target="_blank" rel="noopener">Download</a>
    </div>
  `;
}

/* ---------- Grid renderers ---------- */
function renderConsoleGrid(targetId, list) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = list.map(consoleCard).join('');
}

function renderReleaseGrid(targetId, releases, limit) {
  const el = document.getElementById(targetId);
  if (!el) return;
  if (!releases.length) {
    el.innerHTML = `<p class="muted" style="grid-column:1/-1;text-align:center;padding:48px 0;">No releases yet — coming soon.</p>`;
    return;
  }
  const items = limit ? releases.slice(0, limit) : releases;
  el.innerHTML = items.map(releaseCard).join('');
}

function renderReleaseList(targetId, releases) {
  const el = document.getElementById(targetId);
  if (!el) return;
  if (!releases.length) {
    el.innerHTML = `<p class="muted" style="text-align:center;padding:32px 0;">No releases yet — coming soon.</p>`;
    return;
  }
  el.innerHTML = releases.map(releaseRow).join('');
}

/* ---------- Live count badges on console cards ---------- */
function updateConsoleCounts(allReleases) {
  CONSOLES.forEach((c) => {
    const badge = document.querySelector(`.badge[data-count="${c.id}"]`);
    if (!badge) return;
    const count = allReleases.filter((r) => r.consoleId === c.id).length;
    badge.textContent = count > 0 ? `${count} releases` : 'Coming soon';
  });
}
