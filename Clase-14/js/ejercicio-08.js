// Pide al usuario una frase
// Muestra la frase invertida (al revés)

const p8 = document.getElementById('p8');

p8.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = p8.querySelector('#texto-p8').value.toLowerCase();
  console.log(texto[1]);

  let result = '';

  for (let i = texto.length - 1; i >= 0; i--) {
    result += texto[i];
  }

  console.log(result);

  document.getElementById('mensaje-p8').textContent = result;
});
