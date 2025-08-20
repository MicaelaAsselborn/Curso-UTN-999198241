// Muestra la suma, resta, multiplicación y división de ambos
const p2 = document.getElementById('p2');

p2.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = p2.querySelectorAll('input[type="number"]');
  console.log(inputs);

  let suma, resta, multiplicacion, division;

  if (inputs.length) {
    const i1 = Number(inputs[0].value);
    const i2 = Number(inputs[1].value);
    suma = i1 + i2;
    resta = i1 - i2;
    multiplicacion = i1 * i2;
    division = i1 / i2;
  }

  console.log(suma);
  console.log(resta);
  console.log(multiplicacion);
  console.log(division);

  const result = `suma: ${suma}, resta: ${resta}, multiplicacion: ${multiplicacion}, division: ${division}`;

  document.getElementById('mensaje-p2').textContent = result;
});
