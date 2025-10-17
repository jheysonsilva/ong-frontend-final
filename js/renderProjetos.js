// js/renderProjetos.js - renderiza cards de projeto
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.cards');
  if (!container) return;

  const projetos = [
    { titulo: 'Mãos Solidárias', descricao: 'Capacitação de mulheres em situação de vulnerabilidade social.', imagem: 'img/maos-solidarias.jpg' },
    { titulo: 'Criança Feliz', descricao: 'Atividades educativas e recreativas para crianças carentes.', imagem: 'img/crianca-feliz.jpg' },
    { titulo: 'Alimente o Futuro', descricao: 'Campanha de arrecadação de alimentos para famílias necessitadas.', imagem: 'img/ong-fachada.jpg' }
  ];

  projetos.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.tabIndex = 0;
    card.innerHTML = `
      <img src="${p.imagem}" alt="${p.titulo}">
      <h3>${p.titulo}</h3>
      <p>${p.descricao}</p>
    `;
    container.appendChild(card);
  });
});
