# 🔧 Clase 4: HTML5 y CSS3 - Git y GitHub

## 🎯 Objetivos de la Clase

- Conocer las nuevas características de HTML5 y CSS3
- Entender el control de versiones y su importancia
- Aprender los comandos básicos de Git
- Crear y gestionar repositorios en GitHub
- Integrar HTML5 y CSS3 con control de versiones
- Aplicar mejores prácticas de desarrollo

---

## 🌟 HTML5: Nuevas Características

### 🎨 Elementos Semánticos Avanzados

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML5 Avanzado</title>
  </head>
  <body>
    <!-- Header con navegación -->
    <header>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <!-- Contenido principal -->
    <main>
      <!-- Sección de artículos -->
      <section>
        <article>
          <header>
            <h2>Título del Artículo</h2>
            <time datetime="2025-01-15">15 de Enero, 2025</time>
          </header>
          <p>Contenido del artículo...</p>
          <footer>
            <p>Autor: Juan Pérez</p>
          </footer>
        </article>
      </section>

      <!-- Contenido relacionado -->
      <aside>
        <h3>Artículos Relacionados</h3>
        <ul>
          <li><a href="#">Artículo 1</a></li>
          <li><a href="#">Artículo 2</a></li>
        </ul>
      </aside>
    </main>

    <!-- Pie de página -->
    <footer>
      <p>&copy; 2025 Mi Sitio Web</p>
    </footer>
  </body>
</html>
```

---

## 🎨 CSS3: Nuevas Características

### 🌈 Gradientes

```css
.gradientes {
  /* Gradiente lineal */
  background: linear-gradient(to right, #ff6b6b, #4ecdc4);

  /* Gradiente radial */
  background: radial-gradient(circle, #ff6b6b, #4ecdc4);

  /* Gradiente con múltiples colores */
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);

  /* Gradiente con transparencia */
  background: linear-gradient(
    to bottom,
    rgba(255, 107, 107, 0.8),
    rgba(78, 205, 196, 0.8)
  );
}
```

### 🎭 Sombras

```css
.sombras {
  /* Sombra de caja */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);

  /* Sombra de texto */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}
```

### 🔄 Transformaciones

```css
.transformaciones {
  /* Rotación */
  transform: rotate(45deg);

  /* Escala */
  transform: scale(1.5);
  transform: scaleX(2);
  transform: scaleY(0.5);

  /* Traslación */
  transform: translate(50px, 100px);
  transform: translateX(50px);
  transform: translateY(100px);

  /* Sesgado */
  transform: skew(20deg, 10deg);

  /* Múltiples transformaciones */
  transform: rotate(45deg) scale(1.2) translate(20px, 20px);
}
```

### 🔄 Transiciones Básicas

```css
.transicion-basica {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.transicion-basica:hover {
  background-color: red;
}
```

### 🎨 Nuevas Propiedades CSS3

```css
/* Bordes redondeados */
.bordes-redondeados {
  border-radius: 10px;
  border-radius: 50%; /* Círculo perfecto */
}

/* Sombras de caja */
.sombra-caja {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Sombras de texto */
.sombra-texto {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Opacidad */
.opacidad {
  opacity: 0.8;
}

/* Transformaciones básicas */
.transformacion {
  transform: rotate(5deg);
  transform: scale(1.1);
  transform: translateX(10px);
}
```

---

## 🔄 Control de Versiones con Git

### 📚 ¿Qué es Git?

**Git** es un sistema de control de versiones distribuido que permite rastrear cambios en archivos y coordinar el trabajo entre múltiples desarrolladores.

### 🎯 Ventajas del Control de Versiones

- **Historial completo** de cambios
- **Trabajo colaborativo** sin conflictos.. casi sin conflictos
- **Rollback** a versiones anteriores
- **Ramas** para diferentes funcionalidades
- **Backup** automático del código

### 🚀 Configuración Inicial

```bash
# Configurar usuario
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Verificar configuración
git config --list
```

### 📁 Comandos Básicos de Git

```bash
# Inicializar repositorio
git init

# Ver estado del repositorio
git status

# Agregar archivos al staging area
git add archivo.html
git add .  # Agregar todos los archivos

# Crear commit
git commit -m "Mensaje descriptivo del cambio"

# Ver historial de commits
git log
git log --oneline

# Ver diferencias
git diff
git diff archivo.html
```

### 🌿 Trabajo con Ramas

```bash
# Crear nueva rama
git branch nueva-funcionalidad

# Cambiar a una rama
git checkout nueva-funcionalidad
git switch nueva-funcionalidad  # Comando más moderno

# Crear y cambiar a nueva rama
git checkout -b nueva-funcionalidad

# Ver todas las ramas
git branch

# Fusionar rama con main
git checkout main
git merge nueva-funcionalidad

# Eliminar rama
git branch -d nueva-funcionalidad
```

### 🔗 Trabajo con Repositorios Remotos

```bash
# Clonar repositorio
git clone https://github.com/usuario/repositorio.git

# Agregar repositorio remoto
git remote add origin https://github.com/usuario/repositorio.git

# Enviar cambios al repositorio remoto
git push origin main

# Obtener cambios del repositorio remoto
git pull origin main

# Ver repositorios remotos
git remote -v
```

---

## 🐙 GitHub: Plataforma de Colaboración

### 📖 ¿Qué es GitHub?

**GitHub** es una plataforma web que aloja repositorios Git y proporciona herramientas para colaboración, gestión de proyectos y despliegue.

### 🎯 Características Principales

- **Alojamiento** de repositorios
- **Pull Requests** para revisión de código
- **Issues** para seguimiento de problemas
- **Actions** para automatización
- **Pages** para hosting de sitios web

### 🚀 Crear Repositorio en GitHub

1. **Ir a GitHub.com** y crear cuenta
2. **Hacer clic en "New repository"**
3. **Configurar repositorio:**
   - Nombre del repositorio
   - Descripción
   - Público o privado
   - Inicializar con README

### 📝 README.md Profesional

````markdown
# 🎨 Mi Proyecto Web

## 📋 Descripción

Este es un proyecto web desarrollado con HTML5 y CSS3 que demuestra las mejores prácticas de desarrollo frontend.

## 🚀 Características

- ✅ HTML5 semántico
- ✅ CSS3 moderno
- ✅ Diseño responsivo
- ✅ Accesibilidad web
- ✅ Optimización SEO

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- Git & GitHub

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/mi-proyecto.git
```
````

2. Abre el archivo `index.html` en tu navegador

## 🎯 Uso

Simplemente abre `index.html` en cualquier navegador moderno.

## 👥 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b [feature]AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin [feature]AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 📞 Contacto

- Email: tu@email.com
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tuperfil)
- Portfolio: [tuportfolio.com](https://tuportfolio.com)

## 🙏 Agradecimientos

- UTN por la formación
- Comunidad de desarrolladores web

````

### 🔄 Flujo de Trabajo con GitHub

```bash
# 1. Clonar repositorio
git clone https://github.com/usuario/repositorio.git
cd repositorio

# 2. Crear rama para nueva funcionalidad
git checkout -b nueva-funcionalidad

# 3. Hacer cambios en el código
# ... editar archivos ...

# 4. Agregar y commitear cambios
git add .
git commit -m "Agregar nueva funcionalidad"

# 5. Subir rama al repositorio remoto
git push origin nueva-funcionalidad

# 6. Crear Pull Request en GitHub
# Ir a GitHub y crear PR desde nueva-funcionalidad a main

# 7. Después de aprobación, fusionar en main
git checkout main
git pull origin main
git branch -d nueva-funcionalidad
````

---

## 🚀 Ejercicio Práctico Integrado

### 📝 Proyecto: Página de Recetas con HTML5 y CSS3

Crear una página web de recetas usando HTML5, CSS3 y Git/GitHub:

**Estructura del proyecto:**

```
recetas/
├── index.html
├── css/
│   └── style.css
├── images/
│   └── comida.jpg
├── README.md
└── .gitignore
```

**Archivo `index.html`:**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Recetas deliciosas y fáciles de preparar"
    />
    <meta name="keywords" content="recetas, cocina, comida, gastronomía" />
    <meta name="author" content="Tu Nombre" />
    <title>Recetas Deliciosas</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header>
      <h1>🍳 Recetas Deliciosas</h1>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#recetas">Recetas</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="inicio">
        <h2>Bienvenidos a Nuestras Recetas</h2>
        <p>Descubre recetas fáciles y deliciosas para toda la familia.</p>
      </section>

      <section id="recetas">
        <article class="receta">
          <h3>🍝 Pasta Carbonara</h3>
          <img src="images/comida.jpg" alt="Pasta Carbonara" />

          <section class="ingredientes">
            <h4>📋 Ingredientes</h4>
            <ul>
              <li>400g de pasta</li>
              <li>200g de panceta</li>
              <li>4 yemas de huevo</li>
              <li>100g de queso parmesano</li>
              <li>Sal y pimienta</li>
            </ul>
          </section>

          <section class="preparacion">
            <h4>👨‍🍳 Preparación</h4>
            <ol>
              <li>Cocinar la pasta en agua con sal</li>
              <li>Freír la panceta hasta que esté crujiente</li>
              <li>Batir las yemas con el queso parmesano</li>
              <li>Mezclar todo con la pasta caliente</li>
              <li>Servir inmediatamente</li>
            </ol>
          </section>

          <aside class="consejos">
            <h4>💡 Consejos</h4>
            <p>No cocines demasiado las yemas, deben quedar cremosas.</p>
          </aside>
        </article>
      </section>

      <section id="contacto">
        <h3>📞 Contacto</h3>
        <p>¿Tienes alguna receta favorita? ¡Compártela con nosotros!</p>
        <p>Email: recetas@ejemplo.com</p>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Recetas Deliciosas. Todos los derechos reservados.</p>
    </footer>
  </body>
</html>
```

**Archivo `css/style.css`:**

```css
/* Estilos básicos */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

/* Header */
header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: center;
}

header h1 {
  margin: 0;
  font-size: 2rem;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  color: #3498db;
}

/* Main content */
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

section {
  background: white;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Receta */
.receta {
  border: 2px solid #3498db;
  border-radius: 10px;
  padding: 1.5rem;
}

.receta h3 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

.receta img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 1rem 0;
}

/* Ingredientes y preparación */
.ingredientes,
.preparacion {
  margin: 1.5rem 0;
}

.ingredientes h4,
.preparacion h4 {
  color: #e74c3c;
  margin-bottom: 1rem;
}

.ingredientes ul {
  background-color: #f8f9fa;
  padding: 1rem 2rem;
  border-radius: 5px;
  border-left: 4px solid #3498db;
}

.preparacion ol {
  background-color: #f8f9fa;
  padding: 1rem 2rem;
  border-radius: 5px;
  border-left: 4px solid #e74c3c;
}

/* Consejos */
.consejos {
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1.5rem;
}

.consejos h4 {
  color: rgb(213, 172, 48);
  margin-top: 0;
}

/* Footer */
footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}
```

**Archivo `.gitignore`:**

```
# Archivos del sistema
.DS_Store
Thumbs.db

# Archivos de IDE
.vscode/
.idea/
*.swp
*.swo

# Archivos temporales
*.tmp
*.temp

# Logs
*.log

# Dependencias (si usas npm)
node_modules/
package-lock.json

# Archivos de build
dist/
build/
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

1. **Crear la página de recetas** usando el código proporcionado
2. **Inicializar repositorio Git** en tu proyecto
3. **Crear cuenta en GitHub** (si no tienes)
4. **Subir el proyecto a GitHub** con commits descriptivos
5. **Crear README.md** profesional
6. **Hacer al menos 3 commits** con mensajes descriptivos

**Requisitos técnicos:**

- Usar HTML5 semántico (header, main, section, article, aside, footer)
- Aplicar CSS3 básico (bordes redondeados, sombras, colores)
- Usar Git para control de versiones
- Subir a GitHub con README profesional

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [Git Documentation](https://git-scm.com/doc) - Documentación oficial de Git
- [GitHub Guides](https://guides.github.com/) - Guías oficiales de GitHub
- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [CSS3 Features](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

### 📖 Conceptos para Investigar

- **Git branching strategies** (GitFlow, GitHub Flow)
- **Git hooks** para automatización
- **GitHub Actions** para CI/CD

---

## ❓ Preguntas Frecuentes

### ¿Cuál es la diferencia entre Git y GitHub?

- **Git:** Sistema de control de versiones local
- **GitHub:** Plataforma web que aloja repositorios Git
- **Git** maneja versiones, **GitHub** facilita colaboración

### ¿Por qué usar control de versiones?

- **Historial** completo de cambios
- **Colaboración** sin conflictos
- **Backup** automático del código
- **Rollback** a versiones anteriores
- **Ramas** para diferentes funcionalidades

### ¿Qué son los commits?

- **Snapshots** del código en un momento específico
- **Mensajes descriptivos** explican qué cambió
- **Identificadores únicos** (hash) para cada commit
- **Historial lineal** de cambios

---

## 🎉 ¡HTML5, CSS3 y Git Dominados!

¡Excelente trabajo! Ya conoces las características modernas de HTML5 y CSS3, así como el control de versiones con Git y GitHub. En la próxima clase profundizaremos en CSS avanzado.

**Recuerda:** El control de versiones es esencial para cualquier desarrollador profesional. ¡Practica mucho con Git! 🚀

---

_📧 **Contacto:** Si tienes dudas sobre HTML5, CSS3, Git o GitHub, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
