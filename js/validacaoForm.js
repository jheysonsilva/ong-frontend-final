document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const cpf = document.getElementById('cpf')?.value.trim();
    const telefone = document.getElementById('telefone')?.value.trim();
    const cidade = document.getElementById('cidade')?.value.trim();

    if (!nome || !email || !cpf || !telefone || !cidade) {
      alert('⚠️ Preencha todos os campos obrigatórios!');
      return;
    }

    if (!/^[0-9]{11}$/.test(cpf)) {
      alert('❌ CPF inválido! Digite apenas 11 números.');
      return;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert('❌ E-mail inválido! Verifique o formato.');
      return;
    }

    const usuario = {
      nome,
      email,
      cpf,
      telefone,
      cidade,
      criadoEm: new Date().toISOString()
    };

    localStorage.setItem('usuarioCadastro', JSON.stringify(usuario));

    alert('✅ Cadastro realizado com sucesso!');
    form.reset();
  });
});
