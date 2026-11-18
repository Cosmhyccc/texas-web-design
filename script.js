document.documentElement.classList.add('js');

// FAQ: opening an answer closes the others.
document.querySelectorAll('details').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) document.querySelectorAll('details').forEach(other => { if (other !== item) other.open = false; });
  });
});

// Nav gets a paper backdrop once you scroll.
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-stuck', scrollY > 24);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Map pins show their rank.
document.querySelectorAll('.pin').forEach(pin => { pin.dataset.n = pin.textContent; });

// Things slide up as they come into view (skipped with reduced motion, and if IntersectionObserver is missing).
const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!still && 'IntersectionObserver' in window) {
  const items = document.querySelectorAll('.stat, .screen, .checklist, .card, .shot, .step, .qs');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach((el, i) => { el.classList.add('rv'); el.style.transitionDelay = `${(i % 3) * 70}ms`; io.observe(el); });
}
