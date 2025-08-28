# 🎯 Clase 18: Trabajo Práctico - DOM y Eventos

## 📚 Objetivos

- Practicar la manipulación del DOM con JavaScript
- Implementar manejadores de eventos
- Crear interacciones dinámicas en páginas web
- Validar formularios del lado del cliente
- Trabajar con el almacenamiento local

---

## 🏋️‍♂️ Ejercicios Prácticos

### 1. Contador Interactivo

Crea un contador que permita:

- Incrementar, decrementar y reiniciar el contador
- Mostrar el valor actual en el DOM
- Cambiar el color del número a rojo si es negativo y a verde si es positivo

<details>
  <summary>🔍 Pistas</summary>
  
  1. Para el contador, crea un elemento `span` con un ID
  2. Usa `addEventListener` para los eventos de clic
  3. Para cambiar estilos: `.style.color = 'red'`
  4. No olvides convertir el valor a número con `Number()` o `parseInt()`
  
</details>

### 2. Lista de Tareas (To-Do List)

Crea una aplicación de lista de tareas que permita:

- Añadir nuevas tareas mediante un formulario
- Marcar tareas como completadas
- Eliminar tareas individuales
- Filtrar tareas por estado (todas, completadas, pendientes)
- Guardar las tareas en localStorage

<details>
  <summary>🔍 Pistas</summary>
  
  1. Usa un array para almacenar las tareas
  2. Crea funciones para renderizar la lista desde el array
  3. Usa `event delegation` para manejar los clics en tareas
  4. Para marcar como completada: agrega/remueve una clase CSS `.classList.add('algo')` o `.classList.remove('algo')`
  5. Usa `filter()` para implementar los filtros
  6. Guarda el array en localStorage usando `JSON.stringify()`
  
</details>

### 3. Validación de Formulario

Crea un formulario de registro con los siguientes campos:

- Nombre (requerido, mínimo 3 caracteres)
- Email (formato válido)
- Contraseña (mínimo 8 caracteres, debe incluir mayúsculas, minúsculas y números)
- Confirmación de contraseña (debe coincidir con la contraseña)

Valida los campos en tiempo real y muestra mensajes de error específicos debajo de cada campo cuando corresponda. El botón de envío debe estar deshabilitado hasta que todos los campos sean válidos.

<details>
  <summary>🔍 Pistas</summary>
  
  1. Usa el evento `input` para validación en tiempo real
  2. Para validar email: usa una expresión regular o `input type="email"`
  3. Para la contraseña: usa `test()` con expresiones regulares
  4. Muestra mensajes de error con `textContent`
  5. Usa `classList` para mostrar/ocultar mensajes de error
  6. Deshabilita el botón con `button.disabled = !formIsValid`
  
</details>

### 4. Filtro de Búsqueda en Tiempo Real

Crea un buscador que filtre elementos según lo que el usuario escribe:

- Un campo de búsqueda que reaccione al evento 'input'
- Una lista de elementos (por ejemplo, nombres de productos o contactos)
- Los elementos que no coincidan con la búsqueda deben ocultarse suavemente
- Mostrar un mensaje cuando no haya coincidencias
- Incluir un botón para limpiar la búsqueda
- La búsqueda debe ser insensible a mayúsculas/minúsculas

<details>
  <summary>🔍 Pistas</summary>
  
  1. Escucha el evento `input` en el campo de búsqueda
  2. Usa `toLowerCase()` para hacer la búsqueda insensible
  3. Filtra el array con `filter()` e `includes()`
  4. Usa `display: none` o `classList` para ocultar elementos
  5. Usa `transition` en CSS para animaciones suaves
  6. Para el botón de limpiar: `searchInput.value = ''` y dispara el evento `input`
  
</details>

### 5. Contador de Caracteres para Textarea

Crea un contador de caracteres para un campo de texto que:

- Muestre en tiempo real el número de caracteres escritos
- Incluya un límite máximo de caracteres (ej: 280 como Twitter)
- Cambie de color cuando se acerque al límite (amarillo a partir del 80% y rojo al 90%)
- Muestre un mensaje cuando se alcance el límite
- Bloquee la entrada de más caracteres al llegar al límite
- Incluya un botón para borrar todo el texto
- Muestre el contador en formato "caracteres usados / límite" (ej: 275/280)
- Actualice dinámicamente mientras el usuario escribe

<details>
  <summary>🔍 Pistas</summary>
  
  1. Usa el evento `input` para detectar cambios
  2. Obtén la longitud con `textarea.value.length`
  3. Para los colores: `classList.add()`/`remove()` según el porcentaje
  4. Usa `textContent` para actualizar el contador
  5. Para el botón de borrar: `textarea.value = ''` y actualiza el contador
  
</details>

---

## 💡 Consejos

- Usa `event delegation` para manejar eventos en elementos dinámicos
- Separa la lógica de la interfaz de usuario
- Usa `classList` para manipular clases CSS
- Recuerda prevenir el comportamiento por defecto de los formularios
- Usa `localStorage` para persistir datos

## 📝 Entregables

Crea una carpeta para cada ejercicio con:

- Archivo HTML
- Archivo CSS (opcional, puedes usar estilos en línea si lo prefieres)
- Archivo JavaScript

¡Diviértete programando! 🚀
