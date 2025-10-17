// menu.js - controle do menu responsivo

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav ul");

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("ativo");
    const aberto = nav.classList.contains("ativo");
    menuBtn.setAttribute("aria-expanded", aberto);
  });

  // Fechar menu ao clicar em um link (modo mobile)
  const links = nav.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("ativo")) {
        nav.classList.remove("ativo");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  });
});
