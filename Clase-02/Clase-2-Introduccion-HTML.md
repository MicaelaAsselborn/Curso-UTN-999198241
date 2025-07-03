# 🌐 Clase 2: Introducción a HTML

## 🎯 Objetivos de la Clase

- Comprender qué es HTML y su importancia
- Aprender la estructura básica de un documento HTML
- Conocer los elementos HTML más comunes
- Crear páginas web con contenido estructurado
- Entender la semántica HTML

---

## 📚 ¿Qué es HTML?

### 🔍 Definición

**HTML** (HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas web. Define la estructura y el contenido de una página web.

### 🏗️ Características Principales

- **Lenguaje de marcado:** Usa etiquetas para estructurar contenido
- **No es un lenguaje de programación:** Es descriptivo
- **Estándar web:** Definido por el W3C
- **Semántico:** Las etiquetas tienen significado

### 📖 Historia Breve

- **1991:** Tim Berners-Lee crea HTML
- **1995:** HTML 2.0
- **1997:** HTML 3.2
- **1999:** HTML 4.01
- **2014:** HTML5 (actual)

---

## 🏛️ Estructura Básica de HTML

### 📝 Plantilla HTML5 Completa

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Descripción de la página" />
    <meta name="keywords" content="palabras, clave, separadas, por, comas" />
    <meta name="author" content="Tu Nombre" />
    <title>Título de la Página</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- Contenido de la página aquí -->

    <script src="script.js"></script>
  </body>
</html>
```

### 🔍 Explicación de Cada Parte

#### `<!DOCTYPE html>`

- Declara que es un documento HTML5
- Debe estar en la primera línea

#### `<html lang="es">`

- Elemento raíz del documento
- `lang="es"` especifica el idioma

#### `<head>`

- Contiene metadatos del documento
- No se muestra en el navegador

#### `<body>`

- Contiene el contenido visible
- Todo lo que ve el usuario

---

## 🏷️ Elementos HTML Básicos

### 📄 Elementos de Encabezado

```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Sección</h3>
<h4>Subsección</h4>
<h5>Apartado</h5>
<h6>Subapartado</h6>
```

**Reglas importantes:**

- Solo un `<h1>` por página
- Usar en orden jerárquico
- Importante para SEO

### 📝 Elementos de Texto

```html
<p>Este es un párrafo de texto.</p>
<strong>Texto en negrita (importante)</strong>
<b>Texto en negrita (solo visual)</b>
<em>Texto en cursiva (énfasis)</em>
<i>Texto en cursiva (solo visual)</i>
<mark>Texto resaltado</mark>
<small>Texto pequeño</small>
<del>Texto tachado</del>
<ins>Texto insertado</ins>
```

### 📋 Listas

#### Lista No Ordenada

```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

#### Lista Ordenada

```html
<ol>
  <li>Primer paso</li>
  <li>Segundo paso</li>
  <li>Tercer paso</li>
</ol>
```

#### Lista de Definición

```html
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado para páginas web</dd>
  <dt>CSS</dt>
  <dd>Lenguaje de estilos para páginas web</dd>
</dl>
```

### 🔗 Enlaces

```html
<!-- Enlace básico -->
<a href="https://www.ejemplo.com">Visitar Ejemplo</a>

<!-- Enlace a página local -->
<a href="pagina2.html">Ir a Página 2</a>

<!-- Enlace con título -->
<a href="https://www.ejemplo.com" title="Descripción del enlace">Enlace</a>

<!-- Enlace que se abre en nueva pestaña -->
<a href="https://www.ejemplo.com" target="_blank">Abrir en nueva pestaña</a>

<!-- Enlace a email -->
<a href="mailto:correo@ejemplo.com">Enviar email</a>

<!-- Enlace a teléfono -->
<a href="tel:+1234567890">Llamar</a>
```

### 🖼️ Imágenes

```html
<!-- Imagen básica -->
<img src="imagen.jpg" alt="Descripción de la imagen" />

<!-- Imagen con dimensiones -->
<img src="imagen.jpg" alt="Descripción" width="300" height="200" />

<!-- Imagen responsiva -->
<img
  src="imagen.jpg"
  alt="Descripción"
  style="max-width: 100%; height: auto;"
/>
```

**Atributos importantes:**

- `src`: Ruta de la imagen
- `alt`: Texto alternativo (obligatorio para accesibilidad)
- `width/height`: Dimensiones
- `title`: Título al pasar el mouse

---

## 🏗️ Estructura Semántica HTML5

### 📄 Elementos de Sección

```html
<header>
  <h1>Título del Sitio</h1>
  <nav>
    <ul>
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h2>Sección Principal</h2>
    <article>
      <h3>Artículo 1</h3>
      <p>Contenido del artículo...</p>
    </article>
    <article>
      <h3>Artículo 2</h3>
      <p>Contenido del artículo...</p>
    </article>
  </section>

  <aside>
    <h3>Información Adicional</h3>
    <p>Contenido relacionado...</p>
  </aside>
</main>

<footer>
  <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
</footer>
```

### 🏷️ Elementos Semánticos

| Elemento       | Descripción                    |
| -------------- | ------------------------------ |
| `<header>`     | Encabezado de página o sección |
| `<nav>`        | Navegación principal           |
| `<main>`       | Contenido principal            |
| `<section>`    | Sección temática               |
| `<article>`    | Contenido independiente        |
| `<aside>`      | Contenido relacionado          |
| `<footer>`     | Pie de página                  |
| `<figure>`     | Contenido multimedia           |
| `<figcaption>` | Descripción de figure          |

---

## 🎨 Atributos HTML Comunes

### 🔧 Atributos Globales

```html
<!-- ID único -->
<div id="mi-seccion">Contenido</div>

<!-- Clases para CSS -->
<div class="contenedor destacado">Contenido</div>

<!-- Estilo inline -->
<div style="color: blue; font-size: 16px;">Texto azul</div>

<!-- Título al pasar el mouse -->
<div title="Información adicional">Contenido</div>

<!-- Contenido oculto -->
<div hidden>No se muestra</div>
```

### 📱 Atributos de Accesibilidad

```html
<!-- Etiqueta para elementos de formulario -->
<label for="nombre">Nombre:</label>
<input id="nombre" type="text" />

<!-- Texto alternativo para imágenes -->
<img src="imagen.jpg" alt="Descripción detallada" />

<!-- Roles ARIA -->
<div role="button" tabindex="0">Botón personalizado</div>
```

---

## 🚀 Ejercicio Práctico

### 📝 Crear una Página de Receta

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Receta de Pasta Carbonara</title>
  </head>
  <body>
    <header>
      <h1>🍝 Pasta Carbonara</h1>
      <p>Una receta clásica italiana fácil de preparar</p>
    </header>

    <main>
      <section>
        <h2>📋 Ingredientes</h2>
        <ul>
          <li>400g de pasta (espaguetis)</li>
          <li>200g de panceta o bacon</li>
          <li>4 yemas de huevo</li>
          <li>100g de queso parmesano rallado</li>
          <li>Sal y pimienta negra</li>
        </ul>
      </section>

      <section>
        <h2>👨‍🍳 Instrucciones</h2>
        <ol>
          <li>Cocinar la pasta en agua con sal</li>
          <li>Freír la panceta hasta que esté crujiente</li>
          <li>Batir las yemas con el queso parmesano</li>
          <li>Mezclar todo con la pasta caliente</li>
          <li>Servir inmediatamente</li>
        </ol>
      </section>

      <aside>
        <h3>💡 Consejos</h3>
        <p>No cocines demasiado las yemas, deben quedar cremosas.</p>
      </aside>
    </main>

    <footer>
      <p>⏰ Tiempo de preparación: 20 minutos</p>
      <p>👥 Porciones: 4 personas</p>
    </footer>
  </body>
</html>
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crear una página web sobre tu película favorita que incluya:

1. **Estructura semántica** completa (header, main, section, footer)
2. **Título y descripción** de la película
3. **Lista de actores principales**
4. **Sinopsis** en párrafos
5. **Imagen** de la película
6. **Enlaces** a información adicional
7. **Información técnica** (año, director, género)

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [MDN HTML](https://developer.mozilla.org/es/docs/Web/HTML) - Documentación oficial
- [W3Schools HTML](https://www.w3schools.com/html/) - Tutoriales interactivos
- [HTML Validator](https://validator.w3.org/) - Validador de HTML
- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

### 📖 Conceptos para Investigar

- **SEO básico** y meta tags
- **Accesibilidad web** (ARIA)
- **Validación HTML**
- **Buenas prácticas** de HTML

---

## ❓ Preguntas Frecuentes

### ¿Por qué usar elementos semánticos?

- **Mejor SEO** para buscadores
- **Accesibilidad** para lectores de pantalla
- **Código más limpio** y mantenible
- **Estructura clara** del contenido

### ¿Cuál es la diferencia entre `<strong>` y `<b>`?

- `<strong>` indica **importancia semántica**
- `<b>` es solo **formato visual**
- Usar `<strong>` para contenido importante

### ¿Cómo validar mi HTML?

- Usar el [W3C Validator](https://validator.w3.org/)
- Verificar en el navegador (F12)
- Usar extensiones de VS Code

---

## 🎉 ¡HTML Dominado!

¡Excelente trabajo! Ya conoces los fundamentos de HTML y puedes crear páginas web bien estructuradas. En la próxima clase aprenderemos CSS para darle estilo y vida a tus páginas HTML.

**Recuerda:** HTML es la base de todo desarrollo web. ¡Practica mucho y experimenta! 🚀

---

_📧 **Contacto:** Si tienes dudas sobre HTML, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
