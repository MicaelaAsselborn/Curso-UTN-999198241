const p1 = document.getElementById('p1');

p1.addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = p1.querySelector('#nombre-p1').value;
  const edad = p1.querySelector('#edad-p1').value;

  const result = `¡Hola, ${nombre}! Tienes ${edad} años.`;

  document.getElementById('mensaje-p1').textContent = result;
});
