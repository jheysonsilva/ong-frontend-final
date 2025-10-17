document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.contraste-btn');
    if (!btn) return;

    // Ativa contraste se já estiver salvo
    if (localStorage.getItem('altoContraste') === 'true') {
        document.body.classList.add('alto-contraste');
    }

    // Alterna contraste ao clicar
    btn.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
        localStorage.setItem('altoContraste', document.body.classList.contains('alto-contraste'));
    });
});
