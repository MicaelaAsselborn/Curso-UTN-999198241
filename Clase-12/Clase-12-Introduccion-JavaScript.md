# 🖥️ Clase 12: Introducción a JavaScript – Variables y Operadores

## 🎯 Objetivos de la Clase

- Comprender qué es JavaScript y su importancia en el desarrollo web
- Aprender cómo declarar y usar variables en JavaScript
- Conocer los tipos de datos básicos
- Utilizar operadores aritméticos y de asignación
- Escribir los primeros scripts en JS

---

## 📚 ¿Qué es JavaScript?

### 🔍 Definición

**JavaScript** es un lenguaje de programación interpretado, orientado a objetos, utilizado principalmente para crear páginas web dinámicas e interactivas.

### 🏆 Características Principales

- **Lenguaje de programación**: Permite lógica y manipulación de datos
- **Interpretado**: No requiere compilación
- **Multiparadigma**: Soporta programación orientada a objetos, funcional y procedural
- **Ejecuta en el navegador**: Pero también en servidores (Node.js)

### 📖 Breve Historia

- **1995:** Brendan Eich crea JavaScript en Netscape
- **1997:** Se estandariza como ECMAScript
- **Actualidad:** Es uno de los lenguajes más populares del mundo

---

## 🏗️ Variables en JavaScript

### 📝 ¿Qué es una variable?

Una variable es un espacio en memoria donde se almacena información para ser utilizada y modificada por el programa.

### 🏷️ Declaración de Variables

- `var`: Forma antigua, poco recomendada
- `let`: Recomendada para variables que cambian
- `const`: Para valores constantes

```js
let nombre = "Juan";
const PI = 3.1416;
var edad = 25;
```

### 📋 Tipos de Datos Básicos

- **Number**: Números (enteros y decimales)
- **String**: Cadenas de texto
- **Boolean**: Verdadero o falso (`true`, `false`)
- **Null** y **Undefined**

```js
let numero = 10;
let texto = "Hola";
let activo = true;
let nada = null;
let indefinido;
```

---

## ➕ Operadores en JavaScript

### ➗ Operadores Aritméticos

- `+` Suma
- `-` Resta
- `*` Multiplicación
- `/` División
- `%` Módulo (resto)

```js
let suma = 5 + 3; // 8
let producto = 4 * 2; // 8
```

### 🧮 Operadores de Asignación

- `=` Asignación simple
- `+=`, `-=`, `*=`, `/=` Modifican y asignan

```js
let x = 10;
x += 5; // x ahora es 15
```

---

## 🚀 Primer Script en JavaScript

### 📄 Ejemplo Básico

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Mi primer JS</title>
  </head>
  <body>
    <h1>¡Hola JavaScript!</h1>
    <script>
      let saludo = "Bienvenido a JS";
      alert(saludo);
    </script>
  </body>
</html>
```

---

## 🏋️‍♂️ Ejercicio Práctico

### 📝 Escribe un script que:

1. Declare una variable con tu nombre
2. Declare una variable con tu edad
3. Muestre un mensaje en pantalla con ambos datos usando `alert()`

---

## 🌐 Introducción a la Manipulación del DOM

### 🎯 ¿Qué es el DOM?

El **Document Object Model (DOM)** es una representación en forma de árbol de los elementos de una página web. JavaScript puede interactuar con el DOM para:
- Modificar elementos HTML
- Cambiar atributos
- Cambiar estilos CSS
- Reaccionar a eventos

### 🔍 Búsqueda de Elementos

```javascript
// Por ID
document.getElementById('miId');

// Por clase (devuelve una colección)
document.getElementsByClassName('miClase');

// Por etiqueta (devuelve una colección)
document.getElementsByTagName('p');

// Selectores modernos (devuelve el primero que encuentre)
document.querySelector('.miClase');

// Selectores modernos (devuelve todos los que coincidan)
document.querySelectorAll('p.miClase');
```

### ✏️ Modificación del Contenido

```javascript
// Cambiar contenido de texto
elemento.textContent = 'Nuevo texto';

// Cambiar HTML interno
elemento.innerHTML = '<strong>Texto</strong> en negrita';

// Cambiar atributos
elemento.setAttribute('atributo', 'valor');
let valor = elemento.getAttribute('atributo');

// Cambiar estilos
elemento.style.color = 'red';
elemento.style.fontSize = '20px';
```

### 📝 Introducción a los Formularios HTML

Los formularios son elementos clave en las páginas web que permiten a los usuarios ingresar y enviar información. Un formulario básico incluye:

```html
<form id="miFormulario">
    <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
    </div>
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div>
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje"></textarea>
    </div>
    <button type="submit">Enviar</button>
</form>
```

### 🖱️ Manejo de Eventos

JavaScript permite interactuar con los elementos de la página a través de eventos. Los eventos más comunes incluyen:

```javascript
// Evento de clic en un botón
const boton = document.querySelector('button');
boton.addEventListener('click', function() {
    console.log('¡Botón clickeado!');
});

// Evento de envío de formulario
const formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita que la página se recargue
    
    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    console.log('Formulario enviado:', { nombre, email, mensaje });
    
    // Aquí podrías validar los datos o enviarlos a un servidor
});

// Otros eventos comunes
const input = document.querySelector('input');
input.addEventListener('input', function() {
    console.log('El valor del input cambió:', this.value);
});

input.addEventListener('focus', function() {
    console.log('El input recibió el foco');
});

input.addEventListener('blur', function() {
    console.log('El input perdió el foco');
});
```

### 📝 Ejemplo Práctico

```html
<button id="miBoton">Haz clic</button>
<p id="miParrafo">Texto original</p>

<script>
    const boton = document.getElementById('miBoton');
    const parrafo = document.getElementById('miParrafo');
    
    boton.addEventListener('click', function() {
        parrafo.textContent = '¡Texto cambiado!';
        parrafo.style.color = 'blue';
    });
</script>
```

### 📌 Buenas Prácticas
1. Usa `querySelector` y `querySelectorAll` para mayor flexibilidad
2. Almacena referencias a elementos en variables constantes
3. Usa `textContent` en lugar de `innerHTML` cuando sea posible por seguridad
4. Siempre usa `addEventListener` en lugar de atributos HTML como `onclick`

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crea un archivo HTML y usa un `<script>` para declarar tres variables: tu nombre, tu edad y tu ciudad. Muestra un mensaje en pantalla con esa información.

---

## 📚 Recursos Adicionales

- [MDN JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [W3Schools JavaScript](https://www.w3schools.com/js/)
- [JavaScript.info](https://es.javascript.info/)

---

## ❓ Preguntas Frecuentes

### ¿Cuál es la diferencia entre `let`, `var` y `const`?
- `let`: Variable de bloque, puede cambiar
- `const`: Constante, no puede reasignarse
- `var`: Antigua, alcance de función, evitar su uso

### ¿JavaScript es lo mismo que Java?
- No, son lenguajes distintos y no están relacionados

### ¿Dónde se ejecuta JavaScript?
- Principalmente en navegadores web, pero también en servidores (Node.js)

---

¡Excelente trabajo! Ya sabes cómo declarar variables y usar operadores en JavaScript. En la próxima clase veremos estructuras de control y arreglos. 🚀

---

_📧 **Contacto:** Si tienes dudas sobre JavaScript, consulta durante la clase o por los canales de comunicación._
