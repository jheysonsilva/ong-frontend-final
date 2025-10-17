document.addEventListener('DOMContentLoaded', () => {
    const btnContraste = document.querySelector('.contraste-btn');
    btnContraste.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });
});
