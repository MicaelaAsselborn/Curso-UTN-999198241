# 🔄 Clase 23: State, Hooks y Eventos en React con TypeScript

## 🎯 Objetivos de la Clase

- Comprender el concepto de estado (state) en React con TypeScript
- Dominar el uso del hook `useState` con tipado estático
- Aprender a manejar eventos de forma efectiva con tipos
- Introducir el hook `useEffect` con tipado correcto
- Crear componentes interactivos y dinámicos con TypeScript
- Aplicar buenas prácticas en el manejo de estado y eventos tipados

---

## 📚 ¿Qué es el Estado (State) en React con TypeScript?

### 🔍 Definición

El **estado** en React con TypeScript es una estructura de datos tipada que permite a los componentes almacenar y gestionar información que puede cambiar a lo largo del tiempo. TypeScript añade seguridad de tipos y mejor IntelliSense.

### 🏗️ Características Principales

- **Local al componente:** Cada componente tiene su propio estado independiente
- **Inmutable:** No se debe modificar directamente, siempre usar la función setter
- **Reactivo:** Los cambios en el estado causan re-renderizados automáticos
- **Tipado:** TypeScript verifica los tipos en tiempo de compilación
- **IntelliSense:** Mejor autocompletado y detección de errores

### 📖 Ventajas de TypeScript en React

- **Detección temprana de errores** en tiempo de compilación
- **Mejor documentación** del código a través de tipos
- **Refactoring más seguro** con garantías de tipo
- **IntelliSense superior** con autocompletado preciso
- **Mejor experiencia de desarrollo** en IDEs modernos

---

## 🏛️ Hook useState con TypeScript: Manejo de Estado Tipado

### 📝 ¿Qué es useState con TypeScript?

`useState` con TypeScript permite especificar el tipo de datos que contendrá el estado, proporcionando verificación de tipos y mejor IntelliSense.

### 🏗️ Sintaxis Básica con TypeScript

```tsx
import { useState } from 'react';

// TypeScript: Especificar el tipo del estado
function MiComponente() {
  const [estado, setEstado] = useState<string>('valor inicial');
  
  return (
    <div>
      <p>Estado actual: {estado}</p>
      <button onClick={() => setEstado('nuevo valor')}>
        Actualizar
      </button>
    </div>
  );
}
```

### 📝 Tipos de Estado Comunes con TypeScript

#### **Estado Simple con Tipos Explícitos**
```tsx
// TypeScript: Tipos explícitos
function Contador() {
  const [cuenta, setCuenta] = useState<number>(0);
  const [nombre, setNombre] = useState<string>('');
  const [activo, setActivo] = useState<boolean>(false);
  
  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <p>Nombre: {nombre}</p>
      <p>Estado: {activo ? 'Activo' : 'Inactivo'}</p>
      
      <button onClick={() => setCuenta(cuenta + 1)}>
        Incrementar
      </button>
      <input 
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre"
      />
      <button onClick={() => setActivo(!activo)}>
        {activo ? 'Desactivar' : 'Activar'}
      </button>
    </div>
  );
}

// TypeScript: Inferencia de tipos (recomendado cuando es obvio)
function ContadorInferido() {
  const [cuenta, setCuenta] = useState(0); // TypeScript infiere que es number
  const [nombre, setNombre] = useState(''); // TypeScript infiere que es string
  const [activo, setActivo] = useState(false); // TypeScript infiere que es boolean
  
  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <p>Nombre: {nombre}</p>
      <p>Estado: {activo ? 'Activo' : 'Inactivo'}</p>
    </div>
  );
}
```

#### **Estado con Objetos e Interfaces**
```tsx
// TypeScript: Definir interface para el estado
interface Usuario {
  nombre: string;
  email: string;
  edad: number;
}

function Usuario() {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: '',
    email: '',
    edad: 0
  });
  
  const actualizarNombre = (nuevoNombre: string) => {
    setUsuario({
      ...usuario,
      nombre: nuevoNombre
    });
  };
  
  const actualizarEmail = (nuevoEmail: string) => {
    setUsuario(prev => ({
      ...prev,
      email: nuevoEmail
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
        placeholder="Nombre"
      />
      <input 
        value={usuario.email}
        onChange={(e) => actualizarEmail(e.target.value)}
        placeholder="Email"
      />
    </div>
  );
}
```

#### **Estado con Arrays y Tipos Complejos**
```tsx
// TypeScript: Definir interface para tareas
interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
  fechaCreacion: Date;
}

function ListaTareas() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [nuevaTarea, setNuevaTarea] = useState<string>('');
  
  const agregarTarea = (): void => {
    if (nuevaTarea.trim()) {
      const tarea: Tarea = {
        id: Date.now(),
        texto: nuevaTarea,
        completada: false,
        fechaCreacion: new Date()
      };
      setTareas([...tareas, tarea]);
      setNuevaTarea('');
    }
  };
  
  const toggleTarea = (id: number): void => {
    setTareas(tareas.map(tarea => 
      tarea.id === id 
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    ));
  };
  
  const eliminarTarea = (id: number): void => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };
  
  return (
    <div>
      <h2>Lista de Tareas</h2>
      
      <div>
        <input 
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
          onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>
            <span 
              style={{ 
                textDecoration: tarea.completada ? 'line-through' : 'none' 
              }}
            >
              {tarea.texto}
            </span>
            <button onClick={() => toggleTarea(tarea.id)}>
              {tarea.completada ? 'Desmarcar' : 'Completar'}
            </button>
            <button onClick={() => eliminarTarea(tarea.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### ⚠️ **Reglas Importantes de useState con TypeScript**

1. **Siempre especifica tipos para objetos complejos:**
```tsx
// ❌ INCORRECTO - TypeScript no puede inferir el tipo
const [usuario, setUsuario] = useState({});

// ✅ CORRECTO - Especifica el tipo
interface Usuario {
  nombre: string;
  email: string;
}
const [usuario, setUsuario] = useState<Usuario>({ nombre: '', email: '' });
```

2. **Usa tipos union para estados que pueden ser null:**
```tsx
// TypeScript: Estado que puede ser null o Usuario
interface Usuario {
  id: number;
  nombre: string;
}

const [usuario, setUsuario] = useState<Usuario | null>(null);
const [cargando, setCargando] = useState<boolean>(true);

// TypeScript verifica que manejes ambos casos
if (usuario) {
  console.log(usuario.nombre); // TypeScript sabe que usuario no es null
}
```

3. **Tipos para funciones setter:**
```tsx
// TypeScript: Función que actualiza el estado
const [cuenta, setCuenta] = useState<number>(0);

const incrementar = (): void => {
  setCuenta(prev => prev + 1); // TypeScript infiere que prev es number
};
```

### 🔧 **Props como Valor Inicial en useState con TypeScript**

```tsx
// TypeScript: Props tipadas como valor inicial
interface ContadorProps {
  valorInicial: number;
  onCambio?: (valor: number) => void;
}

function Contador({ valorInicial, onCambio }: ContadorProps) {
  const [cuenta, setCuenta] = useState<number>(valorInicial);
  
  const incrementar = (): void => {
    const nuevoValor = cuenta + 1;
    setCuenta(nuevoValor);
    onCambio?.(nuevoValor); // Optional chaining con TypeScript
  };
  
  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

// TypeScript: Sincronización con props usando useEffect
function ContadorSincronizado({ valorInicial }: ContadorProps) {
  const [cuenta, setCuenta] = useState<number>(valorInicial);
  
  useEffect(() => {
    setCuenta(valorInicial);
  }, [valorInicial]);
  
  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => setCuenta(prev => prev + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

---

## 🏗️ Hook useEffect con TypeScript: Efectos Secundarios Tipados

### 📝 ¿Qué es useEffect con TypeScript?

`useEffect` con TypeScript mantiene la misma funcionalidad pero con mejor verificación de tipos en las dependencias y funciones de limpieza.

### 🏗️ Sintaxis Básica con TypeScript

```tsx
import { useEffect, useState } from 'react';

// TypeScript: useEffect con tipos
function MiComponente() {
  const [dato, setDato] = useState<string>('');
  
  useEffect(() => {
    // Código que se ejecuta después del render
    console.log('Componente renderizado');
    
    // Función de limpieza con tipo explícito
    return (): void => {
      console.log('Componente se va a desmontar');
    };
  }, []); // Array de dependencias tipado
  
  return <div>Mi componente</div>;
}
```

### 📝 Patrones de useEffect con TypeScript

#### **1. Efecto que se ejecuta en cada render**
```tsx
function Contador() {
  const [cuenta, setCuenta] = useState<number>(0);
  
  useEffect(() => {
    // TypeScript: document.title es string
    document.title = `Cuenta: ${cuenta}`;
  }); // Sin array de dependencias
  
  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => setCuenta(prev => prev + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

#### **2. Efecto que se ejecuta solo una vez (al montar)**
```tsx
// TypeScript: Interface para datos de usuario
interface UsuarioData {
  id: number;
  nombre: string;
  email: string;
}

function DatosUsuario() {
  const [usuario, setUsuario] = useState<UsuarioData | null>(null);
  const [cargando, setCargando] = useState<boolean>(true);
  
  useEffect(() => {
    // TypeScript: Función async tipada
    const cargarUsuario = async (): Promise<void> => {
      try {
        const response: Response = await fetch('/api/usuario');
        const datos: UsuarioData = await response.json();
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
```tsx
// TypeScript: Interface para resultados de búsqueda
interface ResultadoBusqueda {
  id: number;
  nombre: string;
  descripcion: string;
}

function Buscador() {
  const [termino, setTermino] = useState<string>('');
  const [resultados, setResultados] = useState<ResultadoBusqueda[]>([]);
  
  useEffect(() => {
    if (termino.length > 2) {
      // TypeScript: Función async con tipos
      const buscar = async (): Promise<void> => {
        const response: Response = await fetch(`/api/buscar?q=${termino}`);
        const datos: ResultadoBusqueda[] = await response.json();
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
        placeholder="Buscar..."
      />
      <ul>
        {resultados.map(item => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### **4. Efecto con limpieza y tipos**
```tsx
function Reloj() {
  const [hora, setHora] = useState<Date>(new Date());
  
  useEffect(() => {
    // TypeScript: setInterval retorna number
    const timer: NodeJS.Timeout = setInterval(() => {
      setHora(new Date());
    }, 1000);
    
    // TypeScript: Función de limpieza tipada
    return (): void => {
      clearInterval(timer);
    };
  }, []); // Solo al montar y desmontar
  
  return <div>Hora actual: {hora.toLocaleTimeString()}</div>;
}
```

---

## ⚡ Manejo de Eventos en React con TypeScript

### 📝 ¿Qué son los Eventos con TypeScript?

Los eventos en React con TypeScript proporcionan tipado completo para los objetos de evento, mejorando la seguridad de tipos y el IntelliSense.

### 🏗️ Sintaxis de Eventos con TypeScript

```tsx
import { ChangeEvent, MouseEvent, KeyboardEvent } from 'react';

function MiComponente() {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log('Botón clickeado');
  };
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log('Valor:', event.target.value);
  };
  
  return (
    <div>
      <button onClick={handleClick}>
        Hacer clic
      </button>
      <input onChange={handleInputChange} />
    </div>
  );
}
```

### 📝 Tipos de Eventos Comunes con TypeScript

#### **Eventos de Mouse con Tipos**
```tsx
function EventosMouse() {
  const [posicion, setPosicion] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>): void => {
    setPosicion({
      x: event.clientX,
      y: event.clientY
    });
  };
  
  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    console.log('Click en:', event.clientX, event.clientY);
  };
  
  const handleDoubleClick = (): void => {
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
        cursor: 'crosshair'
      }}
    >
      <p>Posición del mouse: {posicion.x}, {posicion.y}</p>
      <p>Haz click o doble click aquí</p>
    </div>
  );
}
```

#### **Eventos de Teclado con Tipos**
```tsx
function EventosTeclado() {
  const [tecla, setTecla] = useState<string>('');
  const [texto, setTexto] = useState<string>('');
  
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    setTecla(event.key);
    
    if (event.key === 'Enter') {
      console.log('Enter presionado');
    }
    
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      console.log('Guardar (Ctrl+S)');
    }
  };
  
  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>): void => {
    console.log('Tecla soltada:', event.key);
  };
  
  return (
    <div>
      <input 
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        placeholder="Escribe algo..."
      />
      <p>Última tecla: {tecla}</p>
      <p>Texto: {texto}</p>
    </div>
  );
}
```

#### **Eventos de Formulario con Tipos**
```tsx
// TypeScript: Interface para datos del formulario
interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

function Formulario() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    mensaje: ''
  });
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Datos del formulario:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleInputChange}
          rows={4}
        />
      </div>
      
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### 🎯 Pasar Parámetros a Eventos con TypeScript

```tsx
// TypeScript: Interface para botones
interface Boton {
  id: number;
  texto: string;
  activo: boolean;
}

function ListaBotones() {
  const [botones, setBotones] = useState<Boton[]>([
    { id: 1, texto: 'Botón 1', activo: false },
    { id: 2, texto: 'Botón 2', activo: false },
    { id: 3, texto: 'Botón 3', activo: false }
  ]);
  
  const handleClick = (id: number): void => {
    setBotones(prev => 
      prev.map(boton => 
        boton.id === id 
          ? { ...boton, activo: !boton.activo }
          : boton
      )
    );
  };
  
  return (
    <div>
      {botones.map(boton => (
        <button
          key={boton.id}
          onClick={() => handleClick(boton.id)}
          style={{
            backgroundColor: boton.activo ? '#007bff' : '#6c757d',
            color: 'white',
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            borderRadius: '4px'
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

## 🚀 Ejercicio Práctico con TypeScript

### 📝 Crear una Aplicación de Notas Interactiva con TypeScript

```tsx
import { useState, useEffect } from 'react';

// TypeScript: Interfaces para la aplicación
interface Nota {
  id: number;
  texto: string;
  fecha: string;
  completada: boolean;
}

type FiltroTipo = 'todas' | 'pendientes' | 'completadas';

function App() {
  const [notas, setNotas] = useState<Nota[]>([]);
  const [nuevaNota, setNuevaNota] = useState<string>('');
  const [filtro, setFiltro] = useState<FiltroTipo>('todas');
  const [busqueda, setBusqueda] = useState<string>('');

  // Cargar notas del localStorage al montar
  useEffect(() => {
    const notasGuardadas: string | null = localStorage.getItem('notas');
    if (notasGuardadas) {
      try {
        const notasParseadas: Nota[] = JSON.parse(notasGuardadas);
        setNotas(notasParseadas);
      } catch (error) {
        console.error('Error al cargar notas:', error);
      }
    }
  }, []);

  // Guardar notas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  const agregarNota = (): void => {
    if (nuevaNota.trim()) {
      const nota: Nota = {
        id: Date.now(),
        texto: nuevaNota,
        fecha: new Date().toLocaleString(),
        completada: false
      };
      setNotas(prev => [...prev, nota]);
      setNuevaNota('');
    }
  };

  const toggleCompletada = (id: number): void => {
    setNotas(prev => 
      prev.map(nota => 
        nota.id === id 
          ? { ...nota, completada: !nota.completada }
          : nota
      )
    );
  };

  const eliminarNota = (id: number): void => {
    setNotas(prev => prev.filter(nota => nota.id !== id));
  };

  const filtrarNotas = (notas: Nota[]): Nota[] => {
    let notasFiltradas: Nota[] = notas;
    
    // Filtrar por estado
    if (filtro === 'completadas') {
      notasFiltradas = notasFiltradas.filter(nota => nota.completada);
    } else if (filtro === 'pendientes') {
      notasFiltradas = notasFiltradas.filter(nota => !nota.completada);
    }
    
    // Filtrar por búsqueda
    if (busqueda) {
      notasFiltradas = notasFiltradas.filter(nota => 
        nota.texto.toLowerCase().includes(busqueda.toLowerCase())
      );
    }
    
    return notasFiltradas;
  };

  const notasFiltradas: Nota[] = filtrarNotas(notas);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      agregarNota();
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>📝 Aplicación de Notas con TypeScript</h1>
      
      {/* Formulario para agregar notas */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input
            type="text"
            value={nuevaNota}
            onChange={(e) => setNuevaNota(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe una nueva nota..."
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          <button
            onClick={agregarNota}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
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
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar notas..."
            style={{
              flex: 1,
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value as FiltroTipo)}
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          >
            <option value="todas">Todas</option>
            <option value="pendientes">Pendientes</option>
            <option value="completadas">Completadas</option>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {notasFiltradas.map(nota => (
              <div
                key={nota.id}
                style={{
                  padding: '15px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: nota.completada ? '#f8f9fa' : 'white',
                  opacity: nota.completada ? 0.7 : 1
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ 
                      margin: '0 0 5px 0',
                      textDecoration: nota.completada ? 'line-through' : 'none'
                    }}>
                      {nota.texto}
                    </p>
                    <small style={{ color: '#666' }}>
                      {nota.fecha}
                    </small>
                  </div>
                  <div style={{ display: 'flex', gap: '5px', marginLeft: '10px' }}>
                    <button
                      onClick={() => toggleCompletada(nota.id)}
                      style={{
                        padding: '5px 10px',
                        backgroundColor: nota.completada ? '#28a745' : '#ffc107',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px'
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
                        fontSize: '12px'
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

### ✅ Ejercicio: Sistema de Gestión de Tareas Avanzado con TypeScript

Crea una aplicación React con TypeScript que incluya:

1. **Lista de tareas** con funcionalidades CRUD completas y tipado
2. **Filtros** por estado (todas, pendientes, completadas) con tipos union
3. **Búsqueda** en tiempo real con validación de tipos
4. **Prioridades** (alta, media, baja) con enum y colores
5. **Fechas de vencimiento** con validación de Date
6. **Persistencia** en localStorage con manejo de errores tipado
7. **Estadísticas** (total, completadas, pendientes) con interfaces

**Requisitos técnicos con TypeScript:**

- Definir interfaces para todos los tipos de datos
- Usar `useState` con tipos explícitos
- Usar `useEffect` con tipos de dependencias
- Implementar eventos con tipos de React
- Aplicar estilos CSS con propiedades tipadas
- Usar enums para prioridades y estados
- Implementar validaciones con tipos de TypeScript

**Estructura sugerida:**
```
src/
├── App.tsx
├── types/
│   ├── Tarea.ts
│   ├── Filtros.ts
│   └── index.ts
├── components/
│   ├── Tarea.tsx
│   ├── ListaTareas.tsx
│   ├── FormularioTarea.tsx
│   ├── Filtros.tsx
│   └── Estadisticas.tsx
├── hooks/
│   └── useLocalStorage.ts
└── App.css
```

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [React + TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - Guía completa de TypeScript con React
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Documentación oficial de TypeScript
- [React: Documentación sobre State](https://es.react.dev/learn/state-a-components-memory) - Guía de estado
- [React: Documentación sobre useEffect](https://es.react.dev/reference/react/useEffect) - Hook de efectos

### 📖 Conceptos para Investigar

- **Generics en TypeScript** - Tipos genéricos para hooks personalizados
- **Utility Types** - Tipos predefinidos de TypeScript
- **Type Guards** - Verificación de tipos en runtime
- **Enums vs Union Types** - Cuándo usar cada uno

---

## ❓ Preguntas Frecuentes

### ¿Cuál es la diferencia entre JavaScript y TypeScript en React?

- **JavaScript** es más simple y rápido para prototipos. **TypeScript** añade verificación de tipos, mejor IntelliSense y detección temprana de errores, pero requiere más configuración.

### ¿Cuándo usar tipos explícitos vs inferencia?

- **Usa tipos explícitos** para objetos complejos, props de componentes y estados que pueden ser null. **Usa inferencia** para valores simples como strings, numbers y booleans.

### ¿Cómo manejo eventos con TypeScript?

- **Importa los tipos de eventos** de React: `MouseEvent`, `ChangeEvent`, `KeyboardEvent`, etc. y especifica el elemento HTML: `MouseEvent<HTMLButtonElement>`.

### ¿Puedo usar TypeScript sin configurar el proyecto?

- **No, necesitas configuración**. Usa `npm create vite@latest mi-app -- --template react-ts` para crear un proyecto React con TypeScript preconfigurado.

### ¿Qué ventajas tiene TypeScript en el desarrollo?

- **Detección temprana de errores**, mejor documentación del código, refactoring más seguro, IntelliSense superior y mejor experiencia de desarrollo en general.

### ¿Cómo defino interfaces para props de componentes?

```tsx
interface MiComponenteProps {
  titulo: string;
  activo: boolean;
  onCambio: (valor: string) => void;
}

function MiComponente({ titulo, activo, onCambio }: MiComponenteProps) {
  // Componente tipado
}
```

---

## 🎉 ¡State, Hooks y Eventos con TypeScript Dominados!

¡Excelente trabajo! Ya conoces los fundamentos del estado, hooks y eventos en React con TypeScript, puedes crear componentes interactivos y dinámicos con verificación de tipos. En la próxima clase profundizaremos en formularios, validaciones y patrones avanzados de React con TypeScript.

**Recuerda:** TypeScript añade una capa de seguridad y productividad a React. Domina los tipos y interfaces, y podrás crear aplicaciones más robustas y mantenibles. ¡Experimenta con diferentes patrones de tipado! 🚀

---

_📧 **Contacto:** Si tienes dudas sobre state, hooks y eventos en React con TypeScript, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
