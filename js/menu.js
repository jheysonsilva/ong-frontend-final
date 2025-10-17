// menu.js - menu responsivo funcional
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav ul");

  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("ativo");
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
  });
});
