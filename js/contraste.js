document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.contraste-btn');

  if (localStorage.getItem('altoContraste') === 'true') {
    document.body.classList.add('alto-contraste');
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
    localStorage.setItem('altoContraste', document.body.classList.contains('alto-contraste') ? 'true' : 'false');
  });
});
