// js/contraste.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Alto Contraste';
  toggleButton.classList.add('contraste-btn');
  document.body.appendChild(toggleButton);

  // Verifica se o modo contraste já estava ativo
  if (localStorage.getItem('altoContraste') === 'true') {
    document.body.classList.add('alto-contraste');
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
    const ativo = document.body.classList.contains('alto-contraste');
    localStorage.setItem('altoContraste', ativo);
  });
});
