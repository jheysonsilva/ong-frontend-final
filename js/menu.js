document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const menu = document.querySelector('nav ul.menu');

  if (!btn || !menu) return;

  btn.setAttribute('aria-controls', 'main-nav');
  menu.id = 'main-nav';
  btn.setAttribute('aria-expanded', 'false');

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('mostrar');

    if (!expanded) {
      menu.querySelector('a')?.focus();
    } else {
      btn.focus();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('mostrar')) {
      menu.classList.remove('mostrar');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
});
