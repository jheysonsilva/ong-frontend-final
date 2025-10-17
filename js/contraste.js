document.addEventListener('DOMContentLoaded', () => {
  const btnContraste = document.querySelector('.contraste-btn');
  
  // CORREÇÃO: Verificamos se o botão foi encontrado antes de tentar adicionar o evento.
  // Isso evita que o script pare de funcionar silenciosamente se houver algum problema.
  if (btnContraste) {
    btnContraste.addEventListener('click', () => {
      document.body.classList.toggle('alto-contraste');
    });
  }
});
