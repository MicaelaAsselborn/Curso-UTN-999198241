# 🔄 Clase 23: State, Hooks y Eventos en React

## 🎯 Objetivos de la Clase

- Comprender el concepto de estado (state) en React y su importancia
- Dominar el uso del hook `useState` para manejar estado local
- Aprender a manejar eventos de forma efectiva en React
- Introducir el hook `useEffect` para efectos secundarios
- Crear componentes interactivos y dinámicos
- Aplicar buenas prácticas en el manejo de estado y eventos

---

## 📚 ¿Qué es el Estado (State) en React?

### 🔍 Definición

El **estado** en React es una estructura de datos que permite a los componentes almacenar y gestionar información que puede cambiar a lo largo del tiempo. Cuando el estado cambia, React re-renderiza automáticamente el componente para reflejar los nuevos datos.

### 🏗️ Características Principales

- **Local al componente:** Cada componente tiene su propio estado independiente
- **Inmutable:** No se debe modificar directamente, siempre usar la función setter
- **Reactivo:** Los cambios en el estado causan re-renderizados automáticos
- **Persistente:** Se mantiene durante el ciclo de vida del componente
- **Encapsulado:** Solo el componente que lo posee puede modificarlo

### 📕 Historia y Evolución

- **2013:** React introduce el concepto de estado en componentes de clase
- **2015:** `this.state` y `this.setState` se convierten en estándar
- **2018:** Hooks revolucionan el manejo de estado con `useState`
- **2020:** `useState` se convierte en la práctica recomendada
- **2023:** Estado actual con hooks como estándar y patrones avanzados

---

## 🏛️ Hook useState: Manejo de Estado Local

### 📝 ¿Qué es useState?

`useState` es un hook que permite agregar estado local a componentes funcionales. Retorna un array con dos elementos: el valor actual del estado y una función para actualizarlo.

### 🏗️ Sintaxis Básica

```jsx
import { useState } from 'react';

function MiComponente() {
  const [estado, setEstado] = useState(valorInicial);

  return (
    <div>
      <p>Estado actual: {estado}</p>
      <button onClick={() => setEstado(nuevoValor)}>Actualizar</button>
    </div>
  );
}
```

### 📝 Tipos de Estado Comunes

#### **Estado Simple (String, Number, Boolean)**

```jsx
function Contador() {
  const [cuenta, setCuenta] = useState(0);
  const [nombre, setNombre] = useState('');
  const [activo, setActivo] = useState(false);

  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <p>Nombre: {nombre}</p>
      <p>Estado: {activo ? 'Activo' : 'Inactivo'}</p>

      <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder='Tu nombre'
      />
      <button onClick={() => setActivo(!activo)}>
        {activo ? 'Desactivar' : 'Activar'}
      </button>
    </div>
  );
}
```

#### **Estado con Objetos**

```jsx
function Usuario() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    edad: 0,
  });

  const actualizarNombre = (nuevoNombre) => {
    setUsuario({
      ...usuario, // Spread operator para mantener otros valores
      nombre: nuevoNombre,
    });
  };

  const actualizarEmail = (nuevoEmail) => {
    setUsuario((prev) => ({
      ...prev,
      email: nuevoEmail,
    }));
  };

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>Nombre: {usuario.nombre}</p>
      <p>Email: {usuario.email}</p>
      <p>Edad: {usuario.edad}</p>

      <input
        value={usuario.nombre}
        onChange={(e) => actualizarNombre(e.target.value)}
        placeholder='Nombre'
      />
      <input
        value={usuario.email}
        onChange={(e) => actualizarEmail(e.target.value)}
        placeholder='Email'
      />
    </div>
  );
}
```

#### **Estado con Arrays**

```jsx
function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      setTareas([
        ...tareas,
        {
          id: Date.now(),
          texto: nuevaTarea,
          completada: false,
        },
      ]);
      setNuevaTarea('');
    }
  };

  const toggleTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>

      <div>
        <input
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder='Nueva tarea'
          onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            <span
              style={{
                textDecoration: tarea.completada ? 'line-through' : 'none',
              }}
            >
              {tarea.texto}
            </span>
            <button onClick={() => toggleTarea(tarea.id)}>
              {tarea.completada ? 'Desmarcar' : 'Completar'}
            </button>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### ⚠️ **Reglas Importantes de useState**

1. **Nunca modifiques el estado directamente:**

```jsx
// ❌ INCORRECTO
const [usuario, setUsuario] = useState({ nombre: 'Ana' });
usuario.nombre = 'María'; // ¡NO HAGAS ESTO!

// ✅ CORRECTO
setUsuario({ ...usuario, nombre: 'María' });
```

2. **Usa la función setter para actualizar:**

```jsx
// ❌ INCORRECTO
const [cuenta, setCuenta] = useState(0);
cuenta = cuenta + 1; // ¡NO HAGAS ESTO!

// ✅ CORRECTO
setCuenta(cuenta + 1);
// O mejor aún, para evitar problemas de closure:
setCuenta((prev) => prev + 1);
```

3. **Múltiples estados en un componente:**

```jsx
function MiComponente() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);
  const [activo, setActivo] = useState(false);

  // Es perfectamente válido tener múltiples useState
  return <div>...</div>;
}
```

### 🔧 **Props como Valor Inicial en useState**

```jsx
// ✅ Usar props como valor inicial
function Contador({ valorInicial = 0 }) {
  const [cuenta, setCuenta] = useState(valorInicial);

  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
    </div>
  );
}

// ⚠️ IMPORTANTE: Si la prop cambia, el estado NO se actualiza automáticamente
// Para sincronizar con cambios de props, usa useEffect:
function ContadorSincronizado({ valorInicial = 0 }) {
  const [cuenta, setCuenta] = useState(valorInicial);

  // Sincronizar cuando cambie la prop
  useEffect(() => {
    setCuenta(valorInicial);
  }, [valorInicial]);

  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
    </div>
  );
}
```

---

## 🏗️ Hook useEffect: Efectos Secundarios

### 📝 ¿Qué es useEffect?

`useEffect` es un hook que permite realizar efectos secundarios en componentes funcionales. Se ejecuta después de que el componente se renderiza y puede manejar operaciones como llamadas a APIs, suscripciones, timers, etc.

### 🏗️ Sintaxis Básica

```jsx
import { useEffect } from 'react';

function MiComponente() {
  useEffect(() => {
    // Código que se ejecuta después del render
    console.log('Componente renderizado');

    // Función de limpieza (opcional)
    return () => {
      console.log('Componente se va a desmontar');
    };
  }, []); // Array de dependencias

  return <div>Mi componente</div>;
}
```

### 📝 Patrones de useEffect

#### **1. Efecto que se ejecuta en cada render**

```jsx
function Contador() {
  const [cuenta, setCuenta] = useState(0);

  useEffect(() => {
    // Se ejecuta después de cada render
    document.title = `Cuenta: ${cuenta}`;
  }); // Sin array de dependencias

  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
    </div>
  );
}
```

#### **2. Efecto que se ejecuta solo una vez (al montar)**

```jsx
function DatosUsuario() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Simular llamada a API
    const cargarUsuario = async () => {
      try {
        const response = await fetch('/api/usuario');
        const datos = await response.json();
        setUsuario(datos);
      } catch (error) {
        console.error('Error al cargar usuario:', error);
      } finally {
        setCargando(false);
      }
    };

    cargarUsuario();
  }, []); // Array vacío = solo al montar

  if (cargando) return <div>Cargando...</div>;

  return (
    <div>
      <h2>{usuario?.nombre}</h2>
      <p>{usuario?.email}</p>
    </div>
  );
}
```

#### **3. Efecto que se ejecuta cuando cambian dependencias**

```jsx
function Buscador() {
  const [termino, setTermino] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    if (termino.length > 2) {
      // Simular búsqueda
      const buscar = async () => {
        const response = await fetch(`/api/buscar?q=${termino}`);
        const datos = await response.json();
        setResultados(datos);
      };

      buscar();
    } else {
      setResultados([]);
    }
  }, [termino]); // Se ejecuta cuando cambia 'termino'

  return (
    <div>
      <input
        value={termino}
        onChange={(e) => setTermino(e.target.value)}
        placeholder='Buscar...'
      />
      <ul>
        {resultados.map((item) => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### **4. Efecto con limpieza**

```jsx
function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date());
    }, 1000);

    // Función de limpieza
    return () => {
      clearInterval(timer);
    };
  }, []); // Solo al montar y desmontar

  return <div>Hora actual: {hora.toLocaleTimeString()}</div>;
}
```

---

## ⚡ Manejo de Eventos en React

### 📝 ¿Qué son los Eventos?

Los eventos en React son funciones que se ejecutan cuando ocurre una interacción del usuario (click, teclado, formularios, etc.). React usa un sistema de eventos sintéticos que normaliza las diferencias entre navegadores.

### 🏗️ Sintaxis de Eventos

```jsx
function MiComponente() {
  const handleClick = () => {
    console.log('Botón clickeado');
  };

  const handleInputChange = (event) => {
    console.log('Valor:', event.target.value);
  };

  return (
    <div>
      <button onClick={handleClick}>Hacer clic</button>
      <input onChange={handleInputChange} />
    </div>
  );
}
```

### 📝 Tipos de Eventos Comunes

#### **Eventos de Mouse**

```jsx
function EventosMouse() {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosicion({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleClick = (event) => {
    console.log('Click en:', event.clientX, event.clientY);
  };

  const handleDoubleClick = () => {
    alert('¡Doble click!');
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={{
        width: '100%',
        height: '200px',
        border: '1px solid #ccc',
        cursor: 'crosshair',
      }}
    >
      <p>
        Posición del mouse: {posicion.x}, {posicion.y}
      </p>
      <p>Haz click o doble click aquí</p>
    </div>
  );
}
```

#### **Eventos de Teclado**

```jsx
function EventosTeclado() {
  const [tecla, setTecla] = useState('');
  const [texto, setTexto] = useState('');

  const handleKeyDown = (event) => {
    setTecla(event.key);

    if (event.key === 'Enter') {
      console.log('Enter presionado');
    }

    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      console.log('Guardar (Ctrl+S)');
    }
  };

  const handleKeyUp = (event) => {
    console.log('Tecla soltada:', event.key);
  };

  return (
    <div>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        placeholder='Escribe algo...'
      />
      <p>Última tecla: {tecla}</p>
      <p>Texto: {texto}</p>
    </div>
  );
}
```

#### **Eventos de Formulario**

```jsx
function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir envío por defecto
    console.log('Datos del formulario:', formData);
    // Aquí enviarías los datos al servidor
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='nombre'>Nombre:</label>
        <input
          id='nombre'
          name='nombre'
          type='text'
          value={formData.nombre}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor='mensaje'>Mensaje:</label>
        <textarea
          id='mensaje'
          name='mensaje'
          value={formData.mensaje}
          onChange={handleInputChange}
          rows='4'
        />
      </div>

      <button type='submit'>Enviar</button>
    </form>
  );
}
```

### 🎯 Pasar Parámetros a Eventos

```jsx
function ListaBotones() {
  const [botones, setBotones] = useState([
    { id: 1, texto: 'Botón 1', activo: false },
    { id: 2, texto: 'Botón 2', activo: false },
    { id: 3, texto: 'Botón 3', activo: false },
  ]);

  const handleClick = (id) => {
    setBotones((prev) =>
      prev.map((boton) =>
        boton.id === id ? { ...boton, activo: !boton.activo } : boton
      )
    );
  };

  return (
    <div>
      {botones.map((boton) => (
        <button
          key={boton.id}
          onClick={() => handleClick(boton.id)}
          style={{
            backgroundColor: boton.activo ? '#007bff' : '#6c757d',
            color: 'white',
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          {boton.texto}
        </button>
      ))}
    </div>
  );
}
```

---

## 🚀 Ejercicio Práctico

### 📝 Crear una Aplicación de Notas Interactiva

Vamos a crear una aplicación completa de notas que demuestre el uso de useState, useEffect y eventos.

```jsx
import { useState, useEffect } from 'react';

function App() {
  const [notas, setNotas] = useState([]);
  const [nuevaNota, setNuevaNota] = useState('');
  const [filtro, setFiltro] = useState('todas');
  const [busqueda, setBusqueda] = useState('');

  // Cargar notas del localStorage al montar
  useEffect(() => {
    const notasGuardadas = localStorage.getItem('notas');
    if (notasGuardadas) {
      setNotas(JSON.parse(notasGuardadas));
    }
  }, []);

  // Guardar notas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  const agregarNota = () => {
    if (nuevaNota.trim()) {
      const nota = {
        id: Date.now(),
        texto: nuevaNota,
        fecha: new Date().toLocaleString(),
        completada: false,
      };
      setNotas([...notas, nota]);
      setNuevaNota('');
    }
  };

  const toggleCompletada = (id) => {
    setNotas(
      notas.map((nota) =>
        nota.id === id ? { ...nota, completada: !nota.completada } : nota
      )
    );
  };

  const eliminarNota = (id) => {
    setNotas(notas.filter((nota) => nota.id !== id));
  };

  const filtrarNotas = (notas) => {
    let notasFiltradas = notas;

    // Filtrar por estado
    if (filtro === 'completadas') {
      notasFiltradas = notasFiltradas.filter((nota) => nota.completada);
    } else if (filtro === 'pendientes') {
      notasFiltradas = notasFiltradas.filter((nota) => !nota.completada);
    }

    // Filtrar por búsqueda
    if (busqueda) {
      notasFiltradas = notasFiltradas.filter((nota) =>
        nota.texto.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    return notasFiltradas;
  };

  const notasFiltradas = filtrarNotas(notas);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>📝 Aplicación de Notas</h1>

      {/* Formulario para agregar notas */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input
            type='text'
            value={nuevaNota}
            onChange={(e) => setNuevaNota(e.target.value)}
            placeholder='Escribe una nueva nota...'
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
            onKeyPress={(e) => e.key === 'Enter' && agregarNota()}
          />
          <button
            onClick={agregarNota}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Agregar
          </button>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input
            type='text'
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder='Buscar notas...'
            style={{
              flex: 1,
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          />
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          >
            <option value='todas'>Todas</option>
            <option value='pendientes'>Pendientes</option>
            <option value='completadas'>Completadas</option>
          </select>
        </div>
      </div>

      {/* Lista de notas */}
      <div>
        <h3>Notas ({notasFiltradas.length})</h3>
        {notasFiltradas.length === 0 ? (
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            {busqueda ? 'No se encontraron notas' : 'No hay notas aún'}
          </p>
        ) : (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            {notasFiltradas.map((nota) => (
              <div
                key={nota.id}
                style={{
                  padding: '15px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: nota.completada ? '#f8f9fa' : 'white',
                  opacity: nota.completada ? 0.7 : 1,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        margin: '0 0 5px 0',
                        textDecoration: nota.completada
                          ? 'line-through'
                          : 'none',
                      }}
                    >
                      {nota.texto}
                    </p>
                    <small style={{ color: '#666' }}>{nota.fecha}</small>
                  </div>
                  <div
                    style={{ display: 'flex', gap: '5px', marginLeft: '10px' }}
                  >
                    <button
                      onClick={() => toggleCompletada(nota.id)}
                      style={{
                        padding: '5px 10px',
                        backgroundColor: nota.completada
                          ? '#28a745'
                          : '#ffc107',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                      }}
                    >
                      {nota.completada ? '✓' : '○'}
                    </button>
                    <button
                      onClick={() => eliminarNota(nota.id)}
                      style={{
                        padding: '5px 10px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio: Sistema de Gestión de Tareas Avanzado

Crea una aplicación React que incluya:

1. **Lista de tareas** con funcionalidades CRUD completas
2. **Filtros** por estado (todas, pendientes, completadas)
3. **Búsqueda** en tiempo real
4. **Prioridades** (alta, media, baja) con colores
5. **Fechas de vencimiento** con validación
6. **Persistencia** en localStorage
7. **Estadísticas** (total, completadas, pendientes)

**Requisitos técnicos:**

- Usar `useState` para manejar múltiples estados
- Usar `useEffect` para persistencia y efectos secundarios
- Implementar eventos para todas las interacciones
- Aplicar estilos CSS para una interfaz atractiva
- Usar destructuring y spread operator
- Implementar validaciones de formularios

**Estructura sugerida:**

```
src/
├── App.jsx
├── components/
│   ├── Tarea.jsx
│   ├── ListaTareas.jsx
│   ├── FormularioTarea.jsx
│   ├── Filtros.jsx
│   └── Estadisticas.jsx
├── hooks/
│   └── useLocalStorage.js
└── App.css
```

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [React: Documentación sobre State](https://es.react.dev/learn/state-a-components-memory) - Guía completa de estado
- [React: Documentación sobre useEffect](https://es.react.dev/reference/react/useEffect) - Hook de efectos
- [React: Documentación sobre Eventos](https://es.react.dev/learn/responding-to-events) - Manejo de eventos
- [React Hooks](https://es.react.dev/reference/react) - Todos los hooks disponibles

### 📖 Conceptos para Investigar

- **Hooks personalizados** - Crear tus propios hooks
- **useCallback y useMemo** - Optimización de rendimiento
- **useReducer** - Manejo de estado complejo
- **Context API** - Estado global sin librerías externas

---

## ❓ Preguntas Frecuentes

### ¿Qué es un hook?

- **Un hook** es una función especial que permite usar características de React (como estado y ciclo de vida) en componentes funcionales. Siempre comienzan con "use".

### ¿Cuándo usar useState vs useEffect?

- **useState** se usa para manejar estado local que puede cambiar. **useEffect** se usa para efectos secundarios como llamadas a APIs, suscripciones, timers, etc.

### ¿Puedo tener varios estados en un componente?

- **Sí, es perfectamente válido** usar múltiples llamadas a `useState` en un componente. Cada estado es independiente.

### ¿Cómo paso parámetros a un evento?

- **Usa arrow functions** para pasar parámetros: `onClick={() => handleClick(id)}` o **bind**: `onClick={handleClick.bind(null, id)}`.

### ¿Qué es el array de dependencias en useEffect?

- **El array de dependencias** le dice a React cuándo ejecutar el efecto. Si está vacío `[]`, se ejecuta solo al montar. Si tiene valores `[valor]`, se ejecuta cuando `valor` cambia.

### ¿Puedo usar props como valor inicial en useState?

- **Sí, pero ten cuidado**: `useState(prop)` solo usa la prop como valor inicial. Si la prop cambia después, el estado no se actualizará automáticamente. Usa `useEffect` si necesitas sincronizar.

---

## 🎉 ¡State, Hooks y Eventos Dominados!

¡Excelente trabajo! Ya conoces los fundamentos del estado, hooks y eventos en React, puedes crear componentes interactivos y dinámicos. En la próxima clase profundizaremos en formularios, validaciones y patrones avanzados de React.

**Recuerda:** El estado es el corazón de la interactividad en React. Domina useState y useEffect, y podrás crear aplicaciones complejas y funcionales. ¡Experimenta con diferentes patrones de estado! 🚀

---

_📧 **Contacto:** Si tienes dudas sobre state, hooks y eventos en React, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
