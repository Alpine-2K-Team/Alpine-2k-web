/* ============================
   ALPINE.2K — Store page
   ============================ */

const storeState = { all: [], filter: 'all', loaded: false };

async function initStore() {
  const grid = document.getElementById('storeGrid');
  if (!grid) return;
  grid.innerHTML = `<p class="muted" style="grid-column:1/-1;text-align:center;padding:48px 0;">Loading releases…</p>`;
  storeState.all = await fetchAllReleases();
  storeState.loaded = true;
  renderFiltered();
}

function renderFiltered() {
  const grid = document.getElementById('storeGrid');
  if (!grid) return;
  const list = storeState.filter === 'all'
    ? storeState.all
    : storeState.all.filter((r) => r.consoleId === storeState.filter);
  renderReleaseGrid('storeGrid', list);
}

function setupStoreFilters() {
  const filters = document.querySelectorAll('.filter');
  if (!filters.length) return;
  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      storeState.filter = btn.dataset.filter;
      renderFiltered();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupStoreFilters();
  initStore();
});
