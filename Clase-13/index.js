console.log('Vamos con los IF!!!');
// Pepito:
let edadPersona = 17;
let vipPersona = true; // es vip si es true
// dni, altura, etc.

let mensaje = '';

const edadMinima = 18;

// 1º variables y tipos
// boleanos, string, numeros, undefined, null, array (listas)
// 2º condiciones (if)
// 3º funciones
//

// Booleanos: 0 y 1 || false y true
// false >>> 0
// true >>> 1

// quiero saber si la persona tiene la edad suficiente para entrar a la fiesta
const condition = edadPersona >= edadMinima;

// if (condition) {
//   // true
//   console.log('fiestaaaaaa!!!!');
// } else {
//   // false
//   console.log('no es matine esto, anda a tu casa');
// }

const doble = 1 == '1';
const triple = 1 === '1';
console.log('doble', doble);
console.log('triple', triple);
console.log('not', !false); // true

if (undefined) {
  console.log('undefined true'); // 5
} else {
  console.log('undefined false'); // 1
}

if (null) {
  console.log('null true'); // 4
} else {
  console.log('null false'); // 2
}

//yo quiero que si es mayor de edad pase y ademas si es vip le tengo que avisar
// mayor o igual
if (edadPersona >= edadMinima) {
  console.log('fiestaaaaaa!!!!');
  if (vipPersona) {
    console.log('che sos vip, pasa por aca!!');
  }
} else {
  console.log('no es matine esto, anda a tu casa');
}
// menor
if (edadPersona < edadMinima) {
  console.log('no es matine esto, anda a tu casa');
} else {
  console.log('fiestaaaaaa!!!!');
  if (vipPersona) {
    console.log('che sos vip, pasa por aca!!');
  }
}

// si consultas lo mismo mas veces entonces esta mal
// if (edadPersona >= edadMinima && vipPersona) {
//   console.log('fiesta y sos vip');
// } else if (edadPersona >= edadMinima) {
//   console.log('fiestaaaaaa!!!!');
// } else {
//   console.log('no es matine esto, anda a tu casa');
// }

// if (edadPersona >= edadMinima || vipPersona) {
//   console.log('fiestaaaaaa!!!!');
//   if (vipPersona) {
//     console.log('sos vip');
//   }
// } else {
//   console.log('no es matine esto, anda a tu casa');
// }

let usuario = 'admin';
let pass = '12345';

// and &&, or || y el not !

console.log('usuario', usuario === 'admin');
console.log('pass', pass === '1234');
// console.log(usuario === 'admin' && pass === '1234');

if (usuario === 'admin' && pass === '1234') {
  console.log('Acceso permitido');
} else {
  console.log('algo esta mal');
}

// let edad = prompt('Por favor, ingresa su edad:', 0);

// if (edad != null) {
//   console.log('la edad es', edad); //
// } else {
//   console.log('necesito la edad');
// }
