document.addEventListener('DOMContentLoaded', () => {
  const btnContraste = document.getElementById('toggle-contraste');

  // Mantém o modo salvo
  if (localStorage.getItem('altoContraste') === 'true') {
    document.body.classList.add('alto-contraste');
  }

  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
    const ativo = document.body.classList.contains('alto-contraste');
    localStorage.setItem('altoContraste', ativo ? 'true' : 'false');
  });
});
