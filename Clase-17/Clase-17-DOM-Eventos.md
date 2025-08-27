# 🌳 Clase 17: JS – DOM y Eventos

## 🎯 Objetivos de la Clase

- Comprender qué es el DOM y su estructura jerárquica
- Aprender a seleccionar, crear, modificar y eliminar elementos del DOM
- Manejar eventos del usuario de forma interactiva
- Implementar ejemplos prácticos de manipulación dinámica de contenido
- Comprender la propagación de eventos (bubbling y capturing)

---

## 🖼️ Entendiendo el DOM

El **DOM** (Document Object Model) es una interfaz de programación para documentos HTML y XML. Representa la página como una estructura de árbol donde cada nodo es un objeto que representa parte del documento.

### 🌳 Estructura del Árbol DOM

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi Página</title>
  </head>
  <body>
    <h1 id="titulo">Hola Mundo</h1>
    <div class="contenedor">
      <p>¡Bienvenido!</p>
    </div>
  </body>
</html>
```

### 🔍 Selección de Elementos

```javascript
// Por ID (retorna un solo elemento)
document.getElementById('miId');

// Por clase (retorna HTMLCollection)
document.getElementsByClassName('miClase');

// Por etiqueta (retorna HTMLCollection)
document.getElementsByTagName('p');

// Selectores CSS (retorna el primero que coincida)
document.querySelector('.destacado');

// Selectores CSS (retorna NodeList)
document.querySelectorAll('p.destacado');
```

---

## 🪄 Manipulación del DOM

### ✏️ Modificar Contenido

```javascript
// Cambiar texto
document.getElementById('titulo').textContent = 'Nuevo título';
document.getElementById('titulo').innerHTML = '<em>Nuevo</em> título';

// Cambiar atributos
document.querySelector('img').src = 'nueva-imagen.jpg';
document.querySelector('a').setAttribute('target', '_blank');

// Cambiar estilos
document.body.style.backgroundColor = '#f0f0f0';
document.body.style.setProperty('background-color', 'green', 'important');
document.querySelector('.boton').classList.add('activo');
```

### 🧩 Crear y Eliminar Elementos

```javascript
// Crear nuevo elemento
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un nuevo párrafo';

// Añadir al final
document.body.appendChild(nuevoParrafo);

// Insertar antes de otro elemento
const contenedor = document.querySelector('.contenedor');
contenedor.insertBefore(nuevoParrafo, contenedor.firstChild);

// Clonar elemento
const parrafoClonado = nuevoParrafo.cloneNode(true);

// Eliminar elemento
nuevoParrafo.remove();
```

---

## 🎮 Manejo de Eventos

### 📝 Tipos Comunes de Eventos

- **click** - Cuando se hace clic en un elemento
- **dblclick** - Doble clic
- **mouseenter/mouseleave** - Entrar/salir del elemento
- **keydown/keyup** - Presionar/soltar tecla
- **submit** - Enviar formulario
- **input** - Cambio en campo de entrada
- **load** - Cuando termina de cargar la página

### 📝 Manejadores de Eventos

#### Método 1: Atributo HTML (no recomendado)

```html
<button onclick="alert('Hola')">Saludar</button>
```

#### Método 2: Propiedad del elemento

```javascript
const boton = document.querySelector('button');
boton.onclick = function () {
  console.log('Botón clickeado');
};
```

#### Método 3: addEventListener (recomendado)

```javascript
const boton = document.querySelector('button');
boton.addEventListener('click', function (evento) {
  console.log('Botón clickeado');
  console.log('Tipo de evento:', evento.type);
  console.log('Elemento:', evento.target);
});

// Con función flecha
boton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevenir comportamiento por defecto
  console.log('Evento prevenido');
});
```

### 🌊 Propagación de Eventos (Bubbling y Capturing)

```javascript
document.querySelector('.exterior').addEventListener(
  'click',
  () => {
    console.log('Exterior');
  },
  true
); // Capturing
```

1. **Flujo de eventos en el DOM**  
   Cuando haces clic en un elemento, el navegador sigue tres fases:

   1. **Capturing (captura):** El evento viaja desde el `document` hasta el elemento clicado, **de arriba hacia abajo**.
   2. **Target (objetivo):** Se ejecutan los listeners en el elemento donde ocurrió el clic.
   3. **Bubbling (burbujeo):** El evento sube desde el elemento clicado hasta `document`, **de abajo hacia arriba**.

2. **Tercer parámetro de `addEventListener`**

   - Si es `false` (por defecto), el listener se ejecuta en la fase de **burbujeo**.
   - Si es `true`, el listener se ejecuta en la fase de **captura**.

3. **¿Qué hace el código?**

   - Busca el elemento con clase `.exterior`.
   - Escucha el evento `click`.
   - Gracias al `true`, el `console.log('Exterior')` se ejecuta **mientras el evento baja (captura)**, antes de que llegue al objetivo.

4. **Ejemplo mental**  
   Si tienes:

   ```html
   <div class="exterior">
     <div class="interior">
       <button>Click aquí</button>
     </div>
   </div>
   ```

   ```javascript
   document.querySelector('.exterior').addEventListener(
     'click',
     () => {
       console.log('Exterior');
     },
     true
   ); // Capturing

   document.querySelector('.interior').addEventListener('click', (e) => {
     console.log('Interior');
     // e.stopPropagation(); // Detener la propagación
   });
   ```

Y pones listeners en cada capa (algunos con `true`, otros con `false`), el orden de ejecución cambiará:

- Con `true`, el listener de `.exterior` corre **primero**.
- Con `false`, correría **después** de que el evento burbujee desde el botón hacia arriba.

🎯 En resumen: el `true` hace que el listener se ejecute **al principio del flujo del evento** (fase de captura), antes que otros listeners en burbujeo.

### 🎯 Delegación de Eventos

```javascript
document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('Elemento de lista clickeado:', e.target.textContent);
  }
});
```

### 📋 Ejemplos Prácticos de Eventos

#### 1. Eventos de Mouse

```javascript
// Doble clic
document.getElementById('miBoton').addEventListener('dblclick', function () {
  console.log('¡Doble clic detectado!');
});

// Mouse sobre un elemento
const caja = document.querySelector('.caja');
caja.addEventListener('mouseenter', () => {
  caja.style.backgroundColor = 'lightblue';
});

caja.addEventListener('mouseleave', () => {
  caja.style.backgroundColor = '';
});

// Click derecho
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  console.log('Click derecho bloqueado');
});
```

#### 2. Eventos de Teclado

```javascript
// Al presionar teclas
document.addEventListener('keydown', (e) => {
  console.log(`Tecla presionada: ${e.key}`);

  // Ejemplo: Detectar Ctrl + S
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('Guardando...');
  }
});

// En un campo de entrada
const input = document.querySelector('input[type="text"]');
input.addEventListener('keyup', (e) => {
  console.log(`Texto actual: ${e.target.value}`);
});
```

#### 3. Eventos de Formulario y `change`

```html
<select id="miSelect">
  <option value="">Selecciona una opción</option>
  <option value="op1">Opción 1</option>
  <option value="op2">Opción 2</option>
</select>

<input type="checkbox" id="miCheckbox" /> Acepto los términos

<script>
  // Evento change en select
  const select = document.getElementById('miSelect');
  select.addEventListener('change', (e) => {
    console.log(`Opción seleccionada: ${e.target.value}`);
  });

  // Evento change en checkbox
  const checkbox = document.getElementById('miCheckbox');
  checkbox.addEventListener('change', (e) => {
    console.log(`Checkbox ${e.target.checked ? 'marcado' : 'desmarcado'}`);
  });
</script>
```

#### 4. Eventos de Ventana

```javascript
// Redimensionar ventana con debounce
let timeout;
window.addEventListener('resize', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log('Ventana redimensionada');
    console.log(`Nuevo tamaño: ${window.innerWidth}x${window.innerHeight}`);
  }, 250);
});

// Cambio de visibilidad de pestaña
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.log('La pestaña está activa');
  } else {
    console.log('La pestaña está en segundo plano');
  }
});
```

#### 5. Arrastrar y Soltar (Drag & Drop)

```html
<div
  id="arrastrable"
  draggable="true"
  style="padding: 10px; border: 1px solid #ccc;"
>
  Arrástrame
</div>
<div
  id="destino"
  style="margin-top: 20px; padding: 20px; border: 2px dashed #999;"
>
  Suelta aquí
</div>

<script>
  const arrastrable = document.getElementById('arrastrable');
  const destino = document.getElementById('destino');

  arrastrable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.style.opacity = '0.5';
  });

  arrastrable.addEventListener('dragend', (e) => {
    e.target.style.opacity = '1';
  });

  destino.addEventListener('dragover', (e) => {
    e.preventDefault();
    destino.style.border = '2px dashed #000';
    destino.style.backgroundColor = '#f0f0f0';
  });

  destino.addEventListener('dragleave', () => {
    destino.style.border = '2px dashed #999';
    destino.style.backgroundColor = '';
  });

  destino.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const elemento = document.getElementById(id);
    destino.appendChild(elemento);
    destino.style.border = '2px dashed #999';
    destino.style.backgroundColor = '#e8f5e9';
    console.log('Elemento soltado en la zona');
  });
</script>
```

#### 6. Evento `input` vs `change`

```html
<input type="text" id="texto" placeholder="Escribe algo" />
<select id="seleccion">
  <option value="">Selecciona</option>
  <option value="1">Uno</option>
  <option value="2">Dos</option>
</select>

<script>
  const inputTexto = document.getElementById('texto');
  const select = document.getElementById('seleccion');

  // Se dispara con cada tecla presionada
  inputTexto.addEventListener('input', (e) => {
    console.log('Input event:', e.target.value);
  });

  // Se dispara cuando el campo pierde el foco después de cambiar
  inputTexto.addEventListener('change', (e) => {
    console.log('Change event (input):', e.target.value);
  });

  // Para elementos select, change se dispara al cambiar la selección
  select.addEventListener('change', (e) => {
    console.log('Cambio en select:', e.target.value);
  });
</script>
```

---

## 🚀 Ejercicios Prácticos

### 📌 Ejercicio 1: Modificación de Estilos

Crea una página con un párrafo y tres botones que permitan cambiar el color del texto, el tamaño de fuente y el color de fondo.

### 📌 Ejercicio 2: Lista de Tareas

Implementa una lista de tareas donde puedas:

- Añadir nuevas tareas
- Marcar tareas como completadas
- Eliminar tareas
- Filtrar tareas (todas, completadas, pendientes)

### 📌 Ejercicio 3: Galería de Imágenes

Crea una galería de imágenes con:

- Miniaturas que se muestren en fila
- Una imagen principal que se actualice al hacer clic en las miniaturas
- Botones de navegación (anterior/siguiente)

---

## 🏠 Tarea para la Próxima Clase

### ✅ Proyecto: Reloj Digital

Crea un reloj digital que muestre la hora actual y se actualice cada segundo. Debe incluir:

- Hora, minutos y segundos
- Formato de 12/24 horas (con botón para cambiar)
- Fecha actual
- Estilos CSS atractivos

---

## 📚 Recursos Adicionales

- [MDN - Document Object Model (DOM)](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)
- [MDN - Introducción a eventos](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
- [JavaScript.info - Bubbling and Capturing](https://javascript.info/bubbling-and-capturing)
- [DOM Events en W3Schools](https://www.w3schools.com/js/js_htmldom_events.asp)
- [Event Reference - MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

---

## ❓ Preguntas Frecuentes

### ¿Cuál es la diferencia entre `textContent` e `innerHTML`?

- `textContent` maneja el contenido como texto plano
- `innerHTML` interpreta el contenido como HTML (puede ser vulnerable a XSS si no se maneja con cuidado)

### ¿Qué es la delegación de eventos?

Es una técnica que aprovecha la propagación de eventos para manejar eventos en múltiples elementos usando un solo manejador en un elemento padre.

### ¿Cómo evito el comportamiento por defecto de un evento?

Usando `event.preventDefault()` dentro del manejador de eventos.

### ¿Cuál es la diferencia entre `window.onload` y `DOMContentLoaded`?

- `window.onload` espera a que se carguen todos los recursos (imágenes, estilos, etc.)
- `DOMContentLoaded` se dispara cuando el HTML está completamente cargado y parseado, sin esperar recursos externos

---

¡Felicidades! Ahora tienes las bases para crear aplicaciones web interactivas. En la próxima clase exploraremos cómo trabajar con datos asíncronos usando Promesas y Async/Await. 🚀

---

_📧 **Contacto:** Si tienes dudas sobre el DOM o eventos, no dudes en consultar durante la clase o a través de los canales de comunicación._
