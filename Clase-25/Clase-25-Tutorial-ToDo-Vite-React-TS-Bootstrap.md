# ✅ Clase 23: Lista de Tareas con Vite + React (SWC) + TypeScript + Bootstrap

En este tutorial vas a crear paso a paso una aplicación de Lista de Tareas (To-Do) usando:

- Vite (plantilla React con SWC y TypeScript)
- React + Hooks (`useState` y `useEffect`)
- TypeScript para tipado seguro
- Bootstrap para estilos rápidos y accesibles

A lo largo del tutorial explicaremos cómo y por qué usar `useState` y `useEffect` en cada paso. Está diseñado para poder dictarlo en clase, con pausas y comentarios.

---

## 🧰 Requisitos

- Node.js 22+ (recomendado)
- npm o pnpm o yarn (usaremos npm en los comandos)

---

## 🚀 1) Crear el proyecto con Vite + React + SWC + TypeScript

Ejecuta en tu terminal:

```bash
npm create vite@latest
# Project name: mi-todo
# Select: React + SWC + TypeScript
cd mi-todo # muy importante, no te olvides
npm install
npm run dev
```

Estructura base relevante:

```
mi-todo/
├─ index.html
├─ tsconfig.json
├─ src/
│  ├─ main.tsx
│  └─ App.tsx
└─ package.json
```

> Vite nos da un entorno rápido; SWC acelera la transformación de TS/JS; TypeScript añade tipado y mejor DX.

---

## 🎨 2) Instalar y configurar Bootstrap

Instalamos Bootstrap desde npm y lo importamos en la entrada de la app.

```bash
npm i bootstrap
```

En `src/main.tsx`, importa los estilos de Bootstrap al inicio del archivo:

```tsx
// src/main.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

> Listo: ya podés usar clases como `container`, `btn`, `form-control`, etc.

---

## 🧱 3) Modelado de tipos (TypeScript)

Definimos la forma de una `Tarea` con una interfaz. Esto nos ayudará a usar `useState` con tipos concretos.

```ts
// src/types.ts
export interface Tarea {
  id: string; // usamos string para facilidad (uuid/Date.now().toString())
  titulo: string; // texto visible
  completada: boolean; // estado
  creadaEn: string; // fecha ISO string para mostrar
}
```

> Explicación: al usar esta interfaz con `useState<Tarea[]>`, TypeScript evitará que metamos datos inválidos y nos dará autocompletado.

---

## 🧠 4) useState: estado de la aplicación

Vamos a crear el componente principal `App.tsx` con dos estados:

- `tareas: Tarea[]` para la lista.
- `nuevoTitulo: string` para controlar el input del formulario.

```tsx
// src/App.tsx
import { useEffect, useState } from 'react';
import type { Tarea } from './types';

function App() {
  // useState con tipos explícitos para claridad didáctica
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [nuevoTitulo, setNuevoTitulo] = useState<string>('');

  // Handler controlado: mantiene sincronizado el input con el estado
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoTitulo(e.target.value);
  };

  // Crear una tarea nueva y actualizar el estado
  const agregarTarea = () => {
    const titulo = nuevoTitulo.trim();
    if (!titulo) return; // validación simple

    const nueva: Tarea = {
      id: Date.now().toString(),
      titulo,
      completada: false,
      creadaEn: new Date().toISOString(),
    };

    // Nunca mutamos el estado; creamos un nuevo array
    setTareas((prev) => [nueva, ...prev]);
    setNuevoTitulo(''); // limpiamos el input
  };

  // Alternar completada
  const toggleCompletada = (id: string) => {
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  };

  // Eliminar
  const eliminarTarea = (id: string) => {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  };

  // Accesibilidad: permitir Enter para agregar
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') agregarTarea();
  };

  return (
    <div className='container py-4'>
      <h1 className='mb-4'>📝 Lista de Tareas</h1>

      {/* Formulario */}
      <div className='card mb-4'>
        <div className='card-body'>
          <div className='row g-2 align-items-center'>
            <div className='col-12 col-md-8'>
              <label htmlFor='nuevaTarea' className='form-label'>
                Nueva tarea
              </label>
              <input
                id='nuevaTarea'
                className='form-control'
                type='text'
                placeholder='Ej: Estudiar useEffect'
                value={nuevoTitulo}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className='col-12 col-md-4 d-grid d-md-block'>
              <button
                className='btn btn-primary mt-3 mt-md-0'
                onClick={agregarTarea}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lista */}
      <ul className='list-group'>
        {tareas.length === 0 && (
          <li className='list-group-item text-muted'>
            No hay tareas. ¡Agrega la primera!
          </li>
        )}

        {tareas.map((t) => (
          <li
            key={t.id}
            className='list-group-item d-flex justify-content-between align-items-start'
          >
            <div className='form-check'>
              <input
                id={`t-${t.id}`}
                className='form-check-input'
                type='checkbox'
                checked={t.completada}
                onChange={() => toggleCompletada(t.id)}
                aria-labelledby={`lbl-${t.id}`}
              />
              <label
                id={`lbl-${t.id}`}
                htmlFor={`t-${t.id}`}
                className={
                  'form-check-label ms-2 ' +
                  (t.completada
                    ? 'text-decoration-line-through text-muted'
                    : '')
                }
              >
                {t.titulo}
                <small className='d-block text-muted'>
                  {new Date(t.creadaEn).toLocaleString()}
                </small>
              </label>
            </div>

            <button
              className='btn btn-outline-danger btn-sm'
              onClick={() => eliminarTarea(t.id)}
              aria-label={`Eliminar ${t.titulo}`}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

Puntos para explicar sobre `useState`:

- Guarda el estado local del componente y causa re-render al actualizarse.
- No se muta directamente: se crea un nuevo array/objeto.
- Con tipos genéricos (`useState<Tarea[]>()`) obtenemos autocompletado y validación de propiedades.

> `useState` es la memoria del componente. Cambiar su valor fuerza un re-render. Tiparlo bien evita errores.

---

## 🔁 5) useEffect: persistencia en localStorage y carga inicial

Usaremos `useEffect` para:

- Cargar tareas almacenadas al montar el componente.
- Guardar tareas cada vez que cambien.

> `useEffect` sincroniza tu componente con el “mundo exterior” (localStorage, APIs, DOM, timers). El array de dependencias define cuándo corre.

```tsx
// src/App.tsx (añadir dentro del componente App)

// Cargar al montar
useEffect(() => {
  const raw = localStorage.getItem('tareas');
  if (raw) {
    try {
      const parsed: Tarea[] = JSON.parse(raw);
      setTareas(parsed);
    } catch (e) {
      console.error('Error parseando tareas', e);
    }
  }
}, []); // Array vacío: solo una vez al montar

// Guardar cuando cambien
useEffect(() => {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}, [tareas]); // Depende de tareas
```

Puntos para explicar sobre `useEffect`:

- Se ejecuta después del render.
- Con `[]` se ejecuta una sola vez (montaje).
- Con `[tareas]` se ejecuta cada vez que ese estado cambia (sincronización con un sistema externo: localStorage).
- La función de limpieza (no usada aquí) sirve para cancelar timers, suscripciones, etc.

---

## ♿ 6) Accesibilidad básica

- Usa `label` con `htmlFor` vinculado a `id` del input/checkbox.
- Proporciona `aria-label` en botones con íconos.
- Usa elementos semánticos como `ul`/`li` para listas.

Bootstrap ya aporta buen contraste y tamaños de toque aceptables.

---

## 🧪 7) Mejoras opcionales

- Filtros: Todas / Pendientes / Completadas.
- Contador de tareas realizadas/restantes.
- Edición inline del título con doble click.
- Prioridades con `enum` y badges de Bootstrap.

---

## 🏃 8) Ejecutar el proyecto

```bash
npm run dev
```

Abre la URL que aparece en consola (por defecto `http://localhost:5173`).

---

## 🧩 Código completo de referencia (App.tsx consolidado)

Este bloque muestra cómo queda `App.tsx` con `useEffect` incluido, para copiar/pegar si lo necesitás en clase.

```tsx
import { useEffect, useState } from 'react';
import type { Tarea } from './types';

function App() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [nuevoTitulo, setNuevoTitulo] = useState<string>('');

  useEffect(() => {
    const raw = localStorage.getItem('tareas');
    if (raw) {
      try {
        const parsed: Tarea[] = JSON.parse(raw);
        setTareas(parsed);
      } catch (e) {
        console.error('Error parseando tareas', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNuevoTitulo(e.target.value);

  const agregarTarea = () => {
    const titulo = nuevoTitulo.trim();
    if (!titulo) return;
    const nueva: Tarea = {
      id: Date.now().toString(),
      titulo,
      completada: false,
      creadaEn: new Date().toISOString(),
    };
    setTareas((prev) => [nueva, ...prev]);
    setNuevoTitulo('');
  };

  const toggleCompletada = (id: string) => {
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  };

  const eliminarTarea = (id: string) => {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') agregarTarea();
  };

  return (
    <div className='container py-4'>
      <h1 className='mb-4'>📝 Lista de Tareas</h1>

      <div className='card mb-4'>
        <div className='card-body'>
          <div className='row g-2 align-items-center'>
            <div className='col-12 col-md-8'>
              <label htmlFor='nuevaTarea' className='form-label'>
                Nueva tarea
              </label>
              <input
                id='nuevaTarea'
                className='form-control'
                type='text'
                placeholder='Ej: Estudiar useEffect'
                value={nuevoTitulo}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className='col-12 col-md-4 d-grid d-md-block'>
              <button
                className='btn btn-primary mt-3 mt-md-0'
                onClick={agregarTarea}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>

      <ul className='list-group'>
        {tareas.length === 0 && (
          <li className='list-group-item text-muted'>
            No hay tareas. ¡Agrega la primera!
          </li>
        )}

        {tareas.map((t) => (
          <li
            key={t.id}
            className='list-group-item d-flex justify-content-between align-items-start'
          >
            <div className='form-check'>
              <input
                id={`t-${t.id}`}
                className='form-check-input'
                type='checkbox'
                checked={t.completada}
                onChange={() => toggleCompletada(t.id)}
                aria-labelledby={`lbl-${t.id}`}
              />
              <label
                id={`lbl-${t.id}`}
                htmlFor={`t-${t.id}`}
                className={
                  'form-check-label ms-2 ' +
                  (t.completada
                    ? 'text-decoration-line-through text-muted'
                    : '')
                }
              >
                {t.titulo}
                <small className='d-block text-muted'>
                  {new Date(t.creadaEn).toLocaleString()}
                </small>
              </label>
            </div>

            <button
              className='btn btn-outline-danger btn-sm'
              onClick={() => eliminarTarea(t.id)}
              aria-label={`Eliminar ${t.titulo}`}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

## 📚 Documentación recomendada

- Vite: https://vitejs.dev/guide/
- Plantillas React + TS + SWC: https://vitejs.dev/guide/#scaffolding-your-first-vite-project
- React Docs (ES): https://es.react.dev/
- useState: https://es.react.dev/reference/react/useState
- useEffect: https://es.react.dev/reference/react/useEffect
- TypeScript: https://www.typescriptlang.org/docs/
- Bootstrap: https://getbootstrap.com/docs/
