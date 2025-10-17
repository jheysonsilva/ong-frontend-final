document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.querySelector('.menu-btn');
  const navMenu = document.querySelector('nav ul');
  if (btnMenu && navMenu) {
    btnMenu.addEventListener('click', () => navMenu.classList.toggle('mostrar'));
    btnMenu.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navMenu.classList.toggle('mostrar');
      }
    });
  }
});
