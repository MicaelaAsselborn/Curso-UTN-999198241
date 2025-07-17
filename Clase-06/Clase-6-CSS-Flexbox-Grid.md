# 📐 Clase 6: CSS - Flexbox y Grid

## 🎯 Objetivos de la Clase

- Comprender el modelo Flexbox y sus propiedades
- Dominar CSS Grid para layouts complejos
- Aprender a crear layouts responsivos modernos
- Entender las diferencias entre Flexbox y Grid
- Crear diseños profesionales con ambos sistemas
- Aplicar mejores prácticas para layouts

---

## 🔄 CSS Flexbox

### 🎯 ¿Qué es Flexbox?

**Flexbox** (Flexible Box Layout) es un modelo de layout unidimensional que permite distribuir elementos en una sola dirección (fila o columna) de manera flexible.

### 📦 Conceptos Básicos

```
┌─────────────────────────────────────┐ ← Container (flex container)
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐ │ ← Items (flex items)
│  │  1  │  │  2  │  │  3  │  │  4  │ │
│  └─────┘  └─────┘  └─────┘  └─────┘ │
└─────────────────────────────────────┘
```

### 🔧 Propiedades del Container

#### 📏 `display: flex`

```css
.contenedor-flex {
  display: flex;
  /* Convierte el elemento en un flex container */
}
```

#### ➡️ `flex-direction`

```css
.flex-row {
  flex-direction: row; /* Por defecto - horizontal */
}

.flex-row-reverse {
  flex-direction: row-reverse; /* Horizontal invertido */
}

.flex-column {
  flex-direction: column; /* Vertical */
}

.flex-column-reverse {
  flex-direction: column-reverse; /* Vertical invertido */
}
```

#### 🔄 `flex-wrap`

```css
.flex-nowrap {
  flex-wrap: nowrap; /* Por defecto - no se envuelve */
}

.flex-wrap {
  flex-wrap: wrap; /* Se envuelve a la siguiente línea */
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse; /* Se envuelve en dirección inversa */
}
```

#### 🎯 `justify-content`

```css
.justify-start {
  justify-content: flex-start; /* Por defecto - inicio */
}

.justify-end {
  justify-content: flex-end; /* Final */
}

.justify-center {
  justify-content: center; /* Centro */
}

.justify-between {
  justify-content: space-between; /* Espacio entre elementos */
}

.justify-around {
  justify-content: space-around; /* Espacio alrededor */
}

.justify-evenly {
  justify-content: space-evenly; /* Espacio uniforme */
}
```

#### 📍 `align-items`

```css
.align-stretch {
  align-items: stretch; /* Por defecto - estirar */
}

.align-start {
  align-items: flex-start; /* Inicio del eje transversal */
}

.align-end {
  align-items: flex-end; /* Final del eje transversal */
}

.align-center {
  align-items: center; /* Centro del eje transversal */
}

.align-baseline {
  align-items: baseline; /* Línea base del texto */
}
```

#### 📍 `align-content`

```css
.align-content-start {
  align-content: flex-start; /* Inicio */
}

.align-content-end {
  align-content: flex-end; /* Final */
}

.align-content-center {
  align-content: center; /* Centro */
}

.align-content-between {
  align-content: space-between; /* Espacio entre */
}

.align-content-around {
  align-content: space-around; /* Espacio alrededor */
}

.align-content-stretch {
  align-content: stretch; /* Por defecto - estirar */
}
```

### 🎯 Propiedades de los Items

#### 🔢 `flex-grow`

```css
.item-crece {
  flex-grow: 1; /* Factor de crecimiento */
}

.item-crece-mas {
  flex-grow: 2; /* Crece el doble que otros */
}
```

#### 🔢 `flex-shrink`

```css
.item-no-encoge {
  flex-shrink: 0; /* No se encoge */
}

.item-encoge-mas {
  flex-shrink: 2; /* Se encoge más que otros */
}
```

#### 📏 `flex-basis`

```css
.item-base {
  flex-basis: 200px; /* Tamaño base */
}

.item-base-porcentaje {
  flex-basis: 25%; /* 25% del container */
}
```

#### 🔧 `flex` (shorthand)

```css
.item-flex {
  flex: 1 1 200px; /* grow shrink basis */
}

.item-flex-simple {
  flex: 1; /* 1 1 0% */
}

.item-flex-fijo {
  flex: 0 0 200px; /* No crece, no encoge, 200px base */
}
```

#### 🎯 `align-self`

```css
.item-centrado {
  align-self: center; /* Centrado individual */
}

.item-final {
  align-self: flex-end; /* Al final individual */
}
```

#### 📍 `order`

```css
.primer-item {
  order: -1; /* Aparece primero */
}

.ultimo-item {
  order: 1; /* Aparece al final */
}
```

### 🎨 Ejemplos Prácticos de Flexbox

#### 🧭 Navegación Horizontal

```html
<nav class="navegacion">
  <div class="logo">Mi Sitio</div>
  <ul class="menu">
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#servicios">Servicios</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
  <button class="boton-login">Iniciar Sesión</button>
</nav>
```

```css
.navegacion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.menu a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: #007bff;
}

.boton-login {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
```

#### 🎴 Tarjetas Flexibles

```html
<div class="contenedor-tarjetas">
  <div class="tarjeta">
    <h3>Tarjeta 1</h3>
    <p>Contenido de la tarjeta</p>
  </div>
  <div class="tarjeta">
    <h3>Tarjeta 2</h3>
    <p>Contenido de la tarjeta</p>
  </div>
  <div class="tarjeta">
    <h3>Tarjeta 3</h3>
    <p>Contenido de la tarjeta</p>
  </div>
</div>
```

```css
.contenedor-tarjetas {
  display: flex;
  gap: 1rem;
  padding: 2rem;
  flex-wrap: wrap;
}

.tarjeta {
  flex: 1 1 300px;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 0; /* Permite que el contenido se encoga */
}
```

#### 📱 Layout Responsivo

```html
<div class="layout">
  <header class="header">Header</header>
  <main class="main">
    <aside class="sidebar">Sidebar</aside>
    <section class="content">Contenido Principal</section>
  </main>
  <footer class="footer">Footer</footer>
</div>
```

```css
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

.main {
  display: flex;
  flex: 1;
}

.sidebar {
  background-color: #f8f9fa;
  padding: 1rem;
  width: 250px;
  flex-shrink: 0;
}

.content {
  flex: 1;
  padding: 2rem;
}

.footer {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .main {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }
}
```

---

## 🔲 CSS Grid

### 🎯 ¿Qué es CSS Grid?

**CSS Grid** es un sistema de layout bidimensional que permite crear layouts complejos con filas y columnas.

### 📦 Conceptos Básicos

```
┌─────────────────────────────────────┐ ← Grid Container
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐ │ ← Grid Items
│  │  1  │  │  2  │  │  3  │  │  4  │ │
│  ├─────┼──┼─────┼──┼─────┼──┼─────┤ │ ← Grid Lines
│  │  5  │  │  6  │  │  7  │  │  8  │ │
│  ├─────┼──┼─────┼──┼─────┼──┼─────┤ │
│  │  9  │  │ 10  │  │ 11  │  │ 12  │ │
│  └─────┘  └─────┘  └─────┘  └─────┘ │
└─────────────────────────────────────┘
```

### 🔧 Propiedades del Container

#### 📏 `display: grid`

```css
.contenedor-grid {
  display: grid;
  /* Convierte el elemento en un grid container */
}
```

#### 📐 `grid-template-columns`

```css
.grid-columns-fijas {
  grid-template-columns: 200px 200px 200px;
}

.grid-columns-fraccion {
  grid-template-columns: 1fr 2fr 1fr;
}

.grid-columns-mixto {
  grid-template-columns: 200px 1fr 2fr;
}

.grid-columns-repeat {
  grid-template-columns: repeat(3, 1fr);
}

.grid-columns-auto {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

#### 📐 `grid-template-rows`

```css
.grid-rows-fijas {
  grid-template-rows: 100px 200px 100px;
}

.grid-rows-fraccion {
  grid-template-rows: 1fr 2fr 1fr;
}

.grid-rows-auto {
  grid-template-rows: repeat(auto-fit, minmax(100px, auto));
}
```

#### 🎯 `grid-template-areas`

```css
.layout-areas {
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
}

.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
.footer {
  grid-area: footer;
}
```

#### 📍 `justify-items`

```css
.justify-items-start {
  justify-items: start;
}

.justify-items-end {
  justify-items: end;
}

.justify-items-center {
  justify-items: center;
}

.justify-items-stretch {
  justify-items: stretch; /* Por defecto */
}
```

#### 📍 `align-items`

```css
.align-items-start {
  align-items: start;
}

.align-items-end {
  align-items: end;
}

.align-items-center {
  align-items: center;
}

.align-items-stretch {
  align-items: stretch; /* Por defecto */
}
```

#### 🎯 `justify-content` y `align-content`

```css
.grid-centrado {
  justify-content: center;
  align-content: center;
}

.grid-espaciado {
  justify-content: space-between;
  align-content: space-around;
}
```

#### 📏 `gap`

```css
.grid-gap {
  gap: 1rem; /* Gap uniforme */
}

.grid-gap-diferente {
  row-gap: 1rem;
  column-gap: 2rem;
}
```

### 🎯 Propiedades de los Items

#### 📍 `grid-column` y `grid-row`

```css
.item-span-2 {
  grid-column: span 2; /* Ocupa 2 columnas */
}

.item-span-3 {
  grid-row: span 3; /* Ocupa 3 filas */
}

.item-especifico {
  grid-column: 1 / 3; /* Desde línea 1 hasta línea 3 */
  grid-row: 2 / 4; /* Desde línea 2 hasta línea 4 */
}
```

#### 🎯 `justify-self` y `align-self`

```css
.item-centrado {
  justify-self: center;
  align-self: center;
}

.item-final {
  justify-self: end;
  align-self: end;
}
```

#### 📍 `grid-area`

```css
.item-area {
  grid-area: 1 / 2 / 3 / 4; /* row-start / column-start / row-end / column-end */
}
```

### 🎨 Ejemplos Prácticos de Grid

#### 🖼️ Galería de Imágenes

```html
<div class="galeria">
  <div class="imagen grande">
    <img src="img1.jpg" alt="Imagen 1" />
  </div>
  <div class="imagen">
    <img src="img2.jpg" alt="Imagen 2" />
  </div>
  <div class="imagen">
    <img src="img3.jpg" alt="Imagen 3" />
  </div>
  <div class="imagen">
    <img src="img4.jpg" alt="Imagen 4" />
  </div>
  <div class="imagen">
    <img src="img5.jpg" alt="Imagen 5" />
  </div>
</div>
```

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 1rem;
  padding: 2rem;
}

.imagen {
  overflow: hidden;
  border-radius: 8px;
  position: relative;
}

.imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.imagen:hover img {
  transform: scale(1.1);
}

.imagen.grande {
  grid-column: span 2;
  grid-row: span 2;
}
```

#### 📰 Layout de Blog

```html
<div class="layout-blog">
  <header class="blog-header">
    <h1>Mi Blog</h1>
    <nav>Navegación</nav>
  </header>
  <main class="blog-main">
    <article class="articulo-principal">
      <h2>Artículo Principal</h2>
      <p>Contenido del artículo...</p>
    </article>
    <aside class="sidebar">
      <div class="widget">Widget 1</div>
      <div class="widget">Widget 2</div>
    </aside>
  </main>
  <footer class="blog-footer">
    <p>© 2024 Mi Blog</p>
  </footer>
</div>
```

```css
.layout-blog {
  display: grid;
  grid-template-areas:
    'header header'
    'main sidebar'
    'footer footer';
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 2rem;
}

.blog-header {
  grid-area: header;
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog-main {
  grid-area: main;
  padding: 2rem;
}

.articulo-principal {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.sidebar {
  grid-area: sidebar;
  padding: 1rem;
}

.widget {
  background-color: #f8f9fa;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.blog-footer {
  grid-area: footer;
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
}
```

#### 📱 Dashboard Responsivo

```html
<div class="dashboard">
  <div class="card estadistica">
    <h3>Ventas</h3>
    <p class="numero">$12,450</p>
  </div>
  <div class="card estadistica">
    <h3>Usuarios</h3>
    <p class="numero">1,234</p>
  </div>
  <div class="card estadistica">
    <h3>Pedidos</h3>
    <p class="numero">567</p>
  </div>
  <div class="card grafico">
    <h3>Gráfico de Ventas</h3>
    <div class="grafico-placeholder">📊</div>
  </div>
  <div class="card tabla">
    <h3>Últimos Pedidos</h3>
    <table>
      <tr>
        <td>Pedido #001</td>
        <td>$150</td>
      </tr>
      <tr>
        <td>Pedido #002</td>
        <td>$200</td>
      </tr>
    </table>
  </div>
</div>
```

```css
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.estadistica {
  text-align: center;
}

.numero {
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
  margin: 0;
}

.grafico {
  grid-column: span 2;
}

.grafico-placeholder {
  font-size: 4rem;
  text-align: center;
  margin: 2rem 0;
}

.tabla {
  grid-column: span 2;
}

.tabla table {
  width: 100%;
  border-collapse: collapse;
}

.tabla td {
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}

/* Responsive */
@media (max-width: 768px) {
  .grafico,
  .tabla {
    grid-column: span 1;
  }
}
```

---

## 🔄 Flexbox vs Grid

### 🎯 ¿Cuándo usar Flexbox?

- **Layouts unidimensionales** (fila o columna)
- **Navegaciones** y menús
- **Componentes** que necesitan alineación
- **Contenido dinámico** que cambia de tamaño
- **Centrado** de elementos

### 🎯 ¿Cuándo usar Grid?

- **Layouts bidimensionales** (filas y columnas)
- **Páginas completas** con estructura compleja
- **Galerías** de imágenes
- **Dashboards** y paneles
- **Layouts** que necesitan control preciso

### 🔧 Combinando Flexbox y Grid

```html
<div class="layout-hibrido">
  <header class="header-flex">
    <div class="logo">Logo</div>
    <nav class="nav-flex">
      <a href="#">Inicio</a>
      <a href="#">Servicios</a>
      <a href="#">Contacto</a>
    </nav>
  </header>
  <main class="main-grid">
    <aside class="sidebar">Sidebar</aside>
    <section class="content">
      <div class="cards-flex">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
      </div>
    </section>
  </main>
</div>
```

```css
.layout-hibrido {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}

.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
}

.nav-flex {
  display: flex;
  gap: 2rem;
}

.nav-flex a {
  color: white;
  text-decoration: none;
}

.main-grid {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  padding: 2rem;
}

.cards-flex {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.card {
  flex: 1 1 200px;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

---

## 🚀 Ejercicio Práctico

### 📝 Crear un Portfolio con Flexbox y Grid

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio Personal</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="portfolio.css" />
  </head>
  <body>
    <div class="portfolio">
      <!-- Header con Flexbox -->
      <header class="header">
        <div class="logo">Portfolio</div>
        <nav class="nav">
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Desarrollador Web Frontend</h1>
          <p>Creando experiencias digitales únicas</p>
          <button class="cta-button">Ver Proyectos</button>
        </div>
      </section>

      <!-- Proyectos con Grid -->
      <section class="proyectos" id="proyectos">
        <h2>Mis Proyectos</h2>
        <div class="proyectos-grid">
          <div class="proyecto">
            <img src="https://via.placeholder.com/300x200" alt="Proyecto 1" />
            <h3>E-commerce</h3>
            <p>Tienda online completa</p>
          </div>
          <div class="proyecto">
            <img src="https://via.placeholder.com/300x200" alt="Proyecto 2" />
            <h3>Dashboard</h3>
            <p>Panel de administración</p>
          </div>
          <div class="proyecto">
            <img src="https://via.placeholder.com/300x200" alt="Proyecto 3" />
            <h3>Blog</h3>
            <p>Plataforma de contenido</p>
          </div>
          <div class="proyecto">
            <img src="https://via.placeholder.com/300x200" alt="Proyecto 4" />
            <h3>App Móvil</h3>
            <p>Aplicación React Native</p>
          </div>
        </div>
      </section>

      <!-- Habilidades con Flexbox -->
      <section class="habilidades">
        <h2>Habilidades</h2>
        <div class="habilidades-flex">
          <div class="habilidad">
            <h3>HTML</h3>
            <div class="nivel">90%</div>
          </div>
          <div class="habilidad">
            <h3>CSS</h3>
            <div class="nivel">85%</div>
          </div>
          <div class="habilidad">
            <h3>JavaScript</h3>
            <div class="nivel">80%</div>
          </div>
          <div class="habilidad">
            <h3>React</h3>
            <div class="nivel">75%</div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <p>&copy; 2024 Portfolio Personal</p>
      </footer>
    </div>
  </body>
</html>
```

**Archivo `portfolio.css`:**

```css
/* Reset y configuración base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #333;
}

.portfolio {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh;
}

/* Header con Flexbox */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav a:hover {
  color: #3498db;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #c0392b;
}

/* Proyectos con Grid */
.proyectos {
  padding: 4rem 2rem;
  background-color: #f8f9fa;
}

.proyectos h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.proyectos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.proyecto {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.proyecto:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.proyecto img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.proyecto h3 {
  padding: 1rem 1rem 0.5rem;
  font-size: 1.3rem;
  color: #2c3e50;
}

.proyecto p {
  padding: 0 1rem 1rem;
  color: #7f8c8d;
}

/* Habilidades con Flexbox */
.habilidades {
  padding: 4rem 2rem;
  background-color: white;
}

.habilidades h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.habilidades-flex {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
}

.habilidad {
  text-align: center;
  flex: 1 1 150px;
}

.habilidad h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.nivel {
  font-size: 2rem;
  font-weight: 700;
  color: #3498db;
}

/* Footer */
.footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem;
}

/* Responsive */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .nav {
    gap: 1rem;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .proyectos-grid {
    grid-template-columns: 1fr;
  }

  .habilidades-flex {
    flex-direction: column;
    align-items: center;
  }
}
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crear una página de restaurante que incluya:

1. **Header** con navegación usando Flexbox
2. **Sección hero** con layout Grid
3. **Menú de platos** usando Grid con áreas
4. **Galería de fotos** con Grid responsivo
5. **Sección de testimonios** con Flexbox
6. **Footer** con información de contacto
7. **Layout responsivo** que se adapte a móviles

**Requisitos técnicos:**

- Combinar Flexbox y Grid según sea apropiado
- Usar `grid-template-areas` para layouts complejos
- Implementar `flex-wrap` para elementos responsivos
- Aplicar `gap` para espaciado consistente
- Crear breakpoints para diferentes tamaños de pantalla

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [CSS Flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout) - Guía completa MDN
- [CSS Grid](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout) - Documentación oficial
- [Flexbox Froggy](https://flexboxfroggy.com/) - Juego para aprender Flexbox
- [Grid Garden](https://cssgridgarden.com/) - Juego para aprender Grid
- [Flexbox vs Grid](https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/) - Comparación

### 📖 Conceptos para Investigar

- **CSS Subgrid** (nueva característica)
- **CSS Container Queries**
- **CSS Logical Properties**
- **CSS Grid Masonry** (experimental)

---

## ❓ Preguntas Frecuentes

### ¿Cuándo usar Flexbox vs Grid?

- **Flexbox:** Layouts unidimensionales, navegaciones, componentes
- **Grid:** Layouts bidimensionales, páginas completas, galerías

### ¿Puedo usar Flexbox y Grid juntos?

- **Sí:** Son complementarios, no excluyentes
- **Flexbox:** Para alineación dentro de elementos
- **Grid:** Para estructura general de la página

### ¿Cómo hacer layouts responsivos con Grid?

- Usar `repeat(auto-fit, minmax())`
- Definir diferentes layouts con media queries
- Usar `grid-template-areas` para reorganizar contenido

### ¿Cuál es la diferencia entre `justify-content` y `align-content`?

- **justify-content:** Alinea en el eje principal
- **align-content:** Alinea en el eje transversal (solo con múltiples líneas)

---

## 🎉 ¡Flexbox y Grid Dominados!

¡Excelente trabajo! Ya conoces los dos sistemas de layout más poderosos de CSS. En la próxima clase aprenderemos sobre transformaciones, transiciones y animaciones CSS.

**Recuerda:** Flexbox y Grid son herramientas complementarias. ¡Úsalas juntas para crear layouts increíbles! 🚀

---

_📧 **Contacto:** Si tienes dudas sobre Flexbox o Grid, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
