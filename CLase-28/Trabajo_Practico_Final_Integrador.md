# 🧪 Trabajo Práctico Final Integrador - Programación Web con React

## 🎯 Objetivo

El objetivo de este trabajo práctico es que el estudiante demuestre su capacidad para diseñar, estructurar y desarrollar una aplicación web completa utilizando **React**. A través de este proyecto deberá aplicar conceptos fundamentales vistos durante el curso: componentes reutilizables, enrutamiento, consumo de APIs, manejo de estado, y diseño responsivo.

---

## 📁 Entrega

- La entrega se realizará mediante un **repositorio público en GitHub**.
- El repositorio debe incluir el código fuente del proyecto y un archivo \`README.md\` con instrucciones claras de instalación y ejecución.
- El nombre del repositorio debe ser: \`tp-final-react-[nombre-apellido]\`.

---

## 🛠️ Requisitos técnicos obligatorios

1. 📦 El proyecto debe ser creado con **Vite** y **React**.
2. 📜 Puede estar desarrollado en **JavaScript o TypeScript**.
3. 🧩 Se permite el uso de **cualquier librería de componentes UI** (Material UI, Bootstrap, etc.) si el alumno lo desea.
4. 🧭 Es obligatorio el uso de **React Router DOM** para la navegación entre páginas.
5. ♻️ La aplicación debe incluir al menos **un componente reutilizable** utilizado en las tres pantallas.
6. 📱 El sitio debe ser **responsive**, adaptándose correctamente a dispositivos móviles, tablets y desktops.

---

## 🌐 Descripción del proyecto

La aplicación consistirá en una **web con temática Pokémon**, utilizando datos públicos de la [PokeAPI](https://pokeapi.co/).  
El sitio deberá contar con **tres pantallas principales** conectadas mediante rutas:

---

## 📄 Estructura de la aplicación

### 1. 🏠 Home (Página Informativa)

- Debe explicar **de qué trata el proyecto** y su propósito.
- Puede incluir texto, imágenes, estilos o secciones adicionales a criterio del alumno.

### 2. 📜 Listado de Pokemons

- Debe consumir datos desde la **PokeAPI** (\`https://pokeapi.co/api/v2/pokemon\`) y renderizar un listado de pokemons.
- El listado puede mostrarse en forma de **cards** o **lista**, con al menos el **nombre e imagen** de cada Pokémon.
- Cada card debe ser **clickeable**: al hacer clic debe redirigir a la pantalla de detalle correspondiente.

### 3. 🔎 Detalle del Pokémon

- Debe recibir un **ID o nombre en la URL** y mostrar información más detallada del Pokémon seleccionado (por ejemplo: nombre, tipo, habilidades, peso, altura, imagen, etc.).
- Esta página se debe poder abrir tanto:
  - Haciendo clic en una card del listado.
  - Ingresando directamente la URL correspondiente.

---

## ♻️ Componente Reutilizable

- Debe existir al menos **un componente reutilizable** utilizado en **todas las pantallas**.

---

## 📱 Diseño Responsivo

- El sitio debe ser completamente **responsive**.
- Debe adaptarse correctamente a distintos tamaños de pantalla (móvil, tablet, escritorio).

---

## ⭐ PLUS (Opcional - Para Nota Extra)

Si el estudiante desea **sumar puntos adicionales**, puede implementar las siguientes funcionalidades:

1. 🗂️ **Gestión de estado global con Redux Toolkit.**
2. ❤️ **Favoritos:**
   - Agregar en la Home una sección de “Pokémon Favoritos”.
   - Permitir agregar pokemons a esta lista desde:
     - El listado de pokemons.
     - La página de detalle.
   - Mostrar en la Home los favoritos seleccionados por el usuario.

---

## 📊 Criterios de evaluación

| Criterio                                            | Peso |
| --------------------------------------------------- | ---- |
| Correcta estructura del proyecto y uso de React     | 20%  |
| Implementación de enrutamiento con React Router DOM | 10%  |
| Consumo y renderizado de datos desde API            | 20%  |
| Componentes reutilizables y buenas prácticas        | 25%  |
| Responsividad del sitio                             | 20%  |
| Claridad del README e instrucciones de instalación  | 5%   |
| Funcionalidades extra (Redux Toolkit + Favoritos)   | +10% |

---

💡 **Recomendación:** se valorará especialmente el **código limpio**, la **organización del proyecto**, la **división lógica en componentes** y el uso adecuado de las **herramientas modernas de React**.
