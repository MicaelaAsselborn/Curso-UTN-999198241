# 🧑‍💻 Clase 14: Clase Práctica JavaScript

## 🎯 Objetivos de la Clase

- Reforzar los conceptos de variables, operadores, condicionales y arreglos
- Resolver ejercicios prácticos en clase
- Fomentar el pensamiento lógico y la resolución de problemas
- Prepararse para temas más avanzados en JavaScript

---

## 🏋️‍♂️ Repaso Rápido

### Variables y Tipos

```js
let nombre = 'Ana';
let edad = 22;
let activo = true;
```

### Operadores

```js
let resultado = 10 * 2 + 5;
```

### Condicionales

```js
if (edad >= 18) {
  console.log('Mayor de edad');
} else {
  console.log('Menor de edad');
}
```

### Arreglos

```js
let numeros = [1, 2, 3, 4, 5];
// [0] -> 1
// [1] -> 2
// [2] -> 3
// [3] -> 4
// [4] -> 5
// [5] -> ???
console.log(numeros[2]); // 3
```

---

## 🧑🏼‍🏫 Ejemplo: Formulario HTML + JavaScript para Capturar Datos

Puedes crear un archivo HTML con un formulario sencillo para capturar datos del usuario y procesarlos con JavaScript. Por ejemplo:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Formulario de Usuario</title>
  </head>
  <body>
    <h2>Formulario de Registro</h2>
    <form id="registroForm">
      <label>Nombre: <input type="text" id="nombre" required /></label><br />
      <label>Edad: <input type="number" id="edad" required /></label><br />
      <button type="submit">Enviar</button>
    </form>
    <div id="mensaje"></div>
    <script>
      document
        .getElementById('registroForm')
        .addEventListener('submit', function (e) {
          e.preventDefault();
          const nombre = document.getElementById('nombre').value;
          const edad = document.getElementById('edad').value;
          document.getElementById(
            'mensaje'
          ).textContent = `¡Hola, ${nombre}! Tienes ${edad} años.`;
        });
    </script>
  </body>
</html>
```

---

## 🚀 Ejercicios Prácticos en Clase

### 1. Saludo Personalizado

- Pide al usuario su nombre y edad
- Muestra un mensaje personalizado usando ambos datos

### 2. Calculadora Simple

- Pide dos números al usuario
- Muestra la suma, resta, multiplicación y división de ambos

### 3. Lista de Compras

- Crea un array vacío
- Pide al usuario 3 productos y agrégalos al array
- Muestra la lista completa en consola

### 4. Clasificador de Números

- Crea un array con 5 números
- Recorre el array y muestra si cada número es par o impar

### 5. Promedio de Calificaciones

- Pide al usuario 5 calificaciones y guárdalas en un array
- Calcula y muestra el promedio

### 6. Buscador en Array

- Crea un array con varios nombres
- Pide al usuario un nombre y verifica si está en el array
- Muestra un mensaje indicando si se encontró o no

### 7. Contador de Vocales

- Pide al usuario una palabra
- Cuenta cuántas vocales tiene y muestra el resultado

### 8. Inversor de Texto

- Pide al usuario una frase
- Muestra la frase invertida (al revés)

### 9. Números Primos en un Rango

- Pide al usuario dos números (inicio y fin)
- Muestra todos los números primos en ese rango

### 10. Juego de Adivinanza

- Genera un número aleatorio entre 1 y 20
- Pide al usuario que adivine el número
- Da pistas si el número es mayor o menor hasta que acierte

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crea un archivo HTML con un script que:

- Pida al usuario su nombre y 3 hobbies
- Guarde los hobbies en un array
- Muestre un mensaje en pantalla con el nombre y la lista de hobbies

---

## 📚 Recursos Adicionales

- [Ejercicios básicos de JS (W3Schools)](https://www.w3schools.com/js/js_exercises.asp)
- [MDN JavaScript Reference](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference)

---

## ❓ Preguntas Frecuentes

### ¿Cómo puedo practicar más?

- Busca ejercicios en línea y resuélvelos
- Intenta modificar los ejemplos vistos en clase

### ¿Qué hago si tengo un error?

- Lee el mensaje de error con atención
- Usa `console.log()` para depurar
- Pregunta en clase o en los canales de comunicación

---

¡Excelente trabajo! Practicar es la mejor forma de aprender a programar. En la próxima clase veremos funciones y ciclos en JavaScript. 🔁

---

_📧 **Contacto:** Si tienes dudas sobre los ejercicios, consulta durante la clase o por los canales de comunicación._
