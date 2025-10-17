document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".cards");
  if (!container) return;

  const projetos = [
    { titulo: "Ação Solidária", descricao: "Campanha de arrecadação de alimentos.", imagem: "img/doacao-alimentos.jpg" },
    { titulo: "Inverno Quente", descricao: "Doação de roupas e cobertores.", imagem: "img/agasalho.jpg" },
    { titulo: "Educação para Todos", descricao: "Aulas de reforço escolar para crianças.", imagem: "img/educacao.jpg" }
  ];

  projetos.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <img src="${p.imagem}" alt="Projeto ${p.titulo}">
      <h3>${p.titulo}</h3>
      <p>${p.descricao}</p>
    `;
    container.appendChild(div);
  });
});
