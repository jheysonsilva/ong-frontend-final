document.addEventListener("DOMContentLoaded", () => {
  /*** === 1. Skip Link === ***/
  const skipLink = document.createElement("a");
  skipLink.href = "#main";
  skipLink.textContent = "Pular para o conteúdo";
  skipLink.className = "skip-link";
  skipLink.style.position = "absolute";
  skipLink.style.left = "-999px";
  skipLink.style.top = "auto";
  document.body.prepend(skipLink);

  /*** === 2. Botões de acessibilidade === ***/
  const btnContainer = document.createElement("div");
  btnContainer.style.position = "fixed";
  btnContainer.style.bottom = "20px";
  btnContainer.style.right = "20px";
  btnContainer.style.display = "flex";
  btnContainer.style.flexDirection = "column";
  btnContainer.style.gap = "10px";
  btnContainer.style.zIndex = "1000";

  const btnEscuro = document.createElement("button");
  btnEscuro.textContent = "Modo Escuro";
  btnEscuro.setAttribute("aria-label", "Ativar modo escuro");

  const btnContraste = document.createElement("button");
  btnContraste.textContent = "Alto Contraste";
  btnContraste.setAttribute("aria-label", "Ativar alto contraste");

  btnContainer.appendChild(btnEscuro);
  btnContainer.appendChild(btnContraste);
  document.body.appendChild(btnContainer);

  btnEscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
    document.body.classList.remove("alto-contraste");
  });

  btnContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
    document.body.classList.remove("modo-escuro");
  });

  /*** === 3. Menu acessível === ***/
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector("nav ul.menu");

  if (menuBtn && menu) {
    menuBtn.setAttribute("aria-controls", "main-nav");
    menu.id = "main-nav";
    menuBtn.setAttribute("aria-expanded", "false");

    const toggleMenu = () => {
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!expanded));
      menu.classList.toggle("mostrar");
      if (!expanded) {
        const firstLink = menu.querySelector("a");
        firstLink?.focus();
      } else {
        menuBtn.focus();
      }
    };

    menuBtn.addEventListener("click", toggleMenu);

    // Fechar com ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menu.classList.contains("mostrar")) {
        menu.classList.remove("mostrar");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.focus();
      }
    });

    // Navegação por setas (ArrowUp / ArrowDown)
    const links = Array.from(menu.querySelectorAll("a"));
    links.forEach((link, idx) => {
      link.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          links[(idx + 1) % links.length].focus();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          links[(idx - 1 + links.length) % links.length].focus();
        }
      });
    });
  }

  /*** === 4. Mensagens de erro acessíveis === ***/
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      let valid = true;
      form.querySelectorAll("[required]").forEach((input) => {
        const errorId = `erro-${input.id}`;
        let errorSpan = document.getElementById(errorId);

        if (!errorSpan) {
          errorSpan = document.createElement("span");
          errorSpan.id = errorId;
          errorSpan.className = "error";
          errorSpan.setAttribute("role", "alert");
          input.insertAdjacentElement("afterend", errorSpan);
        }

        if (!input.value.trim()) {
          valid = false;
          errorSpan.textContent = `${input.name || input.id} é obrigatório.`;
          input.setAttribute("aria-describedby", errorId);
        } else {
          errorSpan.textContent = "";
          input.removeAttribute("aria-describedby");
        }
      });
      if (!valid) e.preventDefault();
    });
  });
});
