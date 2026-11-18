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
