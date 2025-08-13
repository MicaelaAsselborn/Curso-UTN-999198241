# 🔄 Clase 13: JS – Condicionales, Operadores y Arreglos

## 🎯 Objetivos de la Clase

- Comprender el uso de estructuras de control (condicionales)
- Utilizar operadores lógicos y de comparación
- Aprender a trabajar con arreglos (arrays) en JavaScript
- Escribir scripts que tomen decisiones y manejen listas de datos

---

## 🧩 Estructuras de Control: Condicionales

### 🔍 ¿Qué es una estructura condicional?

Permite ejecutar diferentes bloques de código según condiciones lógicas.

### 📝 Sentencia if/else

```js
let edad = 18;
if (edad >= 18) {
  console.log('Eres mayor de edad');
} else {
  console.log('Eres menor de edad');
}
```

### 🧑‍⚖️ else if

```js
let nota = 7;
if (nota >= 9) {
  console.log('Excelente');
} else if (nota >= 6) {
  console.log('Aprobado');
} else {
  console.log('Desaprobado');
}
```

### 🔄 Operador ternario

```js
let mensaje = edad >= 18 ? 'Mayor' : 'Menor';
```

---

## ⚖️ Operadores Lógicos y de Comparación

### Operadores de comparación

- `==` Igualdad (no estricta)
- `===` Igualdad estricta (tipo y valor)
- `!=` Distinto
- `!==` Distinto estricto
- `>` Mayor que
- `<` Menor que
- `>=` Mayor o igual
- `<=` Menor o igual

### Operadores lógicos

- `&&` AND (y)
- `||` OR (o)
- `!` NOT (no)

```js
let usuario = 'admin';
let pass = '1234';
if (usuario === 'admin' && pass === '1234') {
  console.log('Acceso permitido');
}
```

---

## 📦 Arreglos en JavaScript

### 🔢 ¿Qué es un arreglo (array)?

Una colección ordenada de valores, accesibles por índice.

```js
let frutas = ['manzana', 'banana', 'pera'];
console.log(frutas[0]); // manzana
```

### 📋 Métodos básicos

- `push()`: agrega al final
- `pop()`: quita el último
- `shift()`: quita el primero
- `unshift()`: agrega al inicio
- `length`: cantidad de elementos

```js
frutas.push('naranja');
let primera = frutas.shift();
console.log(frutas.length);
```

### 🔁 Recorrer un array

```js
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// O con for...of
for (let fruta of frutas) {
  console.log(fruta);
}
```

---

## 🚀 Ejercicio Práctico

### 📝 Escribe un script que:

1. Pida al usuario su edad (usa `prompt()`)
2. Muestre un mensaje personalizado según la edad
3. Cree un array con 3 colores favoritos y los muestre en consola

```js
let edad = prompt('Por favor, ingresa su edad:', 0);

if (edad != null) {
  //
} else {
  //
}
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crea un archivo HTML con un script que:

- Pida el nombre y la edad del usuario con `prompt()`
- Si la edad es mayor o igual a 18, muestre "Acceso permitido"
- Si no, muestre "Acceso denegado"
- Crea un array con 5 películas favoritas y recórrerlo mostrando cada una en consola

---

## 📚 Recursos Adicionales

- [MDN Arrays](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [W3Schools JS Arrays](https://www.w3schools.com/js/js_arrays.asp)
- [MDN if...else](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)

---

## ❓ Preguntas Frecuentes

### ¿Qué diferencia hay entre `==` y `===`?

- `==` compara solo valor
- `===` compara valor y tipo (más seguro)

### ¿Cómo agregar o quitar elementos de un array?

- Usar `push`, `pop`, `shift`, `unshift`

### ¿Qué pasa si accedo a un índice que no existe?

- El resultado es `undefined`

---

¡Muy bien! Ahora sabes tomar decisiones y trabajar con listas en JavaScript. En la próxima clase, ¡practicaremos todo lo aprendido! 🧑‍💻

---

_📧 **Contacto:** Si tienes dudas sobre condicionales o arrays, consulta durante la clase o por los canales de comunicación._
