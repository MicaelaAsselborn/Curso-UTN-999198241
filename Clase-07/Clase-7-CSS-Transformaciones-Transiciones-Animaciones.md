# ✨ Clase 7: CSS - Transformaciones, Transiciones y Animaciones

## 🎯 Objetivos de la Clase

- Dominar las transformaciones CSS 2D y 3D
- Aprender a crear transiciones suaves
- Comprender el sistema de animaciones CSS
- Crear efectos visuales avanzados
- Optimizar el rendimiento de animaciones
- Aplicar mejores prácticas para UX

---

## 🔄 CSS Transformaciones

### 🎯 ¿Qué son las Transformaciones?

Las **transformaciones CSS** permiten modificar la forma, tamaño y posición de elementos sin afectar el flujo del documento.

### 📐 Transformaciones 2D

#### 🔄 `transform: translate()`

```css
/* Mover elemento */
.translate-x {
  transform: translateX(50px); /* Mover 50px a la derecha */
}

.translate-y {
  transform: translateY(-20px); /* Mover 20px hacia arriba */
}

.translate-xy {
  transform: translate(30px, 40px); /* Mover 30px derecha, 40px abajo */
}

.translate-porcentaje {
  transform: translate(50%, 50%); /* Mover 50% del ancho y alto */
}
```

#### 🔄 `transform: scale()`

```css
/* Escalar elemento */
.scale-up {
  transform: scale(1.5); /* 1.5 veces más grande */
}

.scale-down {
  transform: scale(0.8); /* 0.8 veces más pequeño */
}

.scale-xy {
  transform: scale(2, 0.5); /* 2x ancho, 0.5x alto */
}

.scale-x {
  transform: scaleX(1.2); /* Solo escalar ancho */
}

.scale-y {
  transform: scaleY(0.8); /* Solo escalar alto */
}
```

#### 🔄 `transform: rotate()`

```css
/* Rotar elemento */
.rotate-45 {
  transform: rotate(45deg); /* Rotar 45 grados */
}

.rotate-negativo {
  transform: rotate(-90deg); /* Rotar -90 grados */
}

.rotate-grados {
  transform: rotate(180deg); /* Rotar 180 grados */
}
```

#### 🔄 `transform: skew()`

```css
/* Inclinar elemento */
.skew-x {
  transform: skewX(20deg); /* Inclinar en eje X */
}

.skew-y {
  transform: skewY(10deg); /* Inclinar en eje Y */
}

.skew-xy {
  transform: skew(20deg, 10deg); /* Inclinar en ambos ejes */
}
```

#### 🔄 Combinando Transformaciones

```css
.transform-multiple {
  transform: translate(50px, 50px) rotate(45deg) scale(1.2);
}

.transform-separate {
  transform: translateX(100px);
  transform: rotate(90deg); /* Sobrescribe la anterior */
}

.transform-chain {
  transform: translateX(100px) rotate(90deg) scale(1.5);
}
```

### 🎯 Punto de Origen - `transform-origin`

```css
.rotate-center {
  transform-origin: center; /* Por defecto */
  transform: rotate(45deg);
}

.rotate-top-left {
  transform-origin: top left;
  transform: rotate(45deg);
}

.rotate-bottom-right {
  transform-origin: bottom right;
  transform: rotate(45deg);
}

.rotate-custom {
  transform-origin: 25% 75%; /* 25% desde izquierda, 75% desde arriba */
  transform: rotate(45deg);
}
```

### 🎨 Ejemplos Prácticos de Transformaciones

#### 🎯 Botón con Efecto Hover

```html
<button class="boton-transform">Hover Me</button>
```

```css
.boton-transform {
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.boton-transform:hover {
  transform: translateY(-3px) scale(1.05);
}

.boton-transform:active {
  transform: translateY(0) scale(0.95);
}
```

#### 🎴 Tarjeta con Efecto 3D

```html
<div class="tarjeta-3d">
  <div class="tarjeta-frente">
    <h3>Frente</h3>
    <p>Información principal</p>
  </div>
  <div class="tarjeta-dorso">
    <h3>Dorso</h3>
    <p>Información adicional</p>
  </div>
</div>
```

```css
.tarjeta-3d {
  position: relative;
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.tarjeta-frente,
.tarjeta-dorso {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s ease;
}

.tarjeta-frente {
  background-color: #007bff;
  color: white;
  transform: rotateY(0deg);
}

.tarjeta-dorso {
  background-color: #28a745;
  color: white;
  transform: rotateY(180deg);
}

.tarjeta-3d:hover .tarjeta-frente {
  transform: rotateY(180deg);
}

.tarjeta-3d:hover .tarjeta-dorso {
  transform: rotateY(360deg);
}
```

#### 🖼️ Galería con Zoom

```html
<div class="galeria-zoom">
  <div class="imagen-container">
    <img src="imagen1.jpg" alt="Imagen 1" />
  </div>
  <div class="imagen-container">
    <img src="imagen2.jpg" alt="Imagen 2" />
  </div>
  <div class="imagen-container">
    <img src="imagen3.jpg" alt="Imagen 3" />
  </div>
</div>
```

```css
.galeria-zoom {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 2rem;
}

.imagen-container {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.imagen-container img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.imagen-container:hover img {
  transform: scale(1.1);
}
```

---

## ⏱️ CSS Transiciones

### 🎯 ¿Qué son las Transiciones?

Las **transiciones CSS** permiten animar cambios de estado de propiedades CSS de manera suave y controlada.

### 🔧 Propiedades de Transición

#### ⏱️ `transition-property`

```css
.transicion-color {
  transition-property: color;
  color: blue;
}

.transicion-color:hover {
  color: red;
}

.transicion-multiple {
  transition-property: color, background-color, transform;
  color: blue;
  background-color: white;
}

.transicion-multiple:hover {
  color: white;
  background-color: blue;
  transform: scale(1.1);
}

.transicion-todas {
  transition-property: all; /* Por defecto */
}
```

#### ⏱️ `transition-duration`

```css
.transicion-rapida {
  transition-duration: 0.2s;
}

.transicion-media {
  transition-duration: 0.5s;
}

.transicion-lenta {
  transition-duration: 1s;
}

.transicion-multiple-duracion {
  transition-property: color, transform;
  transition-duration: 0.3s, 0.6s; /* Color: 0.3s, Transform: 0.6s */
}
```

#### ⏱️ `transition-timing-function`

```css
.transicion-lineal {
  transition-timing-function: linear;
}

.transicion-ease {
  transition-timing-function: ease; /* Por defecto */
}

.transicion-ease-in {
  transition-timing-function: ease-in;
}

.transicion-ease-out {
  transition-timing-function: ease-out;
}

.transicion-ease-in-out {
  transition-timing-function: ease-in-out;
}

.transicion-cubic {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

#### ⏱️ `transition-delay`

```css
.transicion-retraso {
  transition-delay: 0.5s; /* Espera 0.5s antes de empezar */
}

.transicion-multiple-retraso {
  transition-property: color, transform;
  transition-duration: 0.3s, 0.6s;
  transition-delay: 0s, 0.3s; /* Color sin retraso, Transform con 0.3s retraso */
}
```

#### ⏱️ `transition` (shorthand)

```css
.transicion-completa {
  transition: all 0.3s ease 0.1s;
  /* property duration timing-function delay */
}

.transicion-multiple-shorthand {
  transition: color 0.3s ease, background-color 0.5s ease-in 0.2s,
    transform 0.4s ease-out;
}
```

### 🎨 Ejemplos Prácticos de Transiciones

#### 🎯 Botón con Transición Completa

```html
<button class="boton-transicion">Click Me</button>
```

```css
.boton-transicion {
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: 2px solid #007bff;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.boton-transicion::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transition: left 0.5s ease;
}

.boton-transicion:hover {
  background-color: #0056b3;
  border-color: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
}

.boton-transicion:hover::before {
  left: 100%;
}

.boton-transicion:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
}
```

#### 🎴 Tarjeta con Efecto de Elevación

```html
<div class="tarjeta-elevacion">
  <h3>Título de la Tarjeta</h3>
  <p>Descripción de la tarjeta con contenido interesante.</p>
  <button class="boton-tarjeta">Leer Más</button>
</div>
```

```css
.tarjeta-elevacion {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.tarjeta-elevacion:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.tarjeta-elevacion h3 {
  color: #333;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.tarjeta-elevacion:hover h3 {
  color: #007bff;
}

.boton-tarjeta {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.boton-tarjeta:hover {
  background-color: #0056b3;
}
```

#### 🎨 Menú con Efecto de Deslizamiento

```html
<nav class="menu-deslizante">
  <ul>
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#servicios">Servicios</a></li>
    <li><a href="#proyectos">Proyectos</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
</nav>
```

```css
.menu-deslizante ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.menu-deslizante a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.menu-deslizante a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #007bff;
  transition: width 0.3s ease;
}

.menu-deslizante a:hover {
  color: #007bff;
}

.menu-deslizante a:hover::after {
  width: 100%;
}
```

---

## 🎬 CSS Animaciones

### 🎯 ¿Qué son las Animaciones CSS?

Las **animaciones CSS** permiten crear secuencias de cambios de propiedades que se ejecutan automáticamente o en respuesta a eventos.

### 🔧 Definición de Animaciones

#### 🎬 `@keyframes`

```css
@keyframes nombre-animacion {
  0% {
    /* Estado inicial */
    transform: translateX(0);
    opacity: 1;
  }

  50% {
    /* Estado intermedio */
    transform: translateX(100px);
    opacity: 0.5;
  }

  100% {
    /* Estado final */
    transform: translateX(200px);
    opacity: 0;
  }
}

@keyframes rebote {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-20px);
  }
}

@keyframes rotacion {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
```

### 🎯 Propiedades de Animación

#### 🎬 `animation-name`

```css
.elemento-animado {
  animation-name: rebote;
}
```

#### 🎬 `animation-duration`

```css
.animacion-rapida {
  animation-duration: 0.5s;
}

.animacion-lenta {
  animation-duration: 2s;
}
```

#### 🎬 `animation-timing-function`

```css
.animacion-ease {
  animation-timing-function: ease;
}

.animacion-linear {
  animation-timing-function: linear;
}

.animacion-cubic {
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

#### 🎬 `animation-delay`

```css
.animacion-retraso {
  animation-delay: 1s; /* Espera 1s antes de empezar */
}
```

#### 🎬 `animation-iteration-count`

```css
.animacion-una-vez {
  animation-iteration-count: 1; /* Por defecto */
}

.animacion-infinita {
  animation-iteration-count: infinite;
}

.animacion-tres-veces {
  animation-iteration-count: 3;
}
```

#### 🎬 `animation-direction`

```css
.animacion-normal {
  animation-direction: normal; /* Por defecto */
}

.animacion-reversa {
  animation-direction: reverse;
}

.animacion-alternada {
  animation-direction: alternate;
}

.animacion-alternada-reversa {
  animation-direction: alternate-reverse;
}
```

#### 🎬 `animation-fill-mode`

```css
.animacion-fill-none {
  animation-fill-mode: none; /* Por defecto */
}

.animacion-fill-forwards {
  animation-fill-mode: forwards; /* Mantiene el estado final */
}

.animacion-fill-backwards {
  animation-fill-mode: backwards; /* Aplica el estado inicial antes de empezar */
}

.animacion-fill-both {
  animation-fill-mode: both; /* Combina forwards y backwards */
}
```

#### 🎬 `animation-play-state`

```css
.animacion-pausada {
  animation-play-state: paused;
}

.animacion-reproduciendo {
  animation-play-state: running; /* Por defecto */
}
```

#### 🎬 `animation` (shorthand)

```css
.animacion-completa {
  animation: rebote 1s ease-in-out infinite alternate;
  /* name duration timing-function delay iteration-count direction fill-mode */
}
```

### 🎨 Ejemplos Prácticos de Animaciones

#### 🎯 Loading Spinner

```html
<div class="loading-spinner"></div>
```

```css
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spinner 1s linear infinite;
}
```

#### 🎯 Animación de Entrada

```html
<div class="contenedor-animaciones">
  <div class="elemento-entrada">Elemento 1</div>
  <div class="elemento-entrada">Elemento 2</div>
  <div class="elemento-entrada">Elemento 3</div>
</div>
```

```css
@keyframes entrada-desde-abajo {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.contenedor-animaciones {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
}

.elemento-entrada {
  background-color: #007bff;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  animation: entrada-desde-abajo 0.6s ease-out forwards;
  opacity: 0;
}

.elemento-entrada:nth-child(1) {
  animation-delay: 0.1s;
}

.elemento-entrada:nth-child(2) {
  animation-delay: 0.2s;
}

.elemento-entrada:nth-child(3) {
  animation-delay: 0.3s;
}
```

#### 🎯 Botón con Animación de Pulso

```html
<button class="boton-pulso">¡Clickeame!</button>
```

```css
@keyframes pulso {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
  }

  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
}

.boton-pulso {
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  animation: pulso 2s infinite;
}

.boton-pulso:hover {
  animation-play-state: paused;
}
```

#### 🎯 Tarjeta con Animación de Flip

```html
<div class="contenedor-flip">
  <div class="tarjeta-flip">
    <div class="tarjeta-frente">
      <h3>Frente</h3>
      <p>Información principal</p>
    </div>
    <div class="tarjeta-dorso">
      <h3>Dorso</h3>
      <p>Información adicional</p>
    </div>
  </div>
</div>
```

```css
@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
}

.contenedor-flip {
  perspective: 1000px;
  width: 300px;
  height: 200px;
}

.tarjeta-flip {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: flip 3s infinite alternate;
}

.tarjeta-frente,
.tarjeta-dorso {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tarjeta-frente {
  background-color: #007bff;
  color: white;
}

.tarjeta-dorso {
  background-color: #28a745;
  color: white;
  transform: rotateY(180deg);
}
```

---

## 🚀 Ejercicio Práctico

### 📝 Crear una Página con Efectos Animados

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Página con Animaciones</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="animaciones.css" />
  </head>
  <body>
    <!-- Header con animación de entrada -->
    <header class="header-animado">
      <nav class="nav-animada">
        <div class="logo">Logo</div>
        <ul class="menu-animado">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <!-- Hero con animaciones -->
    <section class="hero-animado">
      <div class="hero-content">
        <h1 class="titulo-animado">Bienvenido</h1>
        <p class="subtitulo-animado">
          Descubre el poder de las animaciones CSS
        </p>
        <button class="cta-animado">Comenzar</button>
      </div>
      <div class="hero-visual">
        <div class="elemento-flotante">🚀</div>
        <div class="elemento-flotante">✨</div>
        <div class="elemento-flotante">🎨</div>
      </div>
    </section>

    <!-- Sección de tarjetas -->
    <section class="tarjetas-seccion">
      <h2 class="titulo-seccion">Nuestros Servicios</h2>
      <div class="tarjetas-container">
        <div class="tarjeta-animada">
          <div class="icono-tarjeta">💻</div>
          <h3>Desarrollo Web</h3>
          <p>Creamos sitios web modernos y responsivos</p>
        </div>
        <div class="tarjeta-animada">
          <div class="icono-tarjeta">📱</div>
          <h3>Apps Móviles</h3>
          <p>Desarrollamos aplicaciones nativas y híbridas</p>
        </div>
        <div class="tarjeta-animada">
          <div class="icono-tarjeta">🎨</div>
          <h3>Diseño UI/UX</h3>
          <p>Diseñamos experiencias de usuario únicas</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer-animado">
      <p>&copy; 2024 Página con Animaciones</p>
    </footer>
  </body>
</html>
```

**Archivo `animaciones.css`:**

```css
/* Importar fuentes */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

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
  overflow-x: hidden;
}

/* Animaciones keyframes */
@keyframes entrada-desde-arriba {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes entrada-desde-izquierda {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes entrada-desde-derecha {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes flotacion {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes rotacion-lenta {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulso {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Header animado */
.header-animado {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 0;
  animation: entrada-desde-arriba 0.8s ease-out;
}

.nav-animada {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  animation: pulso 2s infinite;
}

.menu-animado {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.menu-animado li {
  animation: entrada-desde-derecha 0.8s ease-out;
  animation-delay: calc(0.1s * var(--i, 0));
}

.menu-animado a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.menu-animado a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3498db;
  transition: width 0.3s ease;
}

.menu-animado a:hover {
  color: #3498db;
}

.menu-animado a:hover::after {
  width: 100%;
}

/* Hero animado */
.hero-animado {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60vh;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 600px;
  animation: entrada-desde-izquierda 1s ease-out;
}

.titulo-animado {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: entrada-desde-izquierda 1s ease-out 0.2s both;
}

.subtitulo-animado {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: entrada-desde-izquierda 1s ease-out 0.4s both;
}

.cta-animado {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: entrada-desde-izquierda 1s ease-out 0.6s both;
}

.cta-animado:hover {
  background-color: #c0392b;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
}

.hero-visual {
  position: relative;
  width: 300px;
  height: 300px;
}

.elemento-flotante {
  position: absolute;
  font-size: 3rem;
  animation: flotacion 3s ease-in-out infinite;
}

.elemento-flotante:nth-child(1) {
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.elemento-flotante:nth-child(2) {
  top: 50%;
  right: 20%;
  animation-delay: 1s;
}

.elemento-flotante:nth-child(3) {
  bottom: 20%;
  left: 50%;
  animation-delay: 2s;
}

/* Sección de tarjetas */
.tarjetas-seccion {
  padding: 4rem 2rem;
  background-color: #f8f9fa;
}

.titulo-seccion {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  animation: entrada-desde-arriba 0.8s ease-out;
}

.tarjetas-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.tarjeta-animada {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  animation: entrada-desde-abajo 0.8s ease-out;
  animation-delay: calc(0.2s * var(--i, 0));
}

.tarjeta-animada:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.icono-tarjeta {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: rotacion-lenta 10s linear infinite;
}

.tarjeta-animada h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.tarjeta-animada p {
  color: #7f8c8d;
  line-height: 1.6;
}

/* Footer animado */
.footer-animado {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem;
  animation: entrada-desde-abajo 0.8s ease-out;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-animado {
    flex-direction: column;
    text-align: center;
  }

  .titulo-animado {
    font-size: 2rem;
  }

  .hero-visual {
    width: 200px;
    height: 200px;
    margin-top: 2rem;
  }

  .elemento-flotante {
    font-size: 2rem;
  }
}
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crear una página de portafolio interactiva que incluya:

1. **Animaciones de entrada** para cada sección
2. **Efectos hover** en tarjetas y botones
3. **Animaciones de scroll** que se activen al hacer scroll
4. **Transiciones suaves** entre estados
5. **Efectos de parallax** simples
6. **Animaciones de carga** (loading states)
7. **Efectos de partículas** o elementos flotantes

**Requisitos técnicos:**

- Usar `@keyframes` para animaciones complejas
- Implementar `transition` para efectos suaves
- Aplicar `transform` para efectos 3D
- Crear animaciones responsivas
- Optimizar el rendimiento con `will-change`
- Usar `animation-fill-mode` apropiadamente

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [CSS Transforms](https://developer.mozilla.org/es/docs/Web/CSS/transform) - Documentación MDN
- [CSS Transitions](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Transitions) - Guía completa
- [CSS Animations](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Animations) - Tutorial oficial
- [CSS Animation Libraries](https://animate.style/) - Biblioteca de animaciones
- [Cubic Bezier](https://cubic-bezier.com/) - Generador de curvas de animación

### 📖 Conceptos para Investigar

- **CSS Custom Properties** en animaciones
- **Intersection Observer API** para animaciones de scroll
- **CSS Motion Path** (experimental)
- **Web Animations API** (JavaScript)
- **View Transitions** 🔥🔥🔥

---

## ❓ Preguntas Frecuentes

### ¿Cuál es la diferencia entre transition y animation?

- **Transition:** Anima cambios de estado (hover, focus, etc.)
- **Animation:** Crea secuencias complejas independientes de estados

### ¿Cómo optimizar el rendimiento de animaciones?

- Usar `transform` y `opacity` en lugar de otras propiedades
- Aplicar `will-change` para elementos que se animarán
- Usar `transform3d` para forzar aceleración por hardware
- Evitar animar propiedades que causan reflow

### ¿Cuándo usar animation-fill-mode?

- **forwards:** Mantener el estado final de la animación
- **backwards:** Aplicar el estado inicial antes de empezar
- **both:** Combinar ambos comportamientos

### ¿Cómo crear animaciones responsivas?

- Usar unidades relativas (%, vw, vh)
- Aplicar media queries para diferentes tamaños
- Usar `prefers-reduced-motion` para accesibilidad

---

## 🎉 ¡Animaciones CSS Dominadas!

¡Excelente trabajo! Ya conoces las técnicas avanzadas de animación CSS. En la próxima clase aprenderemos sobre responsive design para crear sitios web que se adapten a todos los dispositivos.

**Recuerda:** Las animaciones mejoran la UX, pero deben ser sutiles y funcionales. ¡No sobrecargues la página! ✨

---

_📧 **Contacto:** Si tienes dudas sobre animaciones CSS, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
