// js/menu.js - menu responsivo acessível
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const navList = document.querySelector('nav ul');

  if (!btn || !navList) return;

  btn.addEventListener('click', () => {
    navList.classList.toggle('ativo');
    const aberto = navList.classList.contains('ativo');
    btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    // mover foco para primeiro link quando abrir (acessibilidade)
    if (aberto) {
      const primeiro = navList.querySelector('a');
      if (primeiro) primeiro.focus();
    }
  });

  // Fechar menu ao clicar em link (mobile)
  navList.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (navList.classList.contains('ativo')) {
        navList.classList.remove('ativo');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
