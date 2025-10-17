document.addEventListener("DOMContentLoaded", () => {
  const btnEscuro = document.createElement("button");
  btnEscuro.textContent = "Modo Escuro";
  btnEscuro.style.position = "fixed";
  btnEscuro.style.bottom = "60px";
  btnEscuro.style.right = "20px";
  btnEscuro.style.zIndex = "1000";

  const btnContraste = document.createElement("button");
  btnContraste.textContent = "Alto Contraste";
  btnContraste.style.position = "fixed";
  btnContraste.style.bottom = "20px";
  btnContraste.style.right = "20px";
  btnContraste.style.zIndex = "1000";

  document.body.appendChild(btnEscuro);
  document.body.appendChild(btnContraste);

  btnEscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
    if (document.body.classList.contains("modo-escuro")) {
      document.body.classList.remove("alto-contraste");
    }
  });

  btnContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
    if (document.body.classList.contains("alto-contraste")) {
      document.body.classList.remove("modo-escuro");
    }
  });
});
