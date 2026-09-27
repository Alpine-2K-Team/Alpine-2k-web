/* ============================
   ALPINE.2K — Hero Background Slideshow
   ============================ */

(function () {
  const stack = document.getElementById('bgStack');
  if (!stack || typeof BACKGROUNDS === 'undefined' || !BACKGROUNDS.length) return;

  const isStatic = stack.classList.contains('static');
  const list = isStatic ? [BACKGROUNDS[0]] : BACKGROUNDS;

  list.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'bg-slide' + (i === 0 ? ' active' : '');
    slide.style.backgroundImage = `url('${src}')`;
    stack.appendChild(slide);
  });

  if (isStatic) return;

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
  const INTERVAL = 6000;

  function go(i) {
    const slides = stack.querySelectorAll('.bg-slide');
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
    restart();
  }

  function next() { go(current + 1); }

  function restart() {
    clearInterval(timer);
    timer = setInterval(next, INTERVAL);
  }

  restart();
})();
