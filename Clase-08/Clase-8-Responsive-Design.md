# 📱 Clase 8: Responsive Design

## 🎯 Objetivos de la Clase

- Comprender los principios del diseño responsivo
- Dominar las media queries CSS
- Aprender a crear layouts adaptativos
- Entender el viewport y sus propiedades
- Crear imágenes y contenido responsivos
- Aplicar mejores prácticas para móviles

---

## 🌐 ¿Qué es Responsive Design?

### 🎯 Definición

**Responsive Design** (Diseño Responsivo) es una técnica de desarrollo web que permite que las páginas web se adapten automáticamente a diferentes tamaños de pantalla y dispositivos.

### 📱 Dispositivos Objetivo

- **Móviles:** 320px - 768px
- **Tablets:** 768px - 1024px
- **Desktop:** 1024px - 1440px
- **Desktop-hd:** 1440px - 2560px

### 🎨 Principios Fundamentales

1. **Fluid Grids:** Layouts que se adaptan proporcionalmente
2. **Flexible Images:** Imágenes que escalan sin romper el layout
3. **Media Queries:** CSS condicional basado en características del dispositivo
4. **Mobile First:** Diseñar primero para móviles y luego escalar

---

## 📐 Viewport Meta Tag

### 🔧 Configuración Básica

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### 📖 Propiedades del Viewport

```html
<!-- Configuración básica -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Configuración avanzada -->
<meta
  name="viewport"
  content="
  width=device-width,
  initial-scale=1.0,
  maximum-scale=1.0,
  user-scalable=no,
  viewport-fit=cover
"
/>
```

### 🎯 Explicación de Propiedades

- **width=device-width:** Ancho igual al ancho del dispositivo
- **initial-scale=1.0:** Escala inicial de 1.0 (sin zoom)
- **maximum-scale=1.0:** Máximo zoom permitido
- **user-scalable=no:** Deshabilitar zoom del usuario
- **viewport-fit=cover:** Cubrir toda la pantalla (útil para notch)

---

## 📱 Media Queries

### 🎯 Sintaxis Básica

```css
/* Estilos base (móvil first) */
.elemento {
  width: 100%;
  padding: 1rem;
}

/* Tablet (768px y superior) */
@media screen and (min-width: 768px) {
  .elemento {
    width: 50%;
    padding: 2rem;
  }
}

/* Desktop (1024px y superior) */
@media screen and (min-width: 1024px) {
  .elemento {
    width: 33.33%;
    padding: 3rem;
  }
}
```

### 📏 Breakpoints poco comunes

```css
/* Extra small devices (phones, 576px and down) */
@media (max-width: 575.98px) {
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
```

### 🎯 Tipos de Media Queries

#### 📱 Orientación

```css
/* Portrait (vertical) */
@media (orientation: portrait) {
  .elemento {
    height: 100vh;
  }
}

/* Landscape (horizontal) */
@media (orientation: landscape) {
  .elemento {
    height: 50vh;
  }
}
```

#### 🖥️ Tipo de Dispositivo

```css
/* Solo pantallas */
@media screen {
  .elemento {
    display: block;
  }
}

/* Solo impresión */
@media print {
  .elemento {
    display: none;
  }
}
```

#### 🎨 Características Específicas

```css
/* Pantallas de alta densidad */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .imagen {
    background-image: url('imagen@2x.png');
  }
}

/* Pantallas con hover */
@media (hover: hover) {
  .boton:hover {
    background-color: #007bff;
  }
}

/* Pantallas sin hover (touch) */
@media (hover: none) {
  .boton {
    background-color: #007bff;
  }
}
```

### 🔧 Media Queries Combinadas

```css
/* Tablet en landscape */
@media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .elemento {
    width: 75%;
  }
}

/* Desktop con pantalla de alta resolución */
@media screen and (min-width: 1200px) and (min-resolution: 192dpi) {
  .elemento {
    font-size: 18px;
  }
}
```

---

## 🎨 Layouts Responsivos

### 📱 Mobile First Approach

```css
/* Estilos base (móvil) */
.contenedor {
  width: 100%;
  padding: 1rem;
}

.navegacion {
  flex-direction: column;
  gap: 1rem;
}

.tarjetas {
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .contenedor {
    padding: 2rem;
  }

  .navegacion {
    flex-direction: row;
    gap: 2rem;
  }

  .tarjetas {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .contenedor {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem;
  }

  .tarjetas {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
}
```

### 🔄 Flexbox Responsivo

```css
.contenedor-flex {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .contenedor-flex {
    flex-direction: row;
    gap: 2rem;
  }

  .elemento-flex {
    flex: 1;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .contenedor-flex {
    gap: 3rem;
  }

  .elemento-flex {
    flex: 0 0 300px;
  }
}
```

### 🔲 Grid Responsivo

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 3rem;
  }
}

/* Pantallas grandes */
@media (min-width: 1440px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1400px;
    margin: 0 auto;
  }
}
```

### 🎯 Grid con Auto-fit

```css
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

/* Ajustar el tamaño mínimo según el dispositivo */
@media (min-width: 768px) {
  .grid-auto-fit {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .grid-auto-fit {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
  }
}
```

---

## 🖼️ Imágenes Responsivas

### 🎯 Imágenes Flexibles

```css
.imagen-responsiva {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### 🖼️ Picture Element

```html
<picture>
  <source media="(min-width: 1024px)" srcset="imagen-large.jpg" />
  <source media="(min-width: 768px)" srcset="imagen-medium.jpg" />
  <img src="imagen-small.jpg" alt="Descripción de la imagen" />
</picture>
```

### 🖼️ Srcset Attribute

```html
<img
  src="imagen.jpg"
  srcset="imagen-small.jpg 300w, imagen-medium.jpg 600w, imagen-large.jpg 900w"
  sizes="(max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            33vw"
  alt="Descripción de la imagen"
/>
```

### 🎨 CSS Background Images

```css
.imagen-fondo {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .imagen-fondo {
    background-image: url('imagen-small.jpg');
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  .imagen-fondo {
    background-image: url('imagen-medium.jpg');
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .imagen-fondo {
    background-image: url('imagen-large.jpg');
  }
}
```

---

## 📱 Navegación Responsiva

### 🍔 Menú Hamburger

**Puntos clave:**

- El menú se abre/cierra al marcar/desmarcar el checkbox.
- El ícono de hamburguesa se anima solo con CSS.
- Es accesible por teclado y fácil de mantener.

```html
<nav class="navegacion-responsive">
  <div class="logo">Logo</div>
  <input
    type="checkbox"
    id="menu-toggle"
    class="menu-toggle-checkbox"
    aria-label="Abrir menú"
  />
  <label
    for="menu-toggle"
    class="menu-toggle"
    tabindex="0"
    aria-label="Abrir menú"
  >
    <span></span>
    <span></span>
    <span></span>
  </label>
  <ul class="menu">
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#servicios">Servicios</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
</nav>
```

```css
.navegacion-responsive {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #69584c;
  color: white;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: 0.3s;
}

.menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
}

.menu-toggle-checkbox {
  display: none;
}

.menu a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: #007bff;
}

/* Móvil */
@media (max-width: 767px) {
  .menu-toggle {
    display: flex;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #69584c;
    flex-direction: column;
    padding: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  .menu-toggle-checkbox:checked ~ .menu-toggle + .menu,
  .menu-toggle-checkbox:checked + .menu-toggle + .menu {
    transform: translateY(75px);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .menu li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #555;
  }

  .menu li:last-child {
    border-bottom: none;
  }
}

.menu-toggle-checkbox:focus + .menu-toggle,
.menu-toggle:focus {
  outline: 2px solid #007bff;
}

.menu-toggle-checkbox:checked + .menu-toggle span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}
.menu-toggle-checkbox:checked + .menu-toggle span:nth-child(2) {
  opacity: 0;
}
.menu-toggle-checkbox:checked + .menu-toggle span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -5.5px);
}
```

---

## 📱 Tipografía Responsiva

### 📏 Unidades Relativas

```css
/* Base typography */
html {
  font-size: 16px; /* Base size */
}

body {
  font-size: 1rem; /* 16px */
  line-height: 1.6;
}

h1 {
  font-size: 2rem; /* 32px en móvil */
  line-height: 1.2;
}

h2 {
  font-size: 1.5rem; /* 24px en móvil */
  line-height: 1.3;
}

/* Tablet */
@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem; /* 40px */
  }

  h2 {
    font-size: 2rem; /* 32px */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  h1 {
    font-size: 3rem; /* 48px */
  }

  h2 {
    font-size: 2.5rem; /* 40px */
  }
}
```

### 📏 Viewport Units

```css
.titulo-viewport {
  font-size: 4vw; /* 4% del ancho de la ventana */
  line-height: 1.2;
}

/* Limitar el tamaño máximo */
@media (min-width: 1200px) {
  .titulo-viewport {
    font-size: 48px; /* Tamaño máximo fijo */
  }
}
```

### 📏 Clamp Function

```css
.titulo-clamp {
  font-size: clamp(1.5rem, 4vw, 3rem);
  /* Mínimo: 1.5rem, Preferido: 4vw, Máximo: 3rem */
}

.texto-clamp {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: clamp(1.4, 1.6, 1.8);
}
```

---

## 🚀 Ejercicio Práctico

### 📝 Crear un Sitio Web Completamente Responsivo

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sitio Web Responsivo</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="responsive.css" />
  </head>
  <body>
    <!-- Header Responsivo -->
    <header class="header">
      <nav class="nav">
        <div class="logo">MiSitio</div>
        <input
          type="checkbox"
          id="menu-toggle"
          class="menu-toggle-checkbox"
          aria-label="Abrir menú"
        />
        <label
          for="menu-toggle"
          class="menu-toggle"
          tabindex="0"
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul class="menu">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="inicio">
      <div class="hero-content">
        <h1 class="hero-title">Diseño Web Responsivo</h1>
        <p class="hero-subtitle">
          Creamos experiencias web que se adaptan a todos los dispositivos
        </p>
        <button class="hero-button">Comenzar Proyecto</button>
      </div>
      <div class="hero-image">
        <img src="https://via.placeholder.com/600x400" alt="Hero Image" />
      </div>
    </section>

    <!-- Servicios -->
    <section class="servicios" id="servicios">
      <div class="container">
        <h2 class="section-title">Nuestros Servicios</h2>
        <div class="servicios-grid">
          <div class="servicio-card">
            <div class="servicio-icon">💻</div>
            <h3>Desarrollo Web</h3>
            <p>Sitios web modernos y responsivos</p>
          </div>
          <div class="servicio-card">
            <div class="servicio-icon">📱</div>
            <h3>Apps Móviles</h3>
            <p>Aplicaciones nativas y híbridas</p>
          </div>
          <div class="servicio-card">
            <div class="servicio-icon">🎨</div>
            <h3>Diseño UI/UX</h3>
            <p>Experiencias de usuario únicas</p>
          </div>
          <div class="servicio-card">
            <div class="servicio-icon">🚀</div>
            <h3>Optimización SEO</h3>
            <p>Mejora el posicionamiento web</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Proyectos -->
    <section class="proyectos" id="proyectos">
      <div class="container">
        <h2 class="section-title">Proyectos Destacados</h2>
        <div class="proyectos-grid">
          <div class="proyecto-card">
            <img src="https://via.placeholder.com/400x300" alt="Proyecto 1" />
            <div class="proyecto-content">
              <h3>E-commerce</h3>
              <p>Tienda online completa</p>
            </div>
          </div>
          <div class="proyecto-card">
            <img src="https://via.placeholder.com/400x300" alt="Proyecto 2" />
            <div class="proyecto-content">
              <h3>Dashboard</h3>
              <p>Panel de administración</p>
            </div>
          </div>
          <div class="proyecto-card">
            <img src="https://via.placeholder.com/400x300" alt="Proyecto 3" />
            <div class="proyecto-content">
              <h3>Blog</h3>
              <p>Plataforma de contenido</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section class="contacto" id="contacto">
      <div class="container">
        <h2 class="section-title">Contáctanos</h2>
        <div class="contacto-content">
          <div class="contacto-info">
            <h3>Información de Contacto</h3>
            <p>📧 info@misitio.com</p>
            <p>📞 +1 234 567 890</p>
            <p>📍 Calle Principal 123, Ciudad</p>
          </div>
          <form class="contacto-form">
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Mensaje" rows="5" required></textarea>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 MiSitio. Todos los derechos reservados.</p>
      </div>
    </footer>
  </body>
</html>
```

**Archivo `responsive.css`:**

```css
/* Reset y configuración base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header */
.header {
  background-color: #2c3e50;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: 0.3s;
}

.menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.menu a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: #3498db;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  opacity: 0.9;
  max-width: 600px;
}

.hero-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-button:hover {
  background-color: #c0392b;
  transform: translateY(-2px);
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* Secciones */
.servicios,
.proyectos,
.contacto {
  padding: 4rem 1rem;
}

.servicios {
  background-color: #f8f9fa;
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 3rem;
  color: #2c3e50;
}

/* Servicios Grid */
.servicios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.servicio-card {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.servicio-card:hover {
  transform: translateY(-5px);
}

.servicio-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.servicio-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

/* Proyectos Grid */
.proyectos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.proyecto-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.proyecto-card:hover {
  transform: translateY(-5px);
}

.proyecto-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.proyecto-content {
  padding: 1.5rem;
}

.proyecto-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

/* Contacto */
.contacto {
  background-color: #f8f9fa;
}

.contacto-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.contacto-info h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.contacto-info p {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.contacto-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contacto-form input,
.contacto-form textarea {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
}

.contacto-form button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contacto-form button:hover {
  background-color: #2980b9;
}

/* Footer */
.footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
}

/* Responsive Design */
@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }

  .hero {
    flex-direction: row;
    text-align: left;
    padding: 6rem 2rem;
    gap: 4rem;
  }

  .hero-content {
    flex: 1;
  }

  .hero-image {
    flex: 1;
  }

  .servicios-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .proyectos-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contacto-content {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

@media (min-width: 1024px) {
  .servicios-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .proyectos-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Menú móvil */
@media (max-width: 767px) {
  .menu-toggle {
    display: flex;
  }

  .menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #2c3e50;
    flex-direction: column;
    padding: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .menu.activo {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .menu li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #34495e;
  }

  .menu li:last-child {
    border-bottom: none;
  }

  /* Animación del hamburger */
  .menu-toggle.activo span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-toggle.activo span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.activo span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}

/* Mejoras para pantallas muy pequeñas */
@media (max-width: 480px) {
  .hero {
    padding: 3rem 1rem;
  }

  .servicios,
  .proyectos,
  .contacto {
    padding: 3rem 1rem;
  }

  .servicio-card,
  .proyecto-card {
    padding: 1.5rem;
  }
}
```

**Nota:**

En esta clase no se utiliza ningún JavaScript. Todas las funcionalidades, incluyendo el menú móvil, el scroll suave y las animaciones de entrada, se logran únicamente con HTML y CSS.

- **Menú móvil:** Ya implementado solo con HTML y CSS usando un checkbox oculto.
- **Scroll suave:** Se puede lograr añadiendo `scroll-behavior: smooth;` al selector `html` en CSS:

  ```css
  html {
    scroll-behavior: smooth;
  }
  ```

- **Animaciones de entrada:** Usa transiciones y animaciones CSS, por ejemplo:

  ```css
  .servicio-card,
  .proyecto-card {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease forwards;
    animation-delay: 0.2s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  ```

## Esto hace que la clase sea más accesible, ligera y fácil de mantener, sin depender de JavaScript para la experiencia responsiva y visual.

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crear un sitio web de portafolio completamente responsivo que incluya:

1. **Header** con navegación hamburger para móviles
2. **Hero section** con imagen y texto adaptativo
3. **Sección de proyectos** con grid responsivo
4. **Formulario de contacto** que se adapte a diferentes pantallas
5. **Galería de imágenes** con diferentes tamaños según dispositivo
6. **Footer** con información de contacto
7. **Animaciones** que funcionen en todos los dispositivos

**Requisitos técnicos:**

- Usar enfoque Mobile First
- Implementar breakpoints apropiados
- Crear imágenes responsivas con `srcset`
- Usar unidades relativas (rem, em, vw, vh)
- Aplicar `clamp()` para tipografía fluida
- Optimizar para diferentes orientaciones

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [Responsive Web Design](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design) - MDN
- [CSS Media Queries](https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries) - Documentación oficial
- [Viewport Meta Tag](https://developer.mozilla.org/es/docs/Web/HTML/Viewport_meta_tag) - Guía completa
- [Responsive Images](https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) - Mejores prácticas

### 📖 Conceptos para Investigar

- **CSS Container Queries** (nueva característica)
- **CSS Logical Properties**
- **Progressive Web Apps (PWA)**
- **Web Performance** y optimización

---

## ❓ Preguntas Frecuentes

### ¿Cuál es la diferencia entre Mobile First y Desktop First?

- **Mobile First:** Diseñar primero para móviles y escalar hacia arriba
- **Desktop First:** Diseñar primero para desktop y escalar hacia abajo
- **Recomendado:** Mobile First por mejor rendimiento y UX

### ¿Cómo elegir los breakpoints correctos?

- **Basarse en el contenido:** No en dispositivos específicos
- **Breakpoints comunes:** 768px, 1024px, 1200px
- **Usar herramientas:** Chrome DevTools para probar

### ¿Cuándo usar `srcset` vs `picture`?

- **srcset:** Para la misma imagen en diferentes resoluciones
- **picture:** Para imágenes completamente diferentes según el contexto

### ¿Cómo optimizar el rendimiento en móviles?

- **Imágenes optimizadas:** Usar formatos modernos (WebP)
- **CSS crítico:** Inline para el contenido visible
- **Lazy loading:** Para imágenes fuera de la vista
- **Minificar:** CSS y JavaScript

---

## 🎉 ¡Responsive Design Dominado!

¡Excelente trabajo! Ya conoces las técnicas para crear sitios web que se adaptan a todos los dispositivos. En la próxima clase aprenderemos sobre Bootstrap para acelerar el desarrollo.

**Recuerda:** El responsive design no es solo adaptar el tamaño, sino crear experiencias óptimas para cada dispositivo. 📱✨

---

_📧 **Contacto:** Si tienes dudas sobre responsive design, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
