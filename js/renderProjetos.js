// renderProjetos.js - renderiza os cards de projetos sociais dinamicamente

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".cards");
  if (!container) return;

  const projetos = [
    {
      nome: "Ação Solidária de Inverno",
      descricao: "Campanha anual de arrecadação de agasalhos e cobertores para famílias em situação de vulnerabilidade.",
      imagem: "img/agasalho.jpg"
    },
    {
      nome: "Doe Alimentos",
      descricao: "Arrecadação e distribuição de cestas básicas em comunidades carentes.",
      imagem: "img/doacao-alimentos.jpg"
    },
    {
      nome: "Educação para Todos",
      descricao: "Projeto de reforço escolar gratuito para crianças de baixa renda.",
      imagem: "img/educacao.jpg"
    }
  ];

  projetos.forEach(projeto => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.setAttribute("tabindex", "0");
    card.innerHTML = `
      <img src="${projeto.imagem}" alt="Imagem ilustrativa do projeto ${projeto.nome}">
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
    `;
    container.appendChild(card);
  });
});
