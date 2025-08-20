# ⚙️ Clase 15: JS – Funciones y Ciclos

## 🎯 Objetivos de la Clase

- Comprender qué es una función y su utilidad
- Aprender a declarar y utilizar funciones en JavaScript
- Introducir los conceptos de bucles: for y while
- Aplicar funciones y ciclos para resolver problemas

---

## 🧩 ¿Qué es una Función?

Una función es un bloque de código reutilizable que realiza una tarea específica.

### 📝 Declaración y uso de funciones

```js
function saludar(nombre) {
  console.log('Hola, ' + nombre + '!');
}
saludar('Ana');
```

### 🔄 Parámetros y retorno

```js
function sumar(a, b) {
  return a + b;
}
let resultado = sumar(3, 5); // 8
```

### 🆚 Funciones declaradas vs expresadas

```js
// Declarada
function hola() { ... }
// Expresada
const hola = function() { ... };
```

### 🏹 Arrow Functions (Funciones Flecha)

Las arrow functions son una forma más concisa de escribir funciones en JavaScript, introducidas en ES6.

```js
// Forma básica
const saludar = (nombre) => {
  return 'Hola, ' + nombre + '!';
};

// Si solo hay un parámetro, los paréntesis son opcionales
const cuadrado = (x) => {
  return x * x;
};

// Si el return es de una sola línea, podemos omitir las llaves y el return
const sumar = (a, b) => a + b;

// Si no hay parámetros, usamos paréntesis vacíos
const holaMundo = () => console.log('¡Hola Mundo!');

// Retornando un objeto (necesita paréntesis para evitar confusión)
const crearPersona = (nombre, edad) => ({
  nombre: nombre,
  edad: edad,
});
```

#### Características importantes:

1. No tienen su propio `this` (heredan el `this` del contexto donde fueron definidas)
2. No pueden ser usadas como constructores (no tienen propiedad `prototype`)
3. No tienen acceso al objeto `arguments`
4. Más concisas y legibles para funciones simples

---

## 🔁 Ciclos en JavaScript

### 🔄 Bucle while

```js
// Utiliza el bucle while para mostrar los números del 1 al 5
// inicializa el contador en 0
// mientras el contador sea menor a 5
// incrementa el contador en 1
let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++;
}
```

### 🔂 Bucle for

```js
// Utiliza el bucle for para mostrar los números del 1 al 5
// inicializa el contador en 0
// mientras el contador sea menor a 5
// incrementa el contador en 1
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 🛑 Romper un ciclo: break

```js
// Utiliza el bucle for para mostrar los números del 1 al 5
// inicializa el contador en 0
// mientras el contador sea menor a 10
// incrementa el contador en 1
// si el contador es igual a 5, rompe el ciclo
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
```

### 🔄 Métodos de Iteración de Arrays

JavaScript proporciona métodos integrados para iterar sobre arrays de manera más declarativa y funcional.

#### forEach

El método `forEach` ejecuta una función por cada elemento del array.

```js
const frutas = ['manzana', 'banana', 'naranja'];

// Iteración tradicional con for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Equivalente con forEach
frutas.forEach(function (fruta) {
  console.log(fruta);
});

// Con arrow function
frutas.forEach((fruta) => console.log(fruta));
```

#### map

El método `map` crea un nuevo array con los resultados de la función aplicada a cada elemento.

```js
const numeros = [1, 2, 3, 4];

// Duplicar cada número
const duplicados = numeros.map((numero) => numero * 2);
console.log(duplicados); // [2, 4, 6, 8]

// Convertir a string
const strings = numeros.map((numero) => `Número: ${numero}`);
console.log(strings); // ["Número: 1", "Número: 2", ...]
```

#### Diferencias clave:

1. **`forEach`**:

   - No retorna nada (undefined)
   - Ideal para ejecutar efectos secundarios
   - No modifica el array original

2. **`map`**:
   - Retorna un nuevo array con los resultados
   - No modifica el array original
   - Ideal para transformar datos
   - Encadenable con otros métodos (filter, reduce, etc.)

```js
// Ejemplo combinando métodos
const resultado = [1, 2, 3, 4, 5];
resultado
  .filter((n) => n % 2 === 0) // Filtra números pares
  .map((n) => n * 2); // Duplica cada número

console.log(resultado); // [4, 8]
```

**Nota importante**: Tanto `forEach` como `map` son métodos de los arrays en JavaScript y forman parte de la programación funcional. Son preferibles a los bucles tradicionales cuando se trabaja con colecciones de datos, ya que hacen el código más legible y menos propenso a errores.

---

## 🚀 Ejercicio Práctico

### 📝 Escribe un script que:

1. Defina una función que reciba una edad y devuelva si es mayor de edad
2. Use un ciclo for para mostrar los números del 1 al 10
3. Use un ciclo while para pedir nombres hasta que el usuario escriba "fin"

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crea un archivo HTML con un script que:

- Defina una función para calcular el cuadrado de un número
- Pida 5 números al usuario y muestre el cuadrado de cada uno usando la función

---

## 📚 Recursos Adicionales

- [Funciones en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
- [Bucles en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)

---

## ❓ Preguntas Frecuentes

### ¿Para qué sirven las funciones?

- Para organizar y reutilizar código

### ¿Cuál es la diferencia entre for y while?

- `for`: cuando conoces el número de repeticiones
- `while`: cuando depende de una condición

### ¿Qué pasa si no uso return?

- La función devuelve `undefined`

---

¡Gran trabajo! Ahora sabes crear funciones y usar ciclos en JavaScript. En la próxima clase, ¡practicaremos aún más! 🔁

---

_📧 **Contacto:** Si tienes dudas sobre funciones o ciclos, consulta durante la clase o por los canales de comunicación._
