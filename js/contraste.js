document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.contraste-btn');

    if (!btn) return;

    // Aplica contraste se já estiver salvo
    if (localStorage.getItem('altoContraste') === 'true') {
        document.body.classList.add('alto-contraste');
    }

    btn.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');

        // Salva a preferência
        if (document.body.classList.contains('alto-contraste')) {
            localStorage.setItem('altoContraste', 'true');
        } else {
            localStorage.setItem('altoContraste', 'false');
        }
    });
});
