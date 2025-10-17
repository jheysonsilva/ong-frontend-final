document.addEventListener('DOMContentLoaded', () => {
  const btnContraste = document.querySelector('.contraste-btn');
  
  // CORREÇÃO: Esta verificação é crucial. Ela impede o "Uncaught TypeError"
  // que estava fazendo o botão parar de funcionar.
  if (btnContraste) { 
    btnContraste.addEventListener('click', () => {
      document.body.classList.toggle('alto-contraste');
    });
  }
});
