# ⚛️ Clase 21: Introducción a React

## 🎯 Objetivos de la Clase

- Comprender qué es React y su importancia en el desarrollo web moderno
- Instalar y configurar el entorno de desarrollo con Node.js y Vite
- Aprender los conceptos básicos de componentes y JSX
- Crear el primer componente React funcional
- Entender el flujo de datos y el estado en React
- Practicar con ejercicios básicos de componentes

---

## 📚 ¿Qué es React?

### 🔍 Definición

**React** es una biblioteca de JavaScript desarrollada por Facebook (ahora Meta) para construir interfaces de usuario interactivas y reutilizables, especialmente para aplicaciones web de una sola página (SPA).

### 🏗️ Características Principales

- **Componentes Reutilizables:** Permite crear piezas de UI independientes y reutilizables
- **DOM Virtual:** Optimiza el rendimiento al actualizar solo los elementos necesarios
- **JSX:** Sintaxis que combina JavaScript con HTML para una programación más intuitiva
- **Unidireccional:** Flujo de datos predecible de padre a hijo
- **Ecosistema Rico:** Gran cantidad de librerías y herramientas complementarias

### 📖 Historia Breve

- **2011:** Jordan Walke crea el prototipo inicial en Facebook
- **2013:** React se libera como código abierto en GitHub
- **2015:** Lanzamiento de React Native para desarrollo móvil
- **2016:** Introducción de Redux para gestión de estado
- **2018:** Lanzamiento de React Hooks, revolucionando el desarrollo
- **2023:** Estado actual con React 18 y mejoras de rendimiento

---

## 🛠️ Configuración del Entorno de Desarrollo

### 📥 Instalación de Node.js

**Node.js** es un entorno de ejecución de JavaScript que necesitamos para trabajar con React.

#### Pasos para instalar Node.js:

1. **Visita el sitio oficial:** [nodejs.org](https://nodejs.org/)
2. **Descarga la versión LTS** (Long Term Support) - recomendada para la mayoría de usuarios
3. **Ejecuta el instalador** y sigue las instrucciones
4. **Verifica la instalación** abriendo la terminal y ejecutando:

```bash
node --version
npm --version
```

### ⚡ Instalación de Vite

**Vite** es una herramienta de construcción moderna y rápida para proyectos frontend.

#### Crear un nuevo proyecto React con Vite:

```bash
# Crear nuevo proyecto
npm create vite@latest

# o

npm create vite@latest mi-primer-react-app -- --template react

# Navegar al directorio
cd mi-primer-react-app

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

#### Estructura del proyecto:

```
mi-primer-react-app/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🏛️ Conceptos Fundamentales de React

### 📝 Componentes

Un **componente** es una pieza reutilizable de la interfaz de usuario que encapsula lógica y presentación.

```jsx
// Componente funcional (recomendado)
function Saludo() {
  return <h1>¡Hola, React!</h1>;
}

// Uso del componente
function App() {
  return (
    <div>
      <Saludo />
    </div>
  );
}
```

### 📝 JSX (JavaScript XML)

**JSX** es una extensión de sintaxis que permite escribir HTML dentro de JavaScript.

```jsx
// JSX permite combinar HTML con JavaScript
function Usuario(props) {
  const nombre = 'Ana';
  return (
    <div>
      <h2>Bienvenida, {nombre}!</h2>
      <p>Edad: {props.edad}</p>
    </div>
  );
}
```

### 📝 Props (Propiedades)

Las **props** son datos que se pasan de un componente padre a un componente hijo.

```jsx
// Componente padre
function App() {
  return <Usuario nombre='Carlos' edad={25} ciudad='Buenos Aires' />;
}

// Componente hijo
function Usuario(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>Edad: {props.edad}</p>
      <p>Ciudad: {props.ciudad}</p>
    </div>
  );
}
```

### 📝 Estado (State)

El **estado** es información interna del componente que puede cambiar y causar re-renderizados.

```jsx
import { useState } from 'react';

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
    </div>
  );
}
```

---

## 🪝 ¿Qué son los Hooks?

### 🔍 Definición de Hooks

Los **Hooks** son funciones especiales de React que permiten a los componentes funcionales "conectarse" a características de React como el estado y el ciclo de vida. Fueron introducidos en React 16.8 para resolver limitaciones de los componentes funcionales.

### 🏗️ Características Principales de los Hooks

- **Solo en Componentes Funcionales:** Los hooks solo funcionan dentro de componentes funcionales o hooks personalizados
- **Siempre en el Nivel Superior:** No se pueden usar dentro de bucles, condicionales o funciones anidadas
- **Comienzan con "use":** Por convención, todos los hooks empiezan con la palabra "use"
- **Reutilizables:** Pueden ser extraídos en hooks personalizados para reutilizar lógica

### 📖 ¿Por qué se Crearon los Hooks?

**Antes de los Hooks (React < 16.8):**

- Solo los componentes de clase podían usar estado y ciclo de vida
- Los componentes funcionales eran "tontos" (solo recibían props y devolvían JSX)
- La lógica compleja requería componentes de clase grandes y difíciles de mantener

**Con los Hooks:**

- Los componentes funcionales pueden usar estado y efectos
- Mejor reutilización de lógica entre componentes
- Código más limpio y fácil de entender
- Mejor testing y debugging

### 🎯 Reglas de los Hooks

1. **Solo llamar hooks en el nivel superior** - Nunca dentro de bucles, condiciones o funciones anidadas
2. **Solo llamar hooks desde componentes React** - O desde otros hooks personalizados
3. **Usar hooks en el mismo orden** - Para que React pueda rastrear el estado correctamente

```jsx
// ✅ CORRECTO - Hooks en el nivel superior
function MiComponente() {
  const [estado, setEstado] = useState(0);
  const [otroEstado, setOtroEstado] = useState('');

  useEffect(() => {
    // efecto secundario
  }, []);

  return <div>Mi componente</div>;
}

// ❌ INCORRECTO - Hook dentro de condición
function MiComponente() {
  if (true) {
    const [estado, setEstado] = useState(0); // ❌ No hacer esto
  }
  return <div>Mi componente</div>;
}
```

---

## 🏗️ Hooks Básicos

### 📄 useState Hook

El hook `useState` permite agregar estado a componentes funcionales.

```jsx
import { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      <input
        type='text'
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder='Nombre'
      />
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />
    </form>
  );
}
```

### 📄 useEffect Hook

El hook `useEffect` permite realizar efectos secundarios en componentes funcionales.

```jsx
import { useState, useEffect } from 'react';

function ContadorConEfecto() {
  const [cuenta, setCuenta] = useState(0);

  // Efecto que se ejecuta después de cada render
  useEffect(() => {
    document.title = `Cuenta: ${cuenta}`;
  });

  // Efecto que se ejecuta solo una vez (al montar)
  useEffect(() => {
    console.log('Componente montado');
  }, []);

  // Efecto que se ejecuta cuando cambia 'cuenta'
  useEffect(() => {
    console.log(`La cuenta cambió a: ${cuenta}`);
  }, [cuenta]);

  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
    </div>
  );
}
```

---

## 🚀 Ejercicio Práctico

### 📝 Crear un Componente de Perfil de Usuario

Vamos a crear un componente que muestre información de un usuario y permita interactuar con él.

```jsx
import { useState, useEffect } from 'react';

function PerfilUsuario() {
  const [usuario, setUsuario] = useState({
    nombre: 'María García',
    edad: 28,
    profesion: 'Desarrolladora Frontend',
    seguidores: 150,
  });

  const [nuevoSeguidor, setNuevoSeguidor] = useState(0);

  // Efecto que se ejecuta cuando cambian los seguidores
  useEffect(() => {
    console.log(`Nuevo total de seguidores: ${usuario.seguidores}`);
  }, [usuario.seguidores]);

  const agregarSeguidor = () => {
    setUsuario({
      ...usuario,
      seguidores: usuario.seguidores + 1,
    });
  };

  return (
    <div
      style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}
    >
      <h2>🧑‍💻 {usuario.nombre}</h2>
      <p>📅 Edad: {usuario.edad} años</p>
      <p>💼 Profesión: {usuario.profesion}</p>
      <p>👥 Seguidores: {usuario.seguidores}</p>

      <button onClick={agregarSeguidor}>➕ Agregar Seguidor</button>
    </div>
  );
}

export default PerfilUsuario;
```

**Archivo `src/App.jsx`:**

```jsx
import PerfilUsuario from './PerfilUsuario';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>🚀 Mi Primera App en React</h1>
        <PerfilUsuario />
      </header>
    </div>
  );
}

export default App;
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio: Lista de Tareas Interactiva

Crea una aplicación React que incluya:

1. **Componente ListaTareas** que muestre una lista de tareas
2. **Formulario** para agregar nuevas tareas
3. **Estado** para manejar la lista de tareas
4. **Funcionalidad** para marcar tareas como completadas
5. **Contador** que muestre el total de tareas y las completadas

**Requisitos técnicos:**

- Usar `useState` para manejar el estado
- Usar `useEffect` para efectos secundarios (opcional)
- Crear al menos 2 componentes separados
- Implementar funciones para agregar y completar tareas
- Aplicar estilos básicos con CSS
- Usar props para pasar datos entre componentes

**Estructura sugerida:**

```
src/
├── App.jsx
├── components/
│   ├── ListaTareas.jsx
│   └── FormularioTarea.jsx
└── App.css
```

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [Documentación oficial de React](https://es.react.dev/) - Guía completa de React
- [Hooks en React](https://es.react.dev/reference/react) - Documentación oficial de hooks
- [Vite - Herramienta de construcción](https://vitejs.dev/) - Documentación de Vite
- [Node.js - Entorno de ejecución](https://nodejs.org/) - Sitio oficial de Node.js
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - Extensión de Chrome para debugging

### 📖 Conceptos para Investigar

- **Componentes de Clase vs Funcionales** - Diferencias y cuándo usar cada uno
- **Eventos en React** - Manejo de clicks, formularios y eventos del teclado
- **Listas y Keys** - Renderizado eficiente de listas dinámicas
- **CSS Modules** - Organización de estilos en React
- **Hooks Personalizados** - Crear tus propios hooks reutilizables

---

## ❓ Preguntas Frecuentes

### ¿React es un framework o una librería?

- **React es una librería**, no un framework completo. Se enfoca específicamente en la construcción de interfaces de usuario y necesita librerías adicionales para funcionalidades como routing o gestión de estado global.

### ¿Necesito saber JavaScript avanzado para usar React?

- **Sí, es recomendable** tener conocimientos sólidos de JavaScript moderno (ES6+), incluyendo arrow functions, destructuring, spread operator, y conceptos de programación funcional.

### ¿Qué es JSX y por qué se usa?

- **JSX** es una extensión de sintaxis que permite escribir HTML dentro de JavaScript. Se transpila a JavaScript puro y hace que el código sea más legible y fácil de escribir para desarrolladores familiarizados con HTML.

### ¿Puedo usar React sin Node.js?

- **Para desarrollo profesional, no es recomendable**. Aunque puedes usar React con CDN para pruebas simples, Node.js es esencial para herramientas de construcción, gestión de dependencias y el ecosistema completo de React.

### ¿Cuál es la diferencia entre props y state?

- **Props** son datos que se pasan de un componente padre a un hijo (inmutables en el hijo). **State** es información interna del componente que puede cambiar y causar re-renderizados.

### ¿Qué son los Hooks y por qué son importantes?

- **Los Hooks** son funciones que permiten usar estado y características de React en componentes funcionales. Son importantes porque hacen el código más limpio, reutilizable y fácil de mantener comparado con los componentes de clase.

---

## 🎉 ¡React Dominado!

¡Excelente trabajo! Ya conoces los fundamentos de React, has configurado tu entorno de desarrollo con Node.js y Vite, entiendes qué son los Hooks y cómo usarlos, y puedes crear tus primeros componentes interactivos. En la próxima clase profundizaremos en componentes, props y composición avanzada.

**Recuerda:** La práctica constante es clave para dominar React. ¡Experimenta con diferentes tipos de componentes y no tengas miedo de cometer errores!

---

_📧 **Contacto:** Si tienes dudas sobre React, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
