document.addEventListener('DOMContentLoaded', () => {
    const btnContraste = document.querySelector('.contraste-btn');

    if (!btnContraste) return;

    const toggleContraste = () => {
        document.body.classList.toggle('alto-contraste');

        if (document.body.classList.contains('alto-contraste')) {
            localStorage.setItem('altoContraste', 'true');
        } else {
            localStorage.setItem('altoContraste', 'false');
        }
    };

    btnContraste.addEventListener('click', toggleContraste);

    const preferencia = localStorage.getItem('altoContraste');
    if (preferencia === 'true') {
        document.body.classList.add('alto-contraste');
    }
});
