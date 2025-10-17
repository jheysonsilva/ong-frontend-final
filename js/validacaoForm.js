// js/validacaoForm.js - valida e salva localmente
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();
    const telefone = form.telefone.value.trim();
    const cidade = form.cidade.value.trim();

    if (!nome || !email || !cpf || !telefone || !cidade) {
      alert('⚠️ Preencha todos os campos obrigatórios.');
      // foca no primeiro vazio
      const firstEmpty = Array.from(form.elements).find(el => el.required && !el.value.trim());
      if (firstEmpty) firstEmpty.focus();
      return;
    }

    if (!/^[0-9]{11}$/.test(cpf)) {
      alert('❌ CPF inválido. Use 11 números.');
      form.cpf.focus();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('❌ E-mail inválido.');
      form.email.focus();
      return;
    }

    const usuario = { nome, email, cpf, telefone, cidade, criadoEm: new Date().toISOString() };
    // salva lista de cadastros
    const lista = JSON.parse(localStorage.getItem('cadastros') || '[]');
    lista.push(usuario);
    localStorage.setItem('cadastros', JSON.stringify(lista));

    alert('✅ Cadastro realizado com sucesso!');
    form.reset();
  });
});
