function saludar(nombre) {
  console.log('Hola, ' + nombre + '!');
}

function retorno() {
  return 'como va?';
}

// saludar('Ana');
// saludar();

const r = retorno();

// console.log(r);

function ambos(nombre) {
  saludar(nombre);
  console.log(retorno());
}

// ambos('pepe');

function sumar(a, b) {
  return a + b;
}
let resultado = sumar(3, 5); // 8
// console.log(resultado);

// console.log(sumar(10, 5));
// console.log(sumar(9, 4));
// console.log(sumar(2, 30));
// console.log(sumar(13, 8));

function isValid() {
  return Math.floor(Math.random() * 100) + 1 > 50;
}

// Min 3 caracteres y maximo 16
function isValidName(nombre) {
  console.log(nombre.length);
  // if (nombre.length >= 3 && nombre.length <= 16) {
  //   return true;
  // } else {
  //   return false;
  // }

  return nombre.length >= 3 && nombre.length <= 16;
}

// console.log(isValid());

console.log('pe', isValidName('pe'));
console.log('pep', isValidName('pep'));
console.log('pepe', isValidName('pepe'));
console.log('pepeeeeeeeeeeee', isValidName('pepeeeeeeeeeeee')); // 15
console.log('pepeeeeeeeeeeeee', isValidName('pepeeeeeeeeeeeee')); // 16
console.log('pepeeeeeeeeeeeeep', isValidName('pepeeeeeeeeeeeeep')); // 17

// Siempre es lo mismo defino una funcion
// la asigno o directamente la ejecuto
// y depende del tipo uso su resultado o simplement lo muestro

console.clear();

// Utiliza el bucle while para mostrar los números del 1 al 5
// inicializa el contador en 0
// mientras el contador sea menor a 5
// incrementa el contador en 1
let contador = 6;
while (contador <= 5) {
  console.log(contador);
  contador++;
}
console.clear();

// Utiliza el bucle for para mostrar los números del 1 al 5
// inicializa el contador en 0
// mientras el contador sea menor a 5
// incrementa el contador en 1
for (let i = 0; i < 5; i++) {
  console.log('i', i);
}

for (let i = 0; i <= 5; i++) {
  console.log('i2', i);
}

for (let i = 0; i <= 5 - 1; i++) {
  console.log('i3', i);
}

// Utiliza el bucle for para mostrar los números del 1 al 5
// inicializa el contador en 0
// mientras el contador sea menor a 10
// incrementa el contador en 1
// si el contador es igual a 5, rompe el ciclo
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log('i4', i);
}

console.clear();
//	  						0          1          2         3
const frutas = ['manzana', 'banana', 'naranja', 'pera'];

console.log('cantidad de frutas', frutas.length);

// Iteración tradicional con for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
console.clear();

// Equivalente con forEach
frutas.forEach(function (fruta, i) {
  console.log(i, fruta);

  if (fruta == 'naranja') {
    console.log('dame 10');
  }
});

// Con arrow function
frutas.forEach((fruta, i) => {
  console.log(i, fruta);

  if (fruta == 'banana') {
    console.log('dame 15');
  }
});
console.clear();

const numeros = [4, 2, 5, 1, 3];
const copia = [...numeros];

copia.sort();

console.log(numeros); // [4, 2, 5, 1, 3]
console.log(copia); // [1, 2, 3, 4, 5]

const fruits = ['manzana', 'banana', 'naranja', 'pera'];

const copyFruits = [...fruits];
copyFruits.sort();
console.log(fruits);
console.log(copyFruits);

const newFruitsArray = fruits.map((f) => {
  const cantLetras = f.length;
  const result = `${f}-${cantLetras}`;
  return result;
});

console.log(newFruitsArray);
console.log(fruits);

// Ejemplo combinando métodos
let numeritos = [1, 2, 3, 4, 5, 6];

console.log(numeritos.map((n) => n / 2));

numeritos = numeritos
  .map((n) => n / 2) // Duplica cada número
  .filter((n) => n % 2 === 0); // Filtra números pares

console.log(numeritos); // [4, 8]
