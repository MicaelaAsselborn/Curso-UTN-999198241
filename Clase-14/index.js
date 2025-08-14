const registroForm = document.getElementById('registroForm');

registroForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // debugger;

  const nombre = registroForm.querySelector('#nombre').value;
  const edad = registroForm.querySelector('#edad').value;

  console.log('nombre y edad', nombre, edad);
  // console.log(e);

  const ejemplo = 'hola, ' + nombre + ' tienes ' + edad + 'años';
  const ejemploTwo = `¡Hola, ${nombre}! Tienes ${edad} años.`;

  document.getElementById('mensaje').textContent = ejemploTwo;
});
