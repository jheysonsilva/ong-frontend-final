document.addEventListener('DOMContentLoaded', () => {
  const btnContraste = document.querySelector('.contraste-btn');

  // Aplica contraste se estiver salvo no localStorage
  if (localStorage.getItem('altoContraste') === 'true') {
    document.body.classList.add('alto-contraste');
  }

  // Alterna o modo contraste ao clicar
  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
    const ativo = document.body.classList.contains('alto-contraste');
    localStorage.setItem('altoContraste', ativo ? 'true' : 'false');
  });
});
