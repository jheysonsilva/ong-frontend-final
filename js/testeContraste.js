document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.contraste-btn');
    console.log('Botão encontrado?', btn); // 👈 vamos ver se ele acha
    btn.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
        console.log('Botão clicado, contraste ativo?', document.body.classList.contains('alto-contraste'));
    });
});
