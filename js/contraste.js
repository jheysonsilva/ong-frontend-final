document.addEventListener('DOMContentLoaded', () => {
  const btnContraste = document.querySelector('.contraste-btn');
  
  // Adiciona uma verificação para garantir que o botão exista antes de adicionar o listener
  if (btnContraste) {
    btnContraste.addEventListener('click', () => {
      document.body.classList.toggle('alto-contraste');
    });
  }
});
