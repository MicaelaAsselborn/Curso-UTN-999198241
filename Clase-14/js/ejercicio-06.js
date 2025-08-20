// Crea un array con varios nombres
// Pide al usuario un nombre y verifica si está en el array
// Muestra un mensaje indicando si se encontró o no

const nombres = [
  'nicolas',
  'matias',
  'alejandro',
  'vicente',
  'maximo',
  'Micaela',
  'valentin',
].map((n) => n.toLowerCase());

const p6 = document.getElementById('p6');

p6.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = p6.querySelector('#nombre-p6').value.toLowerCase();

  const isExist = nombres.includes(nombre);
  console.log(isExist);
  const result = `El nombre: ${nombre} ${isExist ? 'existe' : 'no existe'} `;

  document.getElementById('mensaje-p6').textContent = result;
});
