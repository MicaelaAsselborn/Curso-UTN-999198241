# 🎨 Clase 3: Introducción a CSS

## 🎯 Objetivos de la Clase

- Comprender qué es CSS y su importancia en el desarrollo web
- Aprender las diferentes formas de aplicar CSS
- Conocer las propiedades CSS más comunes
- Entender selectores básicos
- Crear estilos para elementos HTML
- Aplicar colores, fuentes y espaciado

---

## 📚 ¿Qué es CSS?

### 🔍 Definición

**CSS** (Cascading Style Sheets) es el lenguaje de estilos utilizado para describir la presentación de documentos HTML. Controla el diseño, colores, fuentes y la disposición visual de las páginas web.

### 🎨 Características Principales

- **Lenguaje de estilos:** Define la apariencia visual
- **Separación de responsabilidades:** HTML estructura, CSS presenta
- **Cascada:** Los estilos se aplican en orden de especificidad
- **Herencia:** Los elementos heredan estilos de sus padres

### 📖 Historia Breve

- **1996:** CSS 1.0 - Estilos básicos
- **1998:** CSS 2.0 - Posicionamiento y media queries
- **2001:** CSS 2.1 - Correcciones y mejoras
- **2011:** CSS 3.0 - Módulos independientes
- **Actual:** CSS4 - Nuevas características

---

## 🔗 Formas de Aplicar CSS

### 1️⃣ CSS Externo (Recomendado)

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi Página</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Mi Título</h1>
  </body>
</html>
```

**Archivo `styles.css`:**

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

### 2️⃣ CSS Interno

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi Página</title>
    <style>
      h1 {
        color: blue;
        font-size: 24px;
      }
    </style>
  </head>
  <body>
    <h1>Mi Título</h1>
  </body>
</html>
```

### 3️⃣ CSS Inline

```html
<h1 style="color: blue; font-size: 24px;">Mi Título</h1>
```

### 🏆 Ventajas del CSS Externo

- **Reutilización:** Un archivo CSS para múltiples páginas
- **Mantenimiento:** Cambios centralizados
- **Carga:** El navegador puede cachear el archivo
- **Organización:** Código más limpio y ordenado

---

## 🎯 Selectores CSS Básicos

### 🔍 Selector de Elemento

```css
/* Aplica a todos los elementos h1 */
h1 {
  color: red;
}

/* Aplica a todos los párrafos */
p {
  font-size: 16px;
}
```

### 🆔 Selector de ID

```css
/* Aplica solo al elemento con id="titulo-principal" */
#titulo-principal {
  font-size: 32px;
  font-weight: bold;
}
```

```html
<h1 id="titulo-principal">Mi Título Principal</h1>
```

### 🏷️ Selector de Clase

```css
/* Aplica a todos los elementos con class="destacado" */
.destacado {
  background-color: yellow;
  padding: 10px;
}
```

```html
<p class="destacado">Este texto está destacado</p>
<div class="destacado">Este div también está destacado</div>
```

### 🔗 Selector Descendiente

```css
/* Aplica a párrafos dentro de divs */
div p {
  margin: 10px 0;
}
```

```html
<div>
  <p>Este párrafo tendrá margen</p>
</div>
<p>Este párrafo NO tendrá margen</p>
```

### 🎯 Selector de Hijo Directo

```css
/* Aplica solo a párrafos que son hijos directos de divs */
div > p {
  border: 1px solid black;
}
```

### 🔄 Selector de Hermanos

```css
/* Aplica a párrafos que siguen inmediatamente a h1 */
h1 + p {
  font-style: italic;
}
```

---

## 🎯 Especificidad CSS

### 🔍 ¿Qué es la Especificidad?

La **especificidad** es el mecanismo que usa CSS para determinar qué reglas de estilo se aplican cuando hay conflictos entre selectores que apuntan al mismo elemento.

### 📊 Cálculo de Especificidad

CSS asigna un valor numérico a cada tipo de selector:

| Selector                                      | Valor   | Ejemplo                             |
| --------------------------------------------- | ------- | ----------------------------------- |
| **Elementos** y **pseudo-elementos**          | 0,0,0,1 | `p`, `div`, `::before`              |
| **Clases**, **atributos** y **pseudo-clases** | 0,0,1,0 | `.clase`, `[type="text"]`, `:hover` |
| **IDs**                                       | 0,1,0,0 | `#mi-id`                            |
| **Estilos inline**                            | 1,0,0,0 | `style="color: red;"`               |

### 🧮 Ejemplos de Cálculo

```css
/* Especificidad: 0,0,0,1 */
p {
  color: blue;
}

/* Especificidad: 0,0,1,0 */
.destacado {
  color: red;
}

/* Especificidad: 0,0,1,1 */
p.destacado {
  color: green;
}

/* Especificidad: 0,1,0,0 */
#titulo {
  color: purple;
}

/* Especificidad: 0,1,0,1 */
#titulo p {
  color: orange;
}

/* Especificidad: 0,1,1,1 */
#titulo p.destacado {
  color: brown;
}
```

### 🎯 Reglas de Especificidad

1. **Mayor especificidad gana** cuando hay conflictos
2. **Mismo nivel de especificidad**: gana el último en el código
3. **!important** tiene la máxima prioridad (no recomendado)

### ⚠️ Ejemplo Práctico

```html
<p class="destacado" id="parrafo-especial">
  Este texto tiene múltiples estilos
</p>
```

```css
/* Especificidad: 0,0,0,1 - NO se aplica */
p {
  color: blue;
}

/* Especificidad: 0,0,1,0 - NO se aplica */
.destacado {
  color: red;
}

/* Especificidad: 0,1,0,0 - SÍ se aplica (mayor especificidad) */
#parrafo-especial {
  color: green;
}

/* Especificidad: 0,1,1,0 - SÍ se aplica (mayor especificidad) */
#parrafo-especial.destacado {
  color: purple;
}
```

### 🚫 El Problema con !important

```css
/* NO HACER ESTO */
p {
  color: blue !important; /* Fuerza la aplicación */
}

.destacado {
  color: red !important; /* También fuerza, pero es más específico */
}
```

**Problemas de !important:**

- Rompe la cascada natural de CSS
- Dificulta el mantenimiento
- Crea dependencias problemáticas
- Es difícil de sobrescribir

### 💡 Mejores Prácticas

```css
/* ✅ BUENO: Usar especificidad natural */
.mi-componente .titulo {
  color: blue;
}

.mi-componente .titulo.destacado {
  color: red;
}

/* ❌ MALO: Usar !important */
.titulo {
  color: blue !important;
}
```

### 🔧 Herramientas para Debugging

**Chrome DevTools:**

1. Inspeccionar elemento (F12)
2. Ver la pestaña "Styles"
3. Los estilos tachados tienen menor especificidad
4. Los estilos aplicados están en negrita

**Calculadora de Especificidad:**

- [Specificity Calculator](https://specificity.keegan.st/)

---

## 🎨 Propiedades CSS Fundamentales

### 🌈 Colores

```css
/* Diferentes formas de especificar colores */
.color-ejemplo {
  /* Nombres de colores */
  color: red;
  background-color: blue;

  /* Códigos hexadecimales */
  color: #ff0000; /* Rojo */
  background-color: #00ff00; /* Verde */

  /* RGB */
  color: rgb(255, 0, 0); /* Rojo */
  background-color: rgb(0, 255, 0); /* Verde */

  /* RGBA (con transparencia) */
  color: rgba(255, 0, 0, 0.5); /* Rojo semi-transparente */

  /* HSL */
  color: hsl(0, 100%, 50%); /* Rojo */

  /* HSLA */
  color: hsla(0, 100%, 50%, 0.5); /* Rojo semi-transparente */
}
```

### 📝 Tipografía

```css
.texto-ejemplo {
  /* Familia de fuente */
  font-family: Arial, sans-serif;

  /* Tamaño de fuente */
  font-size: 16px;
  font-size: 1.2em; /* Relativo al elemento padre */
  font-size: 1.2rem; /* Relativo al elemento raíz */

  /* Peso de la fuente */
  font-weight: bold;
  font-weight: 400; /* Normal */
  font-weight: 700; /* Bold */

  /* Estilo de fuente */
  font-style: italic;

  /* Altura de línea */
  line-height: 1.5;

  /* Transformación de texto */
  text-transform: uppercase;
  text-transform: lowercase;
  text-transform: capitalize;

  /* Decoración de texto */
  text-decoration: underline;
  text-decoration: line-through;
  text-decoration: none;

  /* Alineación de texto */
  text-align: left;
  text-align: center;
  text-align: right;
  text-align: justify;
}
```

### 📏 Espaciado y Dimensiones

```css
.espaciado-ejemplo {
  /* Márgenes (espacio exterior) */
  margin: 10px; /* Todos los lados */
  margin: 10px 20px; /* Vertical Horizontal */
  margin: 10px 20px 15px; /* Arriba Horizontal Abajo */
  margin: 10px 20px 15px 25px; /* Arriba Derecha Abajo Izquierda */

  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 15px;
  margin-left: 25px;

  /* Padding (espacio interior) */
  padding: 10px;
  padding: 10px 20px;
  padding: 10px 20px 15px;
  padding: 10px 20px 15px 25px;

  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 15px;
  padding-left: 25px;

  /* Dimensiones */
  width: 300px;
  height: 200px;
  max-width: 100%;
  min-height: 100px;
}
```

### 🖼️ Fondos

```css
.fondo-ejemplo {
  /* Color de fondo */
  background-color: #f0f0f0;

  /* Imagen de fondo */
  background-image: url('imagen.jpg');

  /* Repetición de imagen */
  background-repeat: no-repeat;
  background-repeat: repeat-x;
  background-repeat: repeat-y;

  /* Posición de imagen */
  background-position: center;
  background-position: top left;
  background-position: 50% 50%;

  /* Tamaño de imagen */
  background-size: cover;
  background-size: contain;
  background-size: 100% 100%;

  /* Shorthand */
  background: #f0f0f0 url('imagen.jpg') no-repeat center cover;
}
```

### 🖼️ Bordes

```css
.borde-ejemplo {
  /* Borde completo */
  border: 2px solid black;

  /* Bordes individuales */
  border-top: 1px solid red;
  border-right: 2px dashed blue;
  border-bottom: 3px dotted green;
  border-left: 4px double orange;

  /* Propiedades individuales */
  border-width: 2px;
  border-style: solid;
  border-color: black;

  /* Bordes redondeados */
  border-radius: 10px;
  border-radius: 50%; /* Círculo perfecto */
  border-radius: 10px 20px 30px 40px; /* Cada esquina */
}
```

---

## 🎨 Modelo de Caja CSS

### 📦 Concepto

Cada elemento HTML se trata como una caja con las siguientes propiedades:

```
┌─────────────────────────────────────┐
│              MARGIN                 │
│  ┌───────────────────────────────┐  │
│  │            BORDER             │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │         PADDING         │  │  │
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │     CONTENT       │  │  │  │
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 🔧 Propiedades del Modelo de Caja

```css
.modelo-caja {
  /* Box-sizing */
  box-sizing: content-box; /* Por defecto */
  box-sizing: border-box; /* Incluye padding y border en el ancho */

  /* Dimensiones */
  width: 300px;
  height: 200px;

  /* Padding */
  padding: 20px;

  /* Border */
  border: 2px solid black;

  /* Margin */
  margin: 10px;
}
```

---

## 🚀 Ejercicio Práctico

### 📝 Crear una Tarjeta de Perfil

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tarjeta de Perfil</title>
    <link rel="stylesheet" href="perfil.css" />
  </head>
  <body>
    <div class="tarjeta-perfil">
      <div class="foto-perfil">
        <img src="avatar.jpg" alt="Foto de perfil" />
      </div>
      <div class="info-perfil">
        <h2 class="nombre">María García</h2>
        <p class="profesion">Desarrolladora Web Frontend</p>
        <p class="descripcion">
          Apasionada por crear experiencias web únicas y accesibles.
          Especializada en HTML, CSS y JavaScript.
        </p>
        <div class="habilidades">
          <span class="habilidad">HTML</span>
          <span class="habilidad">CSS</span>
          <span class="habilidad">JavaScript</span>
        </div>
      </div>
    </div>
  </body>
</html>
```

**Archivo `perfil.css`:**

```css
body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.tarjeta-perfil {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 400px;
  text-align: center;
}

.foto-perfil img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #3498db;
  margin-bottom: 20px;
}

.nombre {
  color: #2c3e50;
  font-size: 24px;
  margin: 0 0 5px 0;
}

.profesion {
  color: #7f8c8d;
  font-size: 16px;
  margin: 0 0 15px 0;
}

.descripcion {
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 20px;
}

.habilidades {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.habilidad {
  background-color: #3498db;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
}
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crear una página web de recetas con estilos CSS que incluya:

1. **Header** con título y navegación estilizada
2. **Sección principal** con la receta
3. **Lista de ingredientes** con iconos o bullets personalizados
4. **Pasos de preparación** numerados y estilizados
5. **Información nutricional** en una tabla estilizada
6. **Footer** con información de contacto
7. **Colores coherentes** y tipografía legible
8. **Espaciado adecuado** entre elementos

**Requisitos técnicos:**

- Usar CSS externo
- Aplicar al menos 3 selectores diferentes
- Incluir colores, fuentes, espaciado y bordes
- Hacer la página visualmente atractiva

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [MDN CSS](https://developer.mozilla.org/es/docs/Web/CSS) - Documentación oficial
- [W3Schools CSS](https://www.w3schools.com/css/) - Tutoriales interactivos
- [CSS Color Picker](https://www.w3schools.com/colors/colors_picker.asp) - Selector de colores
- [CSS Validator](https://jigsaw.w3.org/css-validator/) - Validador de CSS

### 📖 Conceptos para Investigar

- **Unidades CSS** (px, em, rem, %, vh, vw)
- **Pseudo-clases** (:hover, :focus, :active)
- **Pseudo-elementos** (::before, ::after)

---

## ❓ Preguntas Frecuentes

### ¿Cuál es la diferencia entre margin y padding?

- **Margin:** Espacio exterior del elemento
- **Padding:** Espacio interior del elemento
- **Border:** Línea entre margin y padding

### ¿Por qué usar CSS externo?

- **Mantenimiento:** Cambios centralizados
- **Reutilización:** Un archivo para múltiples páginas
- **Rendimiento:** El navegador puede cachear el archivo
- **Organización:** Código más limpio

### ¿Cómo funciona la cascada CSS?

- Los estilos se aplican en orden de especificidad
- Los estilos más específicos tienen prioridad
- Los estilos inline tienen mayor prioridad
- Los estilos del navegador tienen menor prioridad

### ¿Por qué no se aplica mi estilo CSS?

- **Verificar especificidad**: Otro selector puede tener mayor especificidad
- **Revisar orden**: Los estilos posteriores sobrescriben los anteriores
- **Comprobar sintaxis**: Errores en el CSS pueden hacer que no se aplique
- **Usar DevTools**: Inspeccionar el elemento para ver qué estilos se aplican

---

## 🎉 ¡CSS Básico Dominado!

¡Excelente trabajo! Ya conoces los fundamentos de CSS y puedes crear estilos básicos para tus páginas HTML. En la próxima clase aprenderemos sobre HTML5, CSS3 y control de versiones con Git.

**Recuerda:** CSS es lo que hace que tus páginas web se vean hermosas. ¡Experimenta con colores y estilos! 🎨

---

_📧 **Contacto:** Si tienes dudas sobre CSS, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
