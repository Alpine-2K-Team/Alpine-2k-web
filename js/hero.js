/* ============================
   ALPINE.2K — Hero Background Slideshow
   ============================ */

const BACKGROUNDS = [
  'assets/d13b6895-d53b-4b17-a660-808b03d1cf97.gif',
  'assets/forza-horizon-2-is-the-best-looking-game-on-xbox-one-change-v0-mp9w1wyk1lge1.jpg',
  'assets/homefront-xbox-360-17_orig.png',
  'assets/RM01-600x337.jpg',
  'assets/GRID-Autosport-Xbox-360.jpg',
  'assets/1054.jpg'
];

(function () {
  const stack = document.getElementById('bgStack');
  if (!stack || !BACKGROUNDS.length) return;

  const isStatic = stack.classList.contains('static');
  const list = isStatic ? [BACKGROUNDS[0]] : BACKGROUNDS;

  list.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'bg-slide' + (i === 0 ? ' active' : '');
    slide.style.backgroundImage = `url('${src}')`;
    stack.appendChild(slide);
  });

  if (isStatic) return;

  const label = document.getElementById('heroLabel');
  const LABELS = ['Featured', 'Racing', 'Action', 'Retro', 'Arcade', 'Classics'];

  const dotsWrap = document.getElementById('slideDots');
  const dots = [];
  if (dotsWrap) {
    list.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Background ${i + 1}`);
      dot.addEventListener('click', () => go(i));
      dotsWrap.appendChild(dot);
      dots.push(dot);
    });
  }

  let current = 0;
  let timer = null;
  const INTERVAL = 6500;

  function updateLabel(i) {
    if (!label) return;
    label.textContent = LABELS[i % LABELS.length];
    label.style.opacity = '0';
    setTimeout(() => { label.style.opacity = '0.9'; }, 60);
  }

  function go(i) {
    const slides = stack.querySelectorAll('.bg-slide');
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
    updateLabel(current);
    restart();
  }

  function next() { go(current + 1); }

  function restart() {
    clearInterval(timer);
    timer = setInterval(next, INTERVAL);
  }

  updateLabel(0);
  restart();
})();
