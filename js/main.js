/* ============================
   ALPINE.2K — Main JS
   ============================ */

document.addEventListener('DOMContentLoaded', () => {
  /* Year in footer */
  document.querySelectorAll('#year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* Navbar scroll effect */
  const navbar = document.getElementById('navbar');
  if (navbar && !navbar.classList.contains('solid')) {
    const onScroll = () => {
      if (window.scrollY > 40) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Mobile menu */
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
  }
  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => mobileMenu.classList.remove('open'))
    );
  }

  /* Console card click → store filtered */
  document.querySelectorAll('.console-card').forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.dataset.console;
      window.location.href = `store.html?console=${id}`;
    });
  });

  /* If URL has ?console=, pre-filter the store */
  const params = new URLSearchParams(window.location.search);
  const con = params.get('console');
  if (con) {
    const filterBtn = document.querySelector(`.filter[data-filter="${con}"]`);
    if (filterBtn) filterBtn.click();
  }
});
