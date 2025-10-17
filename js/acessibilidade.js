// acessibilidade.js - controle de contraste e modo escuro

document.addEventListener("DOMContentLoaded", () => {
  const contrasteBtn = document.getElementById("toggle-contrast");
  const darkModeBtn = document.getElementById("toggle-darkmode");

  if (contrasteBtn) {
    contrasteBtn.addEventListener("click", () => {
      document.body.classList.toggle("alto-contraste");
      const ativo = document.body.classList.contains("alto-contraste");
      contrasteBtn.setAttribute("aria-pressed", ativo);
    });
  }

  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
      document.body.classList.toggle("modo-escuro");
      const ativo = document.body.classList.contains("modo-escuro");
      darkModeBtn.setAttribute("aria-pressed", ativo);
    });
  }
});
