# 🎪 Clase 9: Maquetación Web - Bootstrap

## 🎯 Objetivos de la Clase

- Comprender qué es Bootstrap y sus ventajas
- Aprender el sistema de grid de Bootstrap
- Dominar los componentes principales
- Crear layouts responsivos con Bootstrap
- Personalizar Bootstrap según necesidades
- Aplicar mejores prácticas del framework

---

## 🎨 ¿Qué es Bootstrap?

### 🎯 Definición

**Bootstrap** es un **framework** CSS gratuito y de código abierto desarrollado por Twitter que facilita el desarrollo de sitios web responsivos y modernos.

### 🚀 Ventajas de Bootstrap

- **Rápido desarrollo:** Componentes predefinidos
- **Responsive:** Diseño adaptativo incluido
- **Consistente:** Apariencia uniforme
- **Documentado:** Excelente documentación
- **Comunidad:** Gran soporte y recursos
- **Personalizable:** Fácil de modificar

### 📦 Versiones de Bootstrap

- **Bootstrap 4:** Versión estable anterior
- **Bootstrap 5:** Versión actual (2021+)
- **Bootstrap 5.3:** Última versión con mejoras

---

## 🔧 Instalación de Bootstrap

### 📥 CDN (Recomendado para desarrollo)

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi Sitio con Bootstrap</title>

    <!-- CSS de Bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />

    <!-- JavaScript de Bootstrap (opcional) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </head>
  <body>
    <!-- Contenido aquí -->
  </body>
</html>
```

### 📦 NPM (Para proyectos profesionales)

```bash
npm install bootstrap@5.3.0
```

```javascript
// Importar en tu archivo principal
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

### 🎨 SCSS (Para personalización)

```scss
// Importar variables de Bootstrap
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/mixins';

// Personalizar variables
$primary: #007bff;
$secondary: #6c757d;
$success: #28a745;

// Importar componentes
@import 'bootstrap/scss/bootstrap';
```

---

## 📐 Sistema de Grid de Bootstrap

### 🎯 Conceptos Básicos

Bootstrap usa un sistema de 12 columnas que se adapta a diferentes tamaños de pantalla.

### 📱 Breakpoints

```css
/* Extra small devices (phones, less than 576px) */
/* No media query for `xs` since this is the default */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* Extra extra large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
```

### 🔲 Clases de Grid

```html
<!-- Grid básico -->
<div class="container">
  <div class="row">
    <div class="col">Columna 1</div>
    <div class="col">Columna 2</div>
    <div class="col">Columna 3</div>
  </div>
</div>

<!-- Grid con tamaños específicos -->
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">Columna 1</div>
    <div class="col-12 col-md-6 col-lg-4">Columna 2</div>
    <div class="col-12 col-md-12 col-lg-4">Columna 3</div>
  </div>
</div>
```

### 📏 Clases de Columna

```html
<!-- Columnas de ancho fijo -->
<div class="col-1">1/12</div>
<div class="col-2">2/12</div>
<div class="col-3">3/12</div>
<div class="col-4">4/12</div>
<div class="col-6">6/12</div>
<div class="col-8">8/12</div>
<div class="col-12">12/12</div>

<!-- Columnas responsivas -->
<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
  <!-- 12 columnas en móvil, 6 en tablet, 4 en desktop, etc. -->
</div>
```

### 🎯 Ejemplos Prácticos de Grid

#### 📱 Layout de Blog

```html
<div class="container">
  <div class="row">
    <!-- Sidebar -->
    <div class="col-12 col-lg-3">
      <div class="bg-light p-3">
        <h4>Sidebar</h4>
        <ul class="list-unstyled">
          <li><a href="#">Enlace 1</a></li>
          <li><a href="#">Enlace 2</a></li>
          <li><a href="#">Enlace 3</a></li>
        </ul>
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="col-12 col-lg-9">
      <article class="mb-4">
        <h2>Título del Artículo</h2>
        <p>Contenido del artículo...</p>
      </article>

      <article class="mb-4">
        <h2>Otro Artículo</h2>
        <p>Más contenido...</p>
      </article>
    </div>
  </div>
</div>
```

#### 🎴 Galería de Tarjetas

```html
<div class="container">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <div class="col">
      <div class="card h-100">
        <img src="imagen1.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Tarjeta 1</h5>
          <p class="card-text">Descripción de la tarjeta.</p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100">
        <img src="imagen2.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Tarjeta 2</h5>
          <p class="card-text">Descripción de la tarjeta.</p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100">
        <img src="imagen3.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Tarjeta 3</h5>
          <p class="card-text">Descripción de la tarjeta.</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## 🎨 Componentes de Bootstrap

### 🧭 Navegación

#### 🍔 Navbar Responsivo

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Mi Sitio</a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#inicio">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#servicios">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

#### 🎯 Pills Navigation

```html
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button
      class="nav-link active"
      id="pills-home-tab"
      data-bs-toggle="pill"
      data-bs-target="#pills-home"
      type="button"
    >
      Inicio
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button
      class="nav-link"
      id="pills-profile-tab"
      data-bs-toggle="pill"
      data-bs-target="#pills-profile"
      type="button"
    >
      Perfil
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button
      class="nav-link"
      id="pills-contact-tab"
      data-bs-toggle="pill"
      data-bs-target="#pills-contact"
      type="button"
    >
      Contacto
    </button>
  </li>
</ul>

<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home">
    Contenido de Inicio
  </div>
  <div class="tab-pane fade" id="pills-profile">Contenido de Perfil</div>
  <div class="tab-pane fade" id="pills-contact">Contenido de Contacto</div>
</div>
```

### 🎴 Tarjetas (Cards)

```html
<div class="card" style="width: 18rem;">
  <img src="imagen.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Título de la Tarjeta</h5>
    <p class="card-text">Descripción de la tarjeta con texto de ejemplo.</p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
</div>

<!-- Tarjeta con header y footer -->
<div class="card">
  <div class="card-header">Destacado</div>
  <div class="card-body">
    <h5 class="card-title">Título especial</h5>
    <p class="card-text">
      Con texto de apoyo a continuación como introducción natural al contenido
      adicional.
    </p>
    <a href="#" class="btn btn-primary">Ir a algún lugar</a>
  </div>
  <div class="card-footer text-muted">Hace 2 días</div>
</div>
```

### 🔘 Botones

```html
<!-- Botones básicos -->
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<!-- Botones outline -->
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>

<!-- Tamaños de botones -->
<button type="button" class="btn btn-primary btn-lg">Botón grande</button>
<button type="button" class="btn btn-primary">Botón normal</button>
<button type="button" class="btn btn-primary btn-sm">Botón pequeño</button>

<!-- Botones con iconos -->
<button type="button" class="btn btn-primary">
  <i class="bi bi-heart"></i> Me gusta
</button>
```

### 📋 Formularios

```html
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" class="form-text">
      Nunca compartiremos tu email con nadie más.
    </div>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Recordarme</label>
  </div>

  <button type="submit" class="btn btn-primary">Enviar</button>
</form>

<!-- Formulario horizontal -->
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="inputPassword4" />
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Dirección</label>
    <input
      type="text"
      class="form-control"
      id="inputAddress"
      placeholder="1234 Main St"
    />
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Registrarse</button>
  </div>
</form>
```

### 🎪 Modales

```html
<!-- Botón para abrir modal -->
<button
  type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  Abrir Modal
</button>

<!-- Modal -->
<div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Título del Modal</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">Contenido del modal aquí...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Cerrar
        </button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>
```

### 📊 Alertas

```html
<div class="alert alert-primary" role="alert">
  Esta es una alerta primary—¡échale un vistazo!
</div>

<div class="alert alert-secondary" role="alert">
  Esta es una alerta secondary—¡échale un vistazo!
</div>

<div class="alert alert-success" role="alert">
  Esta es una alerta success—¡échale un vistazo!
</div>

<div class="alert alert-danger" role="alert">
  Esta es una alerta danger—¡échale un vistazo!
</div>

<!-- Alertas con botón de cerrar -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>¡Hola!</strong> Deberías revisar algunos de esos campos abajo.
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  ></button>
</div>
```

---

## 🎨 Utilidades de Bootstrap

### 📏 Espaciado

```html
<!-- Margin -->
<div class="m-0">Sin margen</div>
<div class="m-1">Margen pequeño</div>
<div class="m-2">Margen mediano</div>
<div class="m-3">Margen grande</div>
<div class="m-4">Margen extra grande</div>
<div class="m-5">Margen extra extra grande</div>

<!-- Padding -->
<div class="p-0">Sin padding</div>
<div class="p-1">Padding pequeño</div>
<div class="p-2">Padding mediano</div>
<div class="p-3">Padding grande</div>
<div class="p-4">Padding extra grande</div>
<div class="p-5">Padding extra extra grande</div>

<!-- Espaciado específico -->
<div class="mt-3">Margin top</div>
<div class="mb-3">Margin bottom</div>
<div class="ms-3">Margin start (left)</div>
<div class="me-3">Margin end (right)</div>

<div class="pt-3">Padding top</div>
<div class="pb-3">Padding bottom</div>
<div class="ps-3">Padding start (left)</div>
<div class="pe-3">Padding end (right)</div>
```

### 🎨 Colores

```html
<!-- Colores de texto -->
<p class="text-primary">Texto primary</p>
<p class="text-secondary">Texto secondary</p>
<p class="text-success">Texto success</p>
<p class="text-danger">Texto danger</p>
<p class="text-warning">Texto warning</p>
<p class="text-info">Texto info</p>
<p class="text-light">Texto light</p>
<p class="text-dark">Texto dark</p>

<!-- Colores de fondo -->
<div class="bg-primary">Fondo primary</div>
<div class="bg-secondary">Fondo secondary</div>
<div class="bg-success">Fondo success</div>
<div class="bg-danger">Fondo danger</div>
<div class="bg-warning">Fondo warning</div>
<div class="bg-info">Fondo info</div>
<div class="bg-light">Fondo light</div>
<div class="bg-dark">Fondo dark</div>
```

### 📐 Display

```html
<div class="d-inline">Display inline</div>
<div class="d-block">Display block</div>
<div class="d-flex">Display flex</div>
<div class="d-grid">Display grid</div>
<div class="d-none">Display none</div>

<!-- Display responsivo -->
<div class="d-none d-md-block">Oculto en móvil, visible en desktop</div>
<div class="d-block d-md-none">Visible en móvil, oculto en desktop</div>
```

### 📏 Flexbox

```html
<div class="d-flex justify-content-start">Justify start</div>
<div class="d-flex justify-content-center">Justify center</div>
<div class="d-flex justify-content-end">Justify end</div>
<div class="d-flex justify-content-between">Justify between</div>
<div class="d-flex justify-content-around">Justify around</div>
<div class="d-flex justify-content-evenly">Justify evenly</div>

<div class="d-flex align-items-start">Align start</div>
<div class="d-flex align-items-center">Align center</div>
<div class="d-flex align-items-end">Align end</div>
<div class="d-flex align-items-baseline">Align baseline</div>
<div class="d-flex align-items-stretch">Align stretch</div>
```

---

## 🚀 Ejercicio Práctico

### 📝 Crear un Sitio Web Completo con Bootstrap

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sitio Web con Bootstrap</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
    />
    <link rel="stylesheet" href="estilos.css" />
  </head>
  <body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="bi bi-code-slash"></i> DevStudio
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#inicio">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#servicios">Servicios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#proyectos">Proyectos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="inicio" class="hero-section">
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4">
              Creamos Experiencias Digitales Únicas
            </h1>
            <p class="lead mb-4">
              Somos un equipo de desarrolladores apasionados por crear sitios
              web modernos, responsivos y que generen resultados.
            </p>
            <div class="d-flex gap-3">
              <button
                class="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
              >
                <i class="bi bi-chat-dots"></i> Comenzar Proyecto
              </button>
              <button class="btn btn-outline-primary btn-lg">
                <i class="bi bi-play-circle"></i> Ver Demo
              </button>
            </div>
          </div>
          <div class="col-lg-6">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Hero Image"
              class="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios -->
    <section id="servicios" class="py-5 bg-light">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h2 class="display-5 fw-bold mb-3">Nuestros Servicios</h2>
            <p class="lead text-muted">
              Ofrecemos soluciones completas para tu presencia digital
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="mb-3">
                  <i class="bi bi-laptop display-4 text-primary"></i>
                </div>
                <h5 class="card-title">Desarrollo Web</h5>
                <p class="card-text text-muted">
                  Creamos sitios web modernos y responsivos que se adaptan a
                  todos los dispositivos.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="mb-3">
                  <i class="bi bi-phone display-4 text-primary"></i>
                </div>
                <h5 class="card-title">Apps Móviles</h5>
                <p class="card-text text-muted">
                  Desarrollamos aplicaciones nativas e híbridas para iOS y
                  Android.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body text-center p-4">
                <div class="mb-3">
                  <i class="bi bi-palette display-4 text-primary"></i>
                </div>
                <h5 class="card-title">Diseño UI/UX</h5>
                <p class="card-text text-muted">
                  Diseñamos experiencias de usuario únicas y atractivas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proyectos -->
    <section id="proyectos" class="py-5">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h2 class="display-5 fw-bold mb-3">Proyectos Destacados</h2>
            <p class="lead text-muted">
              Algunos de nuestros trabajos más recientes
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm">
              <img
                src="https://via.placeholder.com/400x250"
                class="card-img-top"
                alt="Proyecto 1"
              />
              <div class="card-body">
                <h5 class="card-title">E-commerce Moderno</h5>
                <p class="card-text text-muted">
                  Tienda online completa con carrito de compras y pasarela de
                  pagos.
                </p>
                <div class="d-flex gap-2">
                  <span class="badge bg-primary">React</span>
                  <span class="badge bg-secondary">Node.js</span>
                  <span class="badge bg-success">MongoDB</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm">
              <img
                src="https://via.placeholder.com/400x250"
                class="card-img-top"
                alt="Proyecto 2"
              />
              <div class="card-body">
                <h5 class="card-title">Dashboard Analytics</h5>
                <p class="card-text text-muted">
                  Panel de administración con gráficos y estadísticas en tiempo
                  real.
                </p>
                <div class="d-flex gap-2">
                  <span class="badge bg-primary">Vue.js</span>
                  <span class="badge bg-secondary">Laravel</span>
                  <span class="badge bg-success">MySQL</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm">
              <img
                src="https://via.placeholder.com/400x250"
                class="card-img-top"
                alt="Proyecto 3"
              />
              <div class="card-body">
                <h5 class="card-title">App de Delivery</h5>
                <p class="card-text text-muted">
                  Aplicación móvil para pedidos de comida con geolocalización.
                </p>
                <div class="d-flex gap-2">
                  <span class="badge bg-primary">React Native</span>
                  <span class="badge bg-secondary">Firebase</span>
                  <span class="badge bg-success">Google Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section id="contacto" class="py-5 bg-dark text-white">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-lg-8 mx-auto">
            <h2 class="display-5 fw-bold mb-3">Contáctanos</h2>
            <p class="lead">¿Listo para comenzar tu proyecto? ¡Hablemos!</p>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-lg-6">
            <div class="d-flex align-items-center mb-4">
              <i class="bi bi-envelope-fill fs-4 me-3 text-primary"></i>
              <div>
                <h6 class="mb-0">Email</h6>
                <p class="mb-0 text-muted">info@devstudio.com</p>
              </div>
            </div>

            <div class="d-flex align-items-center mb-4">
              <i class="bi bi-telephone-fill fs-4 me-3 text-primary"></i>
              <div>
                <h6 class="mb-0">Teléfono</h6>
                <p class="mb-0 text-muted">+1 234 567 890</p>
              </div>
            </div>

            <div class="d-flex align-items-center">
              <i class="bi bi-geo-alt-fill fs-4 me-3 text-primary"></i>
              <div>
                <h6 class="mb-0">Dirección</h6>
                <p class="mb-0 text-muted">Calle Principal 123, Ciudad</p>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="col-12">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Asunto"
                    required
                  />
                </div>
                <div class="col-12">
                  <textarea
                    class="form-control"
                    rows="5"
                    placeholder="Mensaje"
                    required
                  ></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary btn-lg w-100">
                    <i class="bi bi-send"></i> Enviar Mensaje
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="mb-0">
              &copy; 2024 DevStudio. Todos los derechos reservados.
            </p>
          </div>
          <div class="col-md-6 text-md-end">
            <div class="d-flex gap-3 justify-content-md-end">
              <a href="#" class="text-white"
                ><i class="bi bi-facebook fs-5"></i
              ></a>
              <a href="#" class="text-white"
                ><i class="bi bi-twitter fs-5"></i
              ></a>
              <a href="#" class="text-white"
                ><i class="bi bi-instagram fs-5"></i
              ></a>
              <a href="#" class="text-white"
                ><i class="bi bi-linkedin fs-5"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Modal de Contacto -->
    <div class="modal fade" id="contactModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Comenzar Proyecto</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Nombre</label>
                  <input type="text" class="form-control" required />
                </div>
                <div class="col-md-6">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-control" required />
                </div>
                <div class="col-12">
                  <label class="form-label">Tipo de Proyecto</label>
                  <select class="form-select">
                    <option>Sitio Web</option>
                    <option>App Móvil</option>
                    <option>E-commerce</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div class="col-12">
                  <label class="form-label">Descripción</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" class="btn btn-primary">
              Enviar Solicitud
            </button>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

**Archivo `estilos.css`:**

```css
/* Estilos personalizados */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding-top: 80px; /* Compensar navbar fijo */
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

.navbar-brand {
  font-weight: 700;
}

.nav-link {
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #007bff !important;
}

/* Animaciones de entrada */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    text-align: center;
  }

  .display-4 {
    font-size: 2.5rem;
  }

  .display-5 {
    font-size: 2rem;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crear un sitio web de portafolio personal usando Bootstrap que incluya:

1. **Navbar** con navegación responsiva
2. **Hero section** con call-to-action
3. **Sección de habilidades** con barras de progreso
4. **Galería de proyectos** con filtros
5. **Formulario de contacto** funcional
6. **Footer** con redes sociales
7. **Modal** para detalles de proyectos

**Requisitos técnicos:**

- Usar componentes de Bootstrap 5
- Implementar sistema de grid responsivo
- Aplicar utilidades de espaciado y colores
- Crear interacciones con JavaScript de Bootstrap
- Personalizar estilos manteniendo la consistencia
- Optimizar para todos los dispositivos

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/) - Documentación oficial
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Biblioteca de iconos
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/) - Ejemplos oficiales
- [Bootstrap Themes](https://themes.getbootstrap.com/) - Temas premium

### 📖 Conceptos para Investigar

- **Sass/SCSS** para personalización avanzada
- **Bootstrap JavaScript** para interacciones
- **Bootstrap Utilities** para desarrollo rápido
- **Bootstrap Customization** para temas personalizados

---

## ❓ Preguntas Frecuentes

### ¿Cuál es la diferencia entre Bootstrap 4 y 5?

- **Bootstrap 5:** Sin dependencia de jQuery, mejor soporte para CSS Grid, nuevas utilidades
- **Bootstrap 4:** Requiere jQuery, menos componentes modernos

### ¿Cómo personalizar los colores de Bootstrap?

- Usar variables CSS personalizadas
- Sobrescribir clases con CSS específico
- Usar SCSS para compilar versiones personalizadas

### ¿Es necesario usar todas las clases de Bootstrap?

- **No:** Usa solo lo que necesites
- **Recomendado:** Combinar con CSS personalizado
- **Eficiente:** Usar utilidades para desarrollo rápido

### ¿Cómo optimizar Bootstrap para producción?

- Usar versiones minificadas
- Eliminar componentes no utilizados
- Comprimir CSS y JavaScript
- Usar CDN para mejor rendimiento

---

## 🎉 ¡Bootstrap Dominado!

¡Excelente trabajo! Ya conoces cómo crear sitios web profesionales con Bootstrap. En la próxima clase tendremos una práctica integradora aplicando todos los conocimientos.

**Recuerda:** Bootstrap es una herramienta poderosa, pero el diseño y la creatividad vienen de ti. ¡Úsalo sabiamente! 🚀

---

_📧 **Contacto:** Si tienes dudas sobre Bootstrap, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
