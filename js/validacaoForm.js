document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const cidade = form.cidade.value.trim();

    if (!nome || !email || !telefone || !cidade) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("✅ Cadastro enviado com sucesso!");
    form.reset();
  });
});
