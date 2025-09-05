# 📊 Clase 20: JSON en JS y Repaso HTML, CSS y JS

## 🎯 Objetivos de la Clase

- Comprender qué es JSON y su uso en JavaScript
- Aprender a convertir datos entre objetos y JSON
- Repasar los conceptos clave de HTML, CSS y JavaScript
- Realizar ejercicios integradores de frontend

---

## 🗂️ ¿Qué es JSON?

**JSON** (JavaScript Object Notation) es un formato ligero de intercambio de datos, fácil de leer y escribir para humanos y máquinas.

### 🔄 Conversión entre objetos y JSON

```js
let persona = { nombre: "Ana", edad: 25 };
let json = JSON.stringify(persona); // Objeto a JSON
let obj = JSON.parse(json); // JSON a objeto
```

---

## 📋 Repaso HTML, CSS y JS

- **HTML:** estructura y semántica
- **CSS:** estilos y diseño responsivo
- **JS:** lógica, interacción y manipulación del DOM

### 🌐 Ejemplo integrador

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Repaso Frontend</title>
    <style>
      body { font-family: Arial; }
      .destacado { color: blue; }
    </style>
  </head>
  <body>
    <h1 class="destacado">¡Frontend Completo!</h1>
    <p id="info"></p>
    <script>
      let datos = { curso: "Frontend", modulos: 2 };
      document.getElementById("info").textContent = JSON.stringify(datos);
    </script>
  </body>
</html>
```

---

## 🚀 Ejercicio Práctico

### 📝 Escribe un script que:
1. Cree un array de objetos (por ejemplo, alumnos con nombre y nota)
2. Convierta el array a JSON y lo muestre en consola
3. Recupere el JSON y lo convierta de nuevo a array

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:
Crea un archivo HTML con un script que:
- Pida al usuario datos personales (nombre, email)
- Guarde los datos en un objeto y luego en JSON
- Muestre el JSON en pantalla

---

## 📚 Recursos Adicionales

- [MDN JSON](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [W3Schools JSON](https://www.w3schools.com/js/js_json_intro.asp)

---

## ❓ Preguntas Frecuentes

### ¿Para qué se usa JSON?
- Para enviar y recibir datos entre aplicaciones

### ¿JSON es solo para JavaScript?
- No, es un formato universal

### ¿Cómo valido un JSON?
- Usando herramientas como [JSONLint](https://jsonlint.com/)

---

¡Excelente! Ahora puedes trabajar con datos en formato JSON y tienes una visión integral del frontend. En la próxima clase, veremos React. ⚛️

---

_📧 **Contacto:** Si tienes dudas sobre JSON o el repaso, consulta durante la clase o por los canales de comunicación._
