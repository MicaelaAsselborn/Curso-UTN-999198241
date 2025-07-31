# 🎯 Clase 10: Práctica Integradora - HTML, CSS y Bootstrap

## 🎯 Objetivos de la Clase

- Consolidar conocimientos de HTML, CSS y Bootstrap
- Aplicar conceptos aprendidos en ejercicios prácticos
- Desarrollar habilidades de maquetación web
- Crear proyectos incrementales con complejidad creciente
- Practicar responsive design y componentes interactivos

---

## 🚀 Metodología de Trabajo

### 📈 Enfoque Iterativo e Incremental

Esta clase está diseñada con ejercicios que van **incrementando en complejidad** y permiten **iterar** sobre los mismos conceptos para reforzarlos.

## 📝 Consejos para el Desarrollo

### 🎯 Mejores Prácticas

1. **Planifica antes de codificar** - Haz un wireframe o mockup
2. **Usa versionado** - Git para control de versiones
3. **Comenta tu código** - Explica secciones complejas
4. **Prueba en múltiples dispositivos** - Responsive testing
5. **Optimiza imágenes** - Usa formatos apropiados
6. **Valida tu HTML/CSS** - Usa validadores online

### 🎨 Diseño

1. **Mantén consistencia** - Paleta de colores uniforme
2. **Usa jerarquía visual** - Tipografía y espaciado
3. **Considera accesibilidad** - Contraste y navegación
4. **Sé minimalista** - Menos es más
5. **Piensa en UX** - Experiencia del usuario

### 🎯 Estructura de los Ejercicios

1. **Nivel Básico** - Conceptos fundamentales
2. **Nivel Intermedio** - Componentes y layouts

## 🎨 Ejercicio 1: Tarjeta de Perfil Básica

### 📋 Nivel: Básico

### ⏱️ Tiempo estimado: 25 minutos

### 🎯 Objetivo

Crear una tarjeta de perfil simple usando HTML y CSS básico.

### 📝 Enunciado

Crea una tarjeta de perfil que contenga:

- Foto de perfil (puedes usar placeholder 👉 [https://i.pravatar.cc/150](https://i.pravatar.cc/150))
- Nombre completo
- Título profesional
- Breve descripción
- Enlaces a redes sociales

### 💡 Pistas

- Usa `border-radius` para esquinas redondeadas
- Aplica `box-shadow` para efecto de elevación
- Usa `text-align: center` para centrar contenido
- Implementa `:hover` para efectos interactivos

### 🔧 Código Base

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tarjeta de Perfil</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <!-- Tu tarjeta aquí -->
    </div>
  </body>
</html>
```

### ✅ Criterios de Evaluación

- [ ] Estructura HTML semántica
- [ ] Estilos CSS aplicados correctamente
- [ ] Diseño responsive básico
- [ ] Efectos hover implementados

---

## 🎨 Ejercicio 2: Tarjeta de Perfil con Bootstrap

### 📋 Nivel: Básico-Intermedio

### ⏱️ Tiempo estimado: 30 minutos

### 🎯 Objetivo

Convertir la tarjeta anterior usando componentes de Bootstrap.

### 📝 Enunciado

Transforma tu tarjeta de perfil usando:

- Componente `card` de Bootstrap
- Clases de utilidad para espaciado
- Botones de Bootstrap para redes sociales
- Iconos de Bootstrap Icons
- Badges para mostrar habilidades

### 💡 Pistas

- Usa `card` y `card-body`
- Aplica clases como `text-center`, `mb-3`, `p-4`
- Implementa `btn btn-primary` para botones
- Agrega iconos con `bi bi-*`
- Usa `badge bg-*` para habilidades

### 🔧 Código Base

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tarjeta Bootstrap</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
    />
  </head>
  <body>
    <div class="container py-5">
      <!-- Tu tarjeta Bootstrap aquí -->
    </div>
  </body>
</html>
```

### ✅ Criterios de Evaluación

- [ ] Uso correcto de componentes Bootstrap
- [ ] Aplicación de clases de utilidad
- [ ] Integración de iconos y badges
- [ ] Diseño responsive con Bootstrap

---

## 🎨 Ejercicio 3: Galería de Tarjetas

### 📋 Nivel: Intermedio

### ⏱️ Tiempo estimado: 35 minutos

### 🎯 Objetivo

Crear una galería de múltiples tarjetas usando el sistema de grid.

### 📝 Enunciado

Crea una galería que muestre 6 tarjetas de perfil:

- Usa el sistema de grid de Bootstrap
- Las tarjetas deben ser responsivas
- Agrega efectos hover con CSS
- Organiza por categorías (desarrolladores, diseñadores, etc.)

### 💡 Pistas

- Usa `row` y `col-*` para el grid
- Aplica `row-cols-*` para control automático
- Implementa `:hover` en CSS
- Usa diferentes colores de badges para categorías

### 🔧 Estructura Sugerida

```html
<div class="container py-5">
  <!-- Título y descripción -->
  <div class="row mb-4">
    <div class="col-12 text-center">
      <h2>Nuestro Equipo</h2>
      <p class="text-muted">
        Conoce a los profesionales que hacen posible la magia
      </p>
    </div>
  </div>

  <!-- Galería -->
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <!-- Tarjetas aquí -->
  </div>
</div>
```

### ✅ Criterios de Evaluación

- [ ] Grid responsivo implementado
- [ ] Efectos hover funcionando
- [ ] Categorías diferenciadas visualmente
- [ ] Diseño consistente entre tarjetas

---

## 🎨 Ejercicio 4: Landing Page Completa

### 📋 Nivel: Intermedio-Avanzado

### ⏱️ Tiempo estimado: 40 minutos

### 🎯 Objetivo

Crear una landing page completa con múltiples secciones.

### 📝 Enunciado

Desarrolla una landing page que incluya:

- **Header** con navegación
- **Hero section** con call-to-action
- **Sección de servicios** con iconos
- **Galería de proyectos** (usar ejercicio anterior)
- **Formulario de contacto** (simple)
- **Footer** con información

### 💡 Pistas

- Usa `navbar` de Bootstrap
- Implementa hero section con gradientes CSS
- Aplica `container-fluid` para secciones full-width
- Usa `form-control` para formularios
- Implementa scroll suave con CSS

### 🔧 Estructura Sugerida

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi Portfolio</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <!-- Navegación aquí -->
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
      <!-- Hero content aquí -->
    </section>

    <!-- Servicios -->
    <section class="py-5 bg-light">
      <!-- Servicios aquí -->
    </section>

    <!-- Proyectos -->
    <section class="py-5">
      <!-- Galería de proyectos aquí -->
    </section>

    <!-- Contacto -->
    <section class="py-5 bg-dark text-white">
      <!-- Formulario aquí -->
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white py-4">
      <!-- Footer content aquí -->
    </footer>
  </body>
</html>
```

### ✅ Criterios de Evaluación

- [ ] Navegación funcional y responsive
- [ ] Hero section atractivo
- [ ] Secciones bien estructuradas
- [ ] Formulario bien diseñado
- [ ] Diseño coherente en toda la página

---

## 📊 Rúbrica de Evaluación

### 🎯 Criterios Generales

| Criterio           | Básico (1-2)          | Intermedio (3-4)     |
| ------------------ | --------------------- | -------------------- |
| **HTML Semántico** | Estructura básica     | Etiquetas apropiadas |
| **CSS Responsive** | Media queries básicas | Flexbox/Grid         |
| **Bootstrap**      | Componentes básicos   | Utilidades avanzadas |
| **Interactividad** | Hover básico          | JavaScript simple    |

---

## 🛠️ Herramientas y Recursos

### 📚 Recursos de Referencia

- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

### 🔧 Herramientas de Desarrollo

- **VS Code** - Editor recomendado
- **Live Server** - Para desarrollo local
- **Chrome DevTools** - Para debugging

---

## 🎉 ¡Manos a la Obra!

### 🚀 Instrucciones Finales

1. **Comienza con el Ejercicio 1** y avanza secuencialmente
2. **Objetivo de clase:** Completar ejercicios 1-4 (2 horas 10 minutos)
3. **Ejercicios 5-6:** Para práctica adicional fuera de clase
4. **Experimenta** - No tengas miedo de probar cosas nuevas
5. **Documenta** - Guarda tus aprendizajes
6. **Comparte** - Muestra tu trabajo a otros

### 📞 Soporte

- **Durante la clase:** Pregunta al instructor
- **Después de clase:** Usa los canales de comunicación
- **Recursos:** Consulta la documentación oficial
- **Comunidad:** Comparte con tus compañeros

---

## 🏆 ¡Éxito Garantizado!

Recuerda: **La práctica hace al maestro**. Cada ejercicio te acerca más a convertirte en un desarrollador frontend experto.

**¡Disfruta el proceso y crea algo increíble!** 🎨✨
