const btnContraste = document.querySelector('.contraste-btn');

// SOLUÇÃO FINAL: Simplifica a execução para garantir que o evento de clique seja anexado.
if (btnContraste) { 
  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });
}
