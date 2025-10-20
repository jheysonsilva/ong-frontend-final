# 🌟 ONG Esperança Viva – Plataforma Web Front-End (Atividade IV)

[🌐 **Acesse o site atualizado**](https://jheysonsilva.github.io/ong-frontend-final/)

---

## **📖 Sobre o Projeto**

A **ONG Esperança Viva** é uma plataforma web desenvolvida como **Atividade IV da disciplina de Desenvolvimento Front-End para Web**, consolidando todo o aprendizado das etapas anteriores e implementando **melhorias finais de usabilidade, responsividade e acessibilidade**.

Nesta versão, o foco foi:

* Finalizar a centralização e organização de conteúdos  
* Garantir que **todos os elementos estejam acessíveis**, incluindo o recurso de **alto contraste**  
* Padronizar o **layout dos projetos** e o **tamanho das imagens**  
* Ajustar botões, formulários e textos para uma **experiência de usuário completa**

---

## **🚀 Funcionalidades e Melhorias**

### 🏠 **Página Inicial (`index.html`)**
- Informações institucionais revisadas e centralizadas  
- Texto de Missão, Visão e Valores destacado  
- Contato organizado com email, telefone e endereço  
- Layout responsivo em todos os dispositivos  

### 📂 **Projetos Sociais (`projetos.html`)**
- Cards dos projetos **Mãos Solidárias**, **Criança Feliz** e **Alimente o Futuro** padronizados  
- Botão **“Quero ser voluntário”** centralizado  
- Seção de doações com Pix e banco solidário  
- Responsividade total  
- Recurso de **auto contraste** fixo no canto inferior direito  

### 📝 **Cadastro de Voluntário/Doador (`cadastro.html`)**
- Formulário completo e validado via **JavaScript**  
- Validação de CPF, e-mail e campos obrigatórios  
- Armazenamento local (`localStorage`)  
- Alertas de sucesso e feedback visual  
- Responsividade e acessibilidade total  

---

## **💻 Tecnologias Utilizadas**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Flexbox](https://img.shields.io/badge/Flexbox-2965f1?style=flat&logo=css3&logoColor=white)
![Grid](https://img.shields.io/badge/CSS%20Grid-ff9800?style=flat&logo=css3&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?style=flat&logo=github&logoColor=white)

- **HTML5 semântico**
- **CSS3 moderno** (Flexbox, Grid, variáveis e centralização)
- **JavaScript** para interatividade e validação
- **Responsividade total**
- **Acessibilidade (WCAG 2.1 AA)**
- **Git e GitHub Pages** para versionamento e publicação

---

## **🎨 Destaques da Versão IV**

- Centralização de todos os textos importantes  
- Cards de projetos do mesmo tamanho e alinhados  
- Botão de voluntariado centralizado  
- Layout responsivo em grid e flexbox  
- Formulário validado e interativo  
- Barra de **auto contraste** funcional  
- Correção de bugs e ajustes visuais finais  

---

## **📂 Estrutura do Repositório**

```

ong-frontend-final/
│
├─ index.html          # Página inicial
├─ projetos.html       # Projetos sociais e doações
├─ cadastro.html       # Cadastro de voluntários/doadores
│
├─ css/
│   └─ style.css       # Arquivo de estilos principal
│
├─ js/
│   ├─ menu.js           # Menu responsivo e acessível
│   ├─ validacaoForm.js  # Validação de formulário
│   ├─ renderProjetos.js # Renderização dinâmica de projetos
│   └─ acessibilidade.js # Botão de alto contraste
│
├─ img/                # Imagens da ONG
│   ├─ crianca-feliz.jpg
│   ├─ maos-solidarias.jpg
│   └─ ong-fachada.jpg
│
└─ README.md           # Documentação do projeto

```

---

## **🧩 GitFlow e Controle de Versão Profissional**

O fluxo de versionamento do projeto segue o padrão **GitFlow**, com branches específicas para desenvolvimento, features e releases.

### **Fluxo aplicado:**
```

main → develop → feature/menu-acessivel → release/v1.0.0 → tag v1.0.0

```

### **Branches principais**
- `main` → produção  
- `develop` → desenvolvimento  
- `feature/menu-acessivel` → implementação do menu acessível (mergeada)  
- `release/v1.0.0` → versão estável final  

### **Commits semânticos**
- `feat(menu): torna menu navegável por teclado e atualiza aria-expanded`
- `fix(form): corrige validação de e-mail`
- `docs(readme): atualiza documentação`

### **Tag e Release**
- **Tag:** `v1.0.0`  
- **Release publicada:** [v1.0.0 - Versão inicial estável](https://github.com/jheysonsilva/ong-frontend-final/releases)

### **Issues e PRs**
- Issue #6 — Implementar menu acessível  
- Merge da feature `menu-acessivel` na branch `develop` realizado com sucesso  
- PR documentado no README como evidência de GitFlow  

---

## **🎯 Objetivos da Atividade IV**

- Centralizar conteúdos e melhorar layout  
- Garantir acessibilidade total (WCAG 2.1 AA)  
- Padronizar imagens e botões  
- Consolidar responsividade e boas práticas  
- Publicar versão final no GitHub Pages como **portfólio completo**

---

## **🔗 Versões do Projeto**

📗 **Atividade I – Estrutura Base (HTML):**  
👉 [https://jheysonsilva.github.io/ong-frontend/](https://jheysonsilva.github.io/ong-frontend/)

🎨 **Atividade II – Versão Estilizada (HTML + CSS):**  
👉 [https://jheysonsilva.github.io/ong-frontend-estilizado/](https://jheysonsilva.github.io/ong-frontend-estilizado/)

⚙️ **Atividade III – Versão Interativa (HTML + CSS + JS):**  
👉 [https://jheysonsilva.github.io/ong-frontend-interativo/](https://jheysonsilva.github.io/ong-frontend-interativo/)

🌟 **Atividade IV – Versão Final (HTML + CSS + JS + Acessibilidade):**  
👉 [https://jheysonsilva.github.io/ong-frontend-final/](https://jheysonsilva.github.io/ong-frontend-final/)

---

## **👨‍💻 Autor**

**Jheyson Silva**  
Desenvolvedor Back-End & Front-End em formação  
📚 *Curso:* Análise e Desenvolvimento de Sistemas  
🏫 *Atividade IV — Desenvolvimento Front-End para Web (HTML, CSS e JS)*  
