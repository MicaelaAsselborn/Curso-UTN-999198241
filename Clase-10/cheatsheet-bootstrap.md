# 🎨 Bootstrap 5 Cheatsheet - Referencia Rápida

## 📐 Sistema de Grid

### 🔲 Contenedores

```html
<div class="container">
  <!-- Ancho fijo responsivo -->
  <div class="container-fluid"><!-- Ancho completo --></div>
</div>
```

### 📱 Breakpoints

```html
<!-- Extra small (xs): < 576px -->
<!-- Small (sm): ≥ 576px -->
<!-- Medium (md): ≥ 768px -->
<!-- Large (lg): ≥ 992px -->
<!-- Extra large (xl): ≥ 1200px -->
<!-- Extra extra large (xxl): ≥ 1400px -->
```

### 🎯 Clases de Columna

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
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
  <!-- 12 en móvil, 6 en tablet, 4 en desktop, 3 en large -->
</div>

<!-- Auto-sizing -->
<div class="col">Auto</div>
<div class="col-auto">Auto con contenido</div>
```

## 🎨 Componentes Principales

### 🧭 Navbar

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>

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
          <a class="nav-link active" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Servicios</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### 🎴 Cards

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Título</h5>
    <p class="card-text">Descripción</p>
    <a href="#" class="btn btn-primary">Botón</a>
  </div>
</div>

<!-- Card con header y footer -->
<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">Contenido</div>
  <div class="card-footer">Footer</div>
</div>
```

### 🔘 Botones

```html
<!-- Colores -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>

<!-- Outline -->
<button class="btn btn-outline-primary">Outline</button>

<!-- Tamaños -->
<button class="btn btn-primary btn-lg">Grande</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-sm">Pequeño</button>
```

### 📋 Formularios

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" />
  </div>

  <div class="mb-3">
    <label for="password" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="password" />
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="check" />
    <label class="form-check-label" for="check">Recordarme</label>
  </div>

  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

### 📊 Alertas

```html
<div class="alert alert-primary" role="alert">Alerta primary</div>

<div class="alert alert-success" role="alert">Alerta success</div>

<!-- Con botón de cerrar -->
<div class="alert alert-warning alert-dismissible fade show">
  <strong>¡Atención!</strong> Mensaje importante.
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
```

### 🎪 Modales

```html
<!-- Botón para abrir -->
<button
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#miModal"
>
  Abrir Modal
</button>

<!-- Modal -->
<div class="modal fade" id="miModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Título</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
        ></button>
      </div>
      <div class="modal-body">Contenido del modal</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Cerrar
        </button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
```

## 📏 Utilidades de Espaciado

### 🔲 Margin

```html
<div class="m-0">Sin margen</div>
<div class="m-1">Margen pequeño</div>
<div class="m-2">Margen mediano</div>
<div class="m-3">Margen grande</div>
<div class="m-4">Margen extra grande</div>
<div class="m-5">Margen extra extra grande</div>

<!-- Específicos -->
<div class="mt-3">Margin top</div>
<div class="mb-3">Margin bottom</div>
<div class="ms-3">Margin start (left)</div>
<div class="me-3">Margin end (right)</div>
<div class="mx-3">Margin horizontal</div>
<div class="my-3">Margin vertical</div>
```

### 🔲 Padding

```html
<div class="p-0">Sin padding</div>
<div class="p-1">Padding pequeño</div>
<div class="p-2">Padding mediano</div>
<div class="p-3">Padding grande</div>
<div class="p-4">Padding extra grande</div>
<div class="p-5">Padding extra extra grande</div>

<!-- Específicos -->
<div class="pt-3">Padding top</div>
<div class="pb-3">Padding bottom</div>
<div class="ps-3">Padding start (left)</div>
<div class="pe-3">Padding end (right)</div>
<div class="px-3">Padding horizontal</div>
<div class="py-3">Padding vertical</div>
```

## 🎨 Utilidades de Colores

### 🎨 Colores de Texto

```html
<p class="text-primary">Texto primary</p>
<p class="text-secondary">Texto secondary</p>
<p class="text-success">Texto success</p>
<p class="text-danger">Texto danger</p>
<p class="text-warning">Texto warning</p>
<p class="text-info">Texto info</p>
<p class="text-light">Texto light</p>
<p class="text-dark">Texto dark</p>
```

### 🎨 Colores de Fondo

```html
<div class="bg-primary">Fondo primary</div>
<div class="bg-secondary">Fondo secondary</div>
<div class="bg-success">Fondo success</div>
<div class="bg-danger">Fondo danger</div>
<div class="bg-warning">Fondo warning</div>
<div class="bg-info">Fondo info</div>
<div class="bg-light">Fondo light</div>
<div class="bg-dark">Fondo dark</div>
```

## 📐 Utilidades de Display

### 🔲 Display

```html
<div class="d-inline">Display inline</div>
<div class="d-block">Display block</div>
<div class="d-flex">Display flex</div>
<div class="d-grid">Display grid</div>
<div class="d-none">Display none</div>

<!-- Responsivo -->
<div class="d-none d-md-block">Oculto en móvil, visible en desktop</div>
<div class="d-block d-md-none">Visible en móvil, oculto en desktop</div>
```

### 🔲 Flexbox

```html
<!-- Justify content -->
<div class="d-flex justify-content-start">Start</div>
<div class="d-flex justify-content-center">Center</div>
<div class="d-flex justify-content-end">End</div>
<div class="d-flex justify-content-between">Between</div>
<div class="d-flex justify-content-around">Around</div>
<div class="d-flex justify-content-evenly">Evenly</div>

<!-- Align items -->
<div class="d-flex align-items-start">Start</div>
<div class="d-flex align-items-center">Center</div>
<div class="d-flex align-items-end">End</div>
<div class="d-flex align-items-baseline">Baseline</div>
<div class="d-flex align-items-stretch">Stretch</div>
```

## 📱 Utilidades Responsivas

### 🔲 Ocultar/Mostrar

```html
<!-- Ocultar en diferentes breakpoints -->
<div class="d-none d-sm-block">Visible en sm+</div>
<div class="d-none d-md-block">Visible en md+</div>
<div class="d-none d-lg-block">Visible en lg+</div>

<!-- Mostrar solo en ciertos breakpoints -->
<div class="d-block d-sm-none">Solo en xs</div>
<div class="d-block d-md-none d-lg-block">Oculto en md</div>
```

### 🔲 Texto Responsivo

```html
<h1 class="text-center text-sm-start">
  Centrado en móvil, izquierda en desktop
</h1>
<p class="text-muted text-center text-lg-start">Texto responsivo</p>
```

## 🎯 Utilidades de Texto

### 📝 Alineación

```html
<p class="text-start">Izquierda</p>
<p class="text-center">Centro</p>
<p class="text-end">Derecha</p>
<p class="text-justify">Justificado</p>
```

### 📝 Transformación

```html
<p class="text-lowercase">TEXTO EN MINÚSCULAS</p>
<p class="text-uppercase">texto en mayúsculas</p>
<p class="text-capitalize">texto capitalizado</p>
```

### 📝 Peso

```html
<p class="fw-bold">Negrita</p>
<p class="fw-bolder">Más negrita</p>
<p class="fw-normal">Normal</p>
<p class="fw-light">Ligera</p>
<p class="fst-italic">Itálica</p>
```

## 🏷️ Badges y Labels

### 🏷️ Badges

```html
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info text-dark">Info</span>

<!-- Badges redondeados -->
<span class="badge rounded-pill bg-primary">Pill</span>
```

## 📊 Progress Bars

### 📊 Barras de Progreso

```html
<div class="progress mb-3">
  <div class="progress-bar" role="progressbar" style="width: 25%">25%</div>
</div>

<div class="progress mb-3">
  <div class="progress-bar bg-success" role="progressbar" style="width: 50%">
    50%
  </div>
</div>

<div class="progress mb-3">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%">
    75%
  </div>
</div>

<div class="progress mb-3">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%">
    100%
  </div>
</div>
```

## 🎨 Utilidades de Bordes

### 🔲 Bordes

```html
<div class="border">Borde</div>
<div class="border-top">Borde superior</div>
<div class="border-end">Borde derecho</div>
<div class="border-bottom">Borde inferior</div>
<div class="border-start">Borde izquierdo</div>

<!-- Colores -->
<div class="border border-primary">Borde primary</div>
<div class="border border-secondary">Borde secondary</div>
<div class="border border-success">Borde success</div>

<!-- Radio -->
<div class="border rounded">Redondeado</div>
<div class="border rounded-circle">Círculo</div>
<div class="border rounded-pill">Pill</div>
```

## 🎯 Utilidades de Posicionamiento

### 📍 Position

```html
<div class="position-static">Static</div>
<div class="position-relative">Relative</div>
<div class="position-absolute">Absolute</div>
<div class="position-fixed">Fixed</div>
<div class="position-sticky">Sticky</div>
```

### 📍 Top, Bottom, Start, End

```html
<div class="top-0">Top 0</div>
<div class="bottom-0">Bottom 0</div>
<div class="start-0">Start 0</div>
<div class="end-0">End 0</div>
```

---

## 🚀 Consejos Rápidos

### 💡 Mejores Prácticas

1. **Usa clases de utilidad** para desarrollo rápido
2. **Combina con CSS personalizado** para diseño único
3. **Prueba en múltiples dispositivos** siempre
4. **Usa el sistema de grid** para layouts responsivos
5. **Mantén consistencia** en colores y espaciado

### 🎯 Trucos Útiles

- `container-fluid` para ancho completo
- `row-cols-*` para control automático de columnas
- `g-*` para gutters (espaciado entre columnas)
- `shadow-*` para sombras
- `rounded-*` para bordes redondeados

---

**¡Usa este cheatsheet como referencia rápida durante tus ejercicios!** 🎨✨
