document.addEventListener('DOMContentLoaded', () => {
  const btnContraste = document.querySelector('.contraste-btn');

  if (localStorage.getItem('altoContraste') === 'true') {
    document.body.classList.add('alto-contraste');
  }

  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
    localStorage.setItem(
      'altoContraste',
      document.body.classList.contains('alto-contraste') ? 'true' : 'false'
    );
  });
});
