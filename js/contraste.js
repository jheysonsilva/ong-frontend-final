document.addEventListener('DOMContentLoaded', () => {
  const btnContraste = document.querySelector('.contraste-btn');
  
  // CORREÇÃO CRÍTICA: Verifica se o botão foi encontrado antes de tentar adicionar o evento.
  if (btnContraste) { 
    btnContraste.addEventListener('click', () => {
      document.body.classList.toggle('alto-contraste');
    });
  }
});
