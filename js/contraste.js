// contraste.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.contraste-btn');

  // Ativa contraste se já estiver salvo
  if (localStorage.getItem('altoContraste') === 'true') {
    document.body.classList.add('alto-contraste');
  }

  // Alterna contraste ao clicar
  btn.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
    const ativo = document.body.classList.contains('alto-contraste');
    localStorage.setItem('altoContraste', ativo ? 'true' : 'false');
  });
});
