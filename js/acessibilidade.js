document.addEventListener("DOMContentLoaded", () => {
  // Criar container dos botões
  const btnContainer = document.createElement("div");
  btnContainer.style.position = "fixed";
  btnContainer.style.bottom = "20px";
  btnContainer.style.right = "20px";
  btnContainer.style.display = "flex";
  btnContainer.style.flexDirection = "column";
  btnContainer.style.gap = "10px";
  btnContainer.style.zIndex = "1000";

  // Botão Modo Escuro
  const btnEscuro = document.createElement("button");
  btnEscuro.textContent = "Modo Escuro";
  btnEscuro.setAttribute("aria-label", "Ativar modo escuro");

  // Botão Alto Contraste
  const btnContraste = document.createElement("button");
  btnContraste.textContent = "Alto Contraste";
  btnContraste.setAttribute("aria-label", "Ativar alto contraste");

  btnContainer.appendChild(btnEscuro);
  btnContainer.appendChild(btnContraste);
  document.body.appendChild(btnContainer);

  // Função Modo Escuro
  btnEscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
    document.body.classList.remove("alto-contraste");
  });

  // Função Alto Contraste
  btnContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
    document.body.classList.remove("modo-escuro");
  });
});
