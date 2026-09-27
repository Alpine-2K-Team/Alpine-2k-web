/* ============================
   ALPINE.2K — Render Functions
   ============================ */

function consoleCard(c) {
  return `
    <div class="console-card" data-console="${c.id}" style="--accent:${c.accent}">
      <div class="console-thumb">
        <div class="console-glow"></div>
        <span class="console-short">${c.short}</span>
      </div>
      <div class="console-body">
        <div class="console-top">
          <h3>${c.name}</h3>
          <span class="badge badge-planned">Planned</span>
        </div>
        <div class="console-meta">
          <span>${c.games} games</span>
          <span>${c.homebrew} homebrew</span>
        </div>
      </div>
    </div>
  `;
}

function gameCard(g) {
  const c = CONSOLES.find((x) => x.id === g.console);
  const accent = c ? c.accent : '#5BC8FF';
  const tag = c ? c.short : g.console.toUpperCase();
  return `
    <div class="game-card" data-console="${g.console}">
      <div class="game-thumb" style="--accent:${accent}">
        <span class="game-tag">${tag}</span>
      </div>
      <div class="game-body">
        <h3>${g.title}</h3>
        <div class="game-meta">
          <span class="game-price">${g.price}</span>
          <button class="btn btn-primary btn-sm">Download</button>
        </div>
      </div>
    </div>
  `;
}

function homebrewCard(h) {
  const c = CONSOLES.find((x) => x.id === h.console);
  const accent = c ? c.accent : '#5BC8FF';
  const tag = h.console === 'all' ? 'ALL' : (c ? c.short : h.console.toUpperCase());
  return `
    <div class="game-card">
      <div class="game-thumb" style="--accent:${accent}">
        <span class="game-tag">${tag}</span>
      </div>
      <div class="game-body">
        <h3>${h.title}</h3>
        <p class="muted small">by ${h.author}</p>
        <div class="game-meta">
          <button class="btn btn-primary btn-sm">Get</button>
        </div>
      </div>
    </div>
  `;
}

/* ---------- Grid renderers ---------- */

function renderConsoleGrid(targetId, list, limit) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const items = limit ? list.slice(0, limit) : list;
  el.innerHTML = items.map(consoleCard).join('');
}

function renderGameGrid(targetId, list, limit) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const items = limit ? list.slice(0, limit) : list;
  el.innerHTML = items.map(gameCard).join('');
}

function renderHomebrewGrid(targetId, list) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = list.map(homebrewCard).join('');
}

/* ---------- Store filters ---------- */

function setupStoreFilters() {
  const filters = document.querySelectorAll('.filter');
  const grid = document.getElementById('storeGrid');
  if (!filters.length || !grid) return;

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      const list = f === 'all' ? GAMES : GAMES.filter((g) => g.console === f);
      grid.innerHTML = list.map(gameCard).join('');
      if (!list.length) {
        grid.innerHTML = `<p class="muted" style="grid-column:1/-1;text-align:center;padding:40px 0;">No games yet for this console — coming soon.</p>`;
      }
    });
  });
}

/* ---------- Auto-boot ---------- */

document.addEventListener('DOMContentLoaded', () => {
  renderConsoleGrid('consoleGrid', CONSOLES, 6);
  renderConsoleGrid('allConsolesGrid', CONSOLES);
  renderGameGrid('gameGrid', GAMES, 4);
  renderGameGrid('storeGrid', GAMES);
  renderHomebrewGrid('homebrewGrid', HOMEBREW);
  setupStoreFilters();
});
