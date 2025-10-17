window.addEventListener('DOMContentLoaded', () => {
  const btnContraste = document.querySelector('.contraste-btn');
  if (!btnContraste) return;
  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });
});
