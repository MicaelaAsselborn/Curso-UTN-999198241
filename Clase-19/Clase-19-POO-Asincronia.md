# 🏗️ Clase 19: Introducción a POO y Asincronía

## 🎯 Objetivos de la Clase

- Comprender los conceptos básicos de Programación Orientada a Objetos (POO)
- Aprender a crear y usar objetos y clases en JavaScript
- Introducir la asincronía y el uso de promesas
- Aplicar ejemplos prácticos de POO y asincronía

---

## 🧱 ¿Qué es la Programación Orientada a Objetos?

La **POO** es un paradigma de programación basado en el uso de objetos, que contienen propiedades y métodos.

### 📝 Clases y Objetos en JavaScript

```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

let juan = new Persona('Juan', 30);
juan.saludar();
```

---

## ⚡ Introducción a la Asincronía

La asincronía permite ejecutar tareas que llevan tiempo (como peticiones a servidores) sin bloquear el resto del código.

- **Hilo único**: JavaScript corre en un único hilo con una pila de llamadas (Call Stack).
- **Event Loop**: coordina la ejecución entre el Call Stack, las Web APIs, la Task Queue y la Microtask Queue.
- **Orden típico**: cuando el stack queda libre, primero se vacía la Microtask Queue (promesas), luego se toma una tarea de la Task Queue (por ejemplo `setTimeout`).
- **async/await**: azúcar sintáctica sobre Promesas. `await` "pausa" la función async hasta que la promesa se resuelva o rechace, sin bloquear el hilo principal.

### ⏳ Callbacks

```js
function esperar(ms, callback) {
  setTimeout(callback, ms);
}
esperar(1000, () => {
  console.log('Pasó 1 segundo');
});
```

### 🔗 Promesas

Una **promesa** es un objeto que representa una operación asincrónica cuyo resultado estará disponible en el futuro.

- **Estados**: `pending` → `fulfilled` (resuelta) o `rejected` (rechazada). Una vez resuelta o rechazada, no cambia.
- **Encadenamiento**: maneja resultados con `.then(...)`, errores con `.catch(...)` y limpieza con `.finally(...)`.

```js
let promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Listo!'), 1000);
});

promesa
  .then((mensaje) => console.log(mensaje))
  .catch((err) => console.error('Error:', err))
  .finally(() => console.log('Terminado'));
```

### 🌐 Peticiones HTTP con fetch (PokeAPI)

`fetch` retorna una Promesa que resuelve con un `Response`. Suele convertirse a JSON con `response.json()`.

- **Ejemplo con then/catch**

```js
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((res) => {
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return res.json();
  })
  .then((data) => {
    console.log('Nombre:', data.name, 'ID:', data.id);
  })
  .catch((err) => console.error('Error en fetch:', err));
```

- **Ejemplo con async/await y manejo de errores**

```js
async function getPokemon(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    return { id: data.id, name: data.name, height: data.height };
  } catch (err) {
    console.error('getPokemon error:', err);
    throw err; // re-lanza para permitir manejo externo
  }
}

getPokemon('charizard').then((p) => console.log(p));
```

- **Múltiples requests en paralelo con Promise.all**

```js
async function getMany(names) {
  const results = await Promise.all(names.map((n) => getPokemon(n)));
  console.table(results);
}

getMany(['bulbasaur', 'charmander', 'squirtle']);
```

### 📦 ¿Qué es JSON?

**JSON (JavaScript Object Notation)** es un formato de texto para intercambiar datos. Es legible para humanos y fácil de procesar por máquinas.

- **Tipos soportados**: objetos `{}`, arrays `[]`, strings, números, booleanos y `null`.
- **Diferencia con objetos JS**: en JSON las claves deben ir entre comillas dobles y no admite funciones ni `undefined`.

Ejemplo de JSON válido:

```json
{
  "id": 25,
  "name": "pikachu",
  "types": ["electric"],
  "stats": { "hp": 35, "attack": 55 }
}
```

Convertir entre objeto JS y JSON:

```js
const obj = { id: 25, name: 'pikachu' };
const json = JSON.stringify(obj); // Objeto JS -> JSON (string)
const back = JSON.parse(json); // JSON (string) -> Objeto JS
```

En `fetch`, `response.json()` ya realiza el `JSON.parse` y te entrega un objeto JS listo para usar.

#### ✅ ¿Por qué usar JSON en endpoints?

- **Estándar y lenguaje-agnóstico**: lo entienden casi todos los clientes/servidores (web, mobile, backend en distintos lenguajes).
- **Ligero y legible**: formato de texto simple, más compacto que XML para la mayoría de casos.
- **Soporte nativo**: `JSON.parse`/`JSON.stringify` en JS y equivalentes en otros lenguajes; `fetch().json()` lo facilita aún más.
- **Tipado básico suficiente**: objetos y arrays cubren la mayoría de estructuras de datos de APIs REST.
- **Interoperabilidad**: fácil de enviar por HTTP con `Content-Type: application/json` y ampliamente soportado por herramientas (Postman, cURL, etc.).

##### 📨 Ejemplo: POST con JSON usando fetch

```js
async function crearAlumno(alumno) {
  try {
    const res = await fetch('https://api.ejemplo.com/alumnos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(alumno),
    });

    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json(); // respuesta en JSON -> objeto JS
    console.log('Creado:', data);
    return data;
  } catch (err) {
    console.error('Error POST:', err);
    throw err;
  }
}

crearAlumno({ nombre: 'Ada', notas: [10, 9, 8] });
```

Notas:

- Asegúrate de enviar `Content-Type: application/json` cuando el body es JSON.
- Si llamas a un dominio distinto, puede aplicar **CORS**; el servidor debe permitir el origen del cliente.

---

## 🔗 Demo práctica (mini proyecto)

Para acompañar la clase, se incluye un mini proyecto con ejemplos listos para ejecutar:

- Ruta: `Clase-19/mini-proyecto-asincronia-poo/`
- Archivo principal: `index.html`
- Estructura:
  - `css/styles.css`
  - `js/main.js`
  - `js/modules/poo.js`
  - `js/modules/pokeapi.js`

Notas de ejecución (usa ES Modules):

- Abre con un servidor local (recomendado). Opciones:
  - Extensión "Live Server" del IDE.
  - O cualquier servidor estático simple.
- Luego navega a `index.html` y usa los botones para disparar cada ejemplo.

---

## 🚀 Ejercicio Práctico

### 📝 Escribe un script que:

1. Defina una clase `Producto` con nombre y precio, y un método para mostrar información
2. Cree un array de productos y recorra mostrando cada uno
3. Use una promesa para simular la carga de productos (con `setTimeout`)

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crea un archivo HTML con un script que:

- Defina una clase `Alumno` con nombre y notas (array)
- Agregue varios alumnos a un array
- Calcule el promedio de cada alumno usando un método de la clase

---

## 📚 Recursos Adicionales

- [MDN Clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [MDN Promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [PokeAPI Docs](https://pokeapi.co/docs/v2)

---

## ❓ Preguntas Frecuentes

### ¿Para qué sirve la POO?

- Para organizar el código y modelar entidades del mundo real

### ¿Qué es una promesa?

- Un objeto que representa un valor que estará disponible en el futuro

### ¿Cuándo usar asincronía?

- Al trabajar con datos externos, temporizadores, etc.

---

¡Muy bien! Ahora puedes crear objetos y manejar tareas asincrónicas en JavaScript. En la próxima clase veremos JSON y haremos un repaso general. 📊

---

_📧 **Contacto:** Si tienes dudas sobre POO o asincronía, consulta durante la clase o por los canales de comunicación._
