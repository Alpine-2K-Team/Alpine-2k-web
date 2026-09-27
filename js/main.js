/* ============================
   ALPINE.2K — Main JS
   ============================ */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const navbar = document.getElementById('navbar');
  if (navbar && !navbar.classList.contains('solid')) {
    const onScroll = () => {
      if (window.scrollY > 40) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) menuBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
  if (closeBtn && mobileMenu) closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
  if (mobileMenu) mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

  document.querySelectorAll('.scroll-row').forEach((row) => {
    row.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        row.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  });

  document.querySelectorAll('.console-card[data-console]').forEach((card) => {
    card.addEventListener('click', () => {
      window.location.href = `console.html?id=${card.dataset.console}`;
    });
  });
});
