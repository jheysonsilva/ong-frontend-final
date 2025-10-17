document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.textContent = 'Alto Contraste';
  btn.classList.add('contraste-btn');
  document.body.appendChild(btn);

  // Ativa contraste se já estiver salvo
  if (localStorage.getItem('altoContraste') === 'true') {
    document.body.classList.add('alto-contraste');
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
    const ativo = document.body.classList.contains('alto-contraste');
    localStorage.setItem('altoContraste', ativo ? 'true' : 'false');
  });
});
