// validacaoForm.js - valida o formulário de cadastro

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const camposObrigatorios = form.querySelectorAll("[required]");
    let valido = true;

    camposObrigatorios.forEach(campo => {
      const label = campo.previousElementSibling?.innerText || campo.name;
      if (!campo.value.trim()) {
        alert(`Por favor, preencha o campo "${label}".`);
        campo.focus();
        valido = false;
        return;
      }
    });

    if (valido) {
      alert("Cadastro enviado com sucesso! 🎉");
      form.reset();
    }
  });
});
