// js/acessibilidade.js
document.addEventListener('DOMContentLoaded', () => {
  const btnContraste = document.getElementById('toggle-contrast');
  const btnDark = document.getElementById('toggle-darkmode');
  const body = document.body;

  // helpers: sincronizar aria-pressed
  function setPressed(button, ativo){
    if (!button) return;
    button.setAttribute('aria-pressed', ativo ? 'true' : 'false');
  }

  if (btnContraste) {
    btnContraste.addEventListener('click', () => {
      const ativo = body.classList.toggle('alto-contraste');
      setPressed(btnContraste, ativo);
      // se ativou alto-contraste, desativa modo-escuro para evitar conflito visual
      if (ativo && body.classList.contains('modo-escuro')) {
        body.classList.remove('modo-escuro');
        setPressed(btnDark, false);
      }
    });
  }

  if (btnDark) {
    btnDark.addEventListener('click', () => {
      const ativo = body.classList.toggle('modo-escuro');
      setPressed(btnDark, ativo);
      if (ativo && body.classList.contains('alto-contraste')) {
        body.classList.remove('alto-contraste');
        setPressed(btnContraste, false);
      }
    });
  }

  // permitir alternância via teclado Enter/Space nos botões (eles são botões nativos, mas reforço)
  [btnContraste, btnDark].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' || e.key === ' ') btn.click();
    });
  });
});
