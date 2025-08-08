// esto seria una variable
let saludo = 'Bienvenido a JS';

// alert(saludo); // corta la ejecucion

// console.time();
// console.log(saludo);
// // ...
// console.timeEnd();
// console.clear();
// console.error(saludo);

let numero = 10;
let texto = 'Hola';
let activo = true;
let nada = null;
let indefinido;

console.log(numero);
console.log(texto);
console.log(activo);
console.log(nada);
console.log(indefinido);

// nueva asignacion
numero += 115; // 10 + 115
console.log(numero);

// Polimorfismo

numero = 'hola';
console.log(numero);

console.clear();

// En el html yo tengo un h1 con un texto al que le quiero agregar el 2025

// 1) buscar ese h1 en el DOM
let title = document.querySelector('h1'); // nodo

console.log(title);

title.innerText += 2025;

console.log('a' + 1, typeof ('a' + 1)); // 'a1'
console.log('1' + 1, typeof ('1' + 1)); // '11'
console.log(1 + 'a', typeof (1 + 'a')); // '1a'
console.log(1 + '1', typeof (1 + '1')); // '11'
console.log('a' + null, typeof ('a' + null)); // '11'

let li = document.querySelectorAll('ul li'); // da como resultado un NodeList
console.log(document.querySelectorAll('ul li'));
console.log(li);

let array = [];

array.push(1);
array.push(2);
array.push(3);
array.push('a');
array.push(4);
array.pop();
array.push(true);
array.push(undefined);
array.push(null);

console.log(array);

// console.log(pepito);
// let pepito = 'pepito';
