# 📝 Clase 5: CSS - Fuentes, Display y Posicionamiento

## 🎯 Objetivos de la Clase

- Dominar el sistema de fuentes web y Google Fonts
- Comprender los diferentes valores de `display`
- Aprender técnicas de posicionamiento CSS
- Entender el modelo de caja y sus propiedades
- Crear layouts complejos con posicionamiento
- Aplicar tipografía web profesional

---

## 🔤 Sistema de Fuentes Web

### 🌐 Fuentes Web vs Fuentes del Sistema

**Fuentes del Sistema:**

```css
font-family: Arial, Helvetica, sans-serif;
```

**Fuentes Web:**

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
font-family: 'Roboto', sans-serif;
```

### 📚 Google Fonts

#### 🔗 Importación desde HTML

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
    rel="stylesheet"
  />
</head>
```

#### 📝 Importación desde CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```

### 🎨 Propiedades de Fuente Avanzadas

```css
.texto-avanzado {
  /* Familia de fuente */
  font-family: 'Roboto', 'Arial', sans-serif;

  /* Tamaño */
  font-size: 18px;
  font-size: 1.125rem; /* 18px / 16px */

  /* Peso */
  font-weight: 300; /* Light */
  font-weight: 400; /* Regular */
  font-weight: 700; /* Bold */

  /* Estilo */
  font-style: normal;
  font-style: italic;

  /* Variante */
  font-variant: normal;
  font-variant: small-caps;

  /* Altura de línea */
  line-height: 1.6;
  line-height: 24px;

  /* Shorthand */
  font: 300 18px/1.6 'Roboto', sans-serif;
  /* peso tamaño/linea familia */
}
```

### 📏 Unidades de Fuente

```css
.unidades-fuente {
  /* Píxeles (fijos) */
  font-size: 16px;

  /* Em (relativo al elemento padre) */
  font-size: 1.2em; /* 1.2 veces el tamaño del padre */

  /* Rem (relativo al elemento raíz) */
  font-size: 1.2rem; /* 1.2 veces el tamaño del html */

  /* Porcentaje */
  font-size: 120%; /* 120% del tamaño del padre */

  /* Viewport units */
  font-size: 2vw; /* 2% del ancho de la ventana */
  font-size: 2vh; /* 2% del alto de la ventana */
}
```

### 🎯 Mejores Prácticas de Tipografía

```css
/* Configuración base */
html {
  font-size: 16px; /* Tamaño base */
}

body {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Jerarquía tipográfica */
h1 {
  font-size: 2.5rem; /* 40px */
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem; /* 32px */
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.875rem;
}

h3 {
  font-size: 1.5rem; /* 24px */
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.75rem;
}

p {
  font-size: 1rem; /* 16px */
  line-height: 1.6;
  margin-bottom: 1rem;
}

.small-text {
  font-size: 0.875rem; /* 14px */
  line-height: 1.5;
}
```

---

## 📦 Propiedad Display

### 🔍 Valores de Display

#### 📄 `display: block`

```css
.elemento-block {
  display: block;
  /* Características:
     - Ocupa todo el ancho disponible
     - Salto de línea antes y después
     - Acepta width, height, margin, padding
     - Ejemplos: div, p, h1-h6, section, article */
}
```

#### 🔗 `display: inline`

```css
.elemento-inline {
  display: inline;
  /* Características:
     - Solo ocupa el espacio necesario
     - No hay salto de línea
     - NO acepta width, height, margin-top/bottom
     - Ejemplos: span, a, strong, em */
}
```

#### 🔲 `display: inline-block`

```css
.elemento-inline-block {
  display: inline-block;
  /* Características:
     - Comportamiento inline pero acepta width/height
     - No hay salto de línea
     - Acepta todas las propiedades de caja
     - Útil para elementos que deben estar en línea pero con dimensiones */
}
```

#### 🚫 `display: none`

```css
.elemento-oculto {
  display: none;
  /* Características:
     - Elemento completamente oculto
     - No ocupa espacio en el layout
     - No es accesible para lectores de pantalla */
}
```

### 🎨 Ejemplos Prácticos

```html
<div class="contenedor">
  <span class="etiqueta">Etiqueta:</span>
  <span class="valor">Valor importante</span>
  <button class="boton">Acción</button>
</div>
```

```css
.contenedor {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.etiqueta {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  margin-right: 10px;
}

.valor {
  display: inline-block;
  font-weight: 600;
  color: #333;
  margin-right: 15px;
}

.boton {
  display: inline-block;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
```

---

## 🎯 Posicionamiento CSS

### 📍 `position: static` (Por defecto)

```css
.elemento-static {
  position: static;
  /* Características:
     - Posición normal en el flujo del documento
     - Las propiedades top, right, bottom, left NO tienen efecto
     - z-index NO tiene efecto */
}
```

### 📍 `position: relative`

```css
.elemento-relativo {
  position: relative;
  top: 20px;
  left: 30px;
  /* Características:
     - Se posiciona relativo a su posición normal
     - Mantiene su espacio en el flujo del documento
     - Acepta top, right, bottom, left
     - Útil para ajustes finos */
}
```

### 📍 `position: absolute`

```css
.elemento-absoluto {
  position: absolute;
  top: 0;
  right: 0;
  /* Características:
     - Se posiciona relativo al ancestro posicionado más cercano
     - Se remueve del flujo normal del documento
     - Si no hay ancestro posicionado, se posiciona relativo al viewport
     - Acepta top, right, bottom, left */
}
```

### 📍 `position: fixed`

```css
.elemento-fijo {
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* Características:
     - Se posiciona relativo al viewport
     - Se mantiene fijo durante el scroll
     - Se remueve del flujo normal del documento
     - Útil para headers, modales, botones flotantes */
}
```

### 📍 `position: sticky`

```css
.elemento-sticky {
  position: sticky;
  top: 0;
  /* Características:
     - Se comporta como relative hasta que alcanza el threshold
     - Luego se comporta como fixed
     - Requiere un ancestro con scroll
     - Útil para headers de tabla, navegación */
}
```

### 🎨 Ejemplos de Posicionamiento

#### 🔝 Botón Flotante

```html
<div class="contenedor-principal">
  <h1>Contenido principal</h1>
  <p>Mucho contenido aquí...</p>
</div>

<button class="boton-flotante">↑</button>
```

```css
.boton-flotante {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.boton-flotante:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}
```

#### 🎯 Tooltip

```html
<div class="contenedor-tooltip">
  <span class="texto">Pasa el mouse aquí</span>
  <div class="tooltip">¡Este es un tooltip!</div>
</div>
```

```css
.contenedor-tooltip {
  position: relative;
  display: inline-block;
}

.texto {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
}

.tooltip {
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #333;
}

.contenedor-tooltip:hover .tooltip {
  opacity: 1;
  visibility: visible;
}
```

#### 📌 Header Sticky

```html
<header class="header-sticky">
  <nav class="navegacion">
    <a href="#" class="logo">Mi Sitio</a>
    <ul class="menu">
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
</header>
```

```css
.header-sticky {
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navegacion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.menu a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: #007bff;
}
```

---

## 🎨 Propiedad Z-Index

### 🔢 Concepto

El `z-index` controla el orden de apilamiento de elementos posicionados.

```css
.elemento-superior {
  position: relative;
  z-index: 10;
}

.elemento-inferior {
  position: relative;
  z-index: 1;
}
```

### 📊 Valores de Z-Index

```css
/* Valores negativos van detrás */
.fondo {
  z-index: -1;
}

/* Valores positivos van adelante */
.modal {
  z-index: 1000;
}

/* Valores más altos = más adelante */
.tooltip {
  z-index: 9999;
}
```

### 🎯 Ejemplo Práctico - Modal

```html
<div class="modal-overlay">
  <div class="modal">
    <h2>Título del Modal</h2>
    <p>Contenido del modal...</p>
    <button class="cerrar-modal">Cerrar</button>
  </div>
</div>
```

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 90%;
  z-index: 1001;
}

.cerrar-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}
```

---

## 🚀 Ejercicio Práctico

### 📝 Crear una Tarjeta de Producto con Posicionamiento

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tarjeta de Producto</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="producto.css" />
  </head>
  <body>
    <div class="contenedor">
      <div class="tarjeta-producto">
        <div class="badge-oferta">-20%</div>
        <div class="imagen-producto">
          <img src="https://via.placeholder.com/300x200" alt="Producto" />
        </div>
        <div class="contenido-producto">
          <h3 class="titulo-producto">Laptop Gaming Pro</h3>
          <p class="descripcion">
            Potente laptop para gaming con gráficos dedicados
          </p>
          <div class="precios">
            <span class="precio-original">$1,299</span>
            <span class="precio-actual">$1,039</span>
          </div>
          <button class="boton-comprar">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  </body>
</html>
```

**Archivo `producto.css`:**

```css
/* Importar fuentes */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #f8f9fa;
  padding: 2rem;
}

.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.tarjeta-producto {
  position: relative;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 350px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tarjeta-producto:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.badge-oferta {
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: #dc3545;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  z-index: 10;
}

.imagen-producto {
  position: relative;
  overflow: hidden;
}

.imagen-producto img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.tarjeta-producto:hover .imagen-producto img {
  transform: scale(1.05);
}

.contenido-producto {
  padding: 1.5rem;
}

.titulo-producto {
  font-size: 1.25rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.descripcion {
  color: #6c757d;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.precios {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.precio-original {
  color: #6c757d;
  text-decoration: line-through;
  font-size: 0.875rem;
}

.precio-actual {
  color: #dc3545;
  font-size: 1.5rem;
  font-weight: 700;
}

.boton-comprar {
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.boton-comprar:hover {
  background-color: #0056b3;
}

.boton-comprar:active {
  transform: translateY(1px);
}
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crear una página de portafolio personal que incluya:

1. **Header sticky** con navegación
2. **Sección hero** con posicionamiento relativo/absoluto
3. **Tarjetas de proyectos** con hover effects
4. **Botón flotante** para contacto
5. **Tooltips** en elementos interactivos
6. **Tipografía web** usando Google Fonts
7. **Layout responsivo** usando diferentes displays

**Requisitos técnicos:**

- Usar al menos 3 tipos de posicionamiento diferentes
- Implementar z-index para elementos superpuestos
- Aplicar fuentes web de Google Fonts
- Crear efectos hover con transformaciones
- Usar display flexbox para layouts

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [Google Fonts](https://fonts.google.com/) - Biblioteca de fuentes web
- [CSS Display](https://developer.mozilla.org/es/docs/Web/CSS/display) - Documentación MDN
- [CSS Position](https://developer.mozilla.org/es/docs/Web/CSS/position) - Guía completa
- [CSS Z-Index](https://developer.mozilla.org/es/docs/Web/CSS/z-index) - Explicación detallada
- [Fontello](https://fontello.com/) - Para crear una fuente custom de iconos
- [Font Awesome](https://fontawesome.com/v4/icons/) - Fuente con varios iconos ya lista para usar

### 📖 Conceptos para Investigar

- **CSS Grid** (próxima clase)
- **Flexbox** (próxima clase)
- **CSS Variables** (custom properties)
- **CSS Transforms** (próxima clase)

---

## ❓ Preguntas Frecuentes

### ¿Cuál es la diferencia entre position relative y absolute?

- **Relative:** Se posiciona relativo a su posición normal, mantiene su espacio
- **Absolute:** Se posiciona relativo al ancestro posicionado más cercano, se remueve del flujo

### ¿Cuándo usar display inline-block?

- Cuando necesitas elementos en línea pero con dimensiones específicas
- Para crear navegaciones horizontales
- Para elementos que deben estar alineados pero con padding/margin

### ¿Cómo funciona z-index?

- Controla el orden de apilamiento de elementos posicionados
- Valores más altos aparecen más adelante
- Solo funciona con elementos que tienen position diferente a static

### ¿Por qué usar fuentes web?

- Consistencia visual en todos los dispositivos
- Mejor rendimiento que fuentes personalizadas
- Gran variedad de opciones gratuitas
- Optimización automática por Google

---

## 🎉 ¡Posicionamiento Dominado!

¡Excelente trabajo! Ya conoces las técnicas avanzadas de CSS para fuentes, display y posicionamiento. En la próxima clase aprenderemos sobre Flexbox y Grid para crear layouts modernos.

**Recuerda:** El posicionamiento es clave para crear interfaces complejas y profesionales. ¡Experimenta con diferentes combinaciones! 🎯

---

_📧 **Contacto:** Si tienes dudas sobre posicionamiento CSS, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
