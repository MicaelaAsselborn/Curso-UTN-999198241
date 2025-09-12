# ⚛️ Clase 22: Componentes, Props y Composición en React

## 🎯 Objetivos de la Clase

- Comprender qué es un componente en React y su importancia
- Diferenciar componentes funcionales y de clase
- Dominar el uso de props para pasar información entre componentes
- Aplicar buenas prácticas en la composición de componentes
- Crear componentes reutilizables y mantenibles
- Entender el concepto de children en React

---

## 📚 ¿Qué es un Componente en React?

### 🔍 Definición

Un **componente** en React es una pieza reutilizable de la interfaz de usuario que encapsula tanto la lógica como la presentación. Es como una función que recibe datos (props) y devuelve elementos JSX que describen cómo debe verse la interfaz.

### 🏗️ Características Principales

- **Reutilizables:** Se pueden usar múltiples veces en diferentes partes de la aplicación
- **Aislados:** Cada componente maneja su propia lógica y estado
- **Componibles:** Se pueden combinar para crear interfaces complejas
- **Declarativos:** Describen qué debe renderizarse, no cómo
- **Encapsulados:** Oculten la complejidad interna y exponen una interfaz simple

### 📖 Historia y Evolución

- **2013:** React introduce el concepto de componentes
- **2015:** Componentes de clase se vuelven estándar
- **2018:** Hooks revolucionan los componentes funcionales
- **2020:** Componentes funcionales se convierten en la práctica recomendada
- **2023:** Estado actual con componentes funcionales y hooks como estándar

---

## 🏛️ Tipos de Componentes

### 📝 Componentes Funcionales (RECOMENDADO)

Los **componentes funcionales** son funciones de JavaScript que reciben props como parámetros y devuelven JSX. Son la práctica recomendada actual en React.

```jsx
// Componente funcional básico
function Saludo(props) {
  return <h1>¡Hola, {props.nombre}!</h1>;
}

// Componente funcional con destructuring
function Saludo({ nombre, edad }) {
  return (
    <div>
      <h1>¡Hola, {nombre}!</h1>
      <p>Tienes {edad} años</p>
    </div>
  );
}

// Componente funcional con arrow function
const Saludo = ({ nombre, edad }) => {
  return (
    <div>
      <h1>¡Hola, {nombre}!</h1>
      <p>Tienes {edad} años</p>
    </div>
  );
};
```

### 📝 Componentes de Clase (LEGACY - NO RECOMENDADO)

Los **componentes de clase** son clases de ES6 que extienden `React.Component` y tienen un método `render`. Aunque siguen funcionando, ya no se recomiendan para nuevos proyectos.

```jsx
// Componente de clase básico
class Saludo extends React.Component {
  render() {
    return <h1>¡Hola, {this.props.nombre}!</h1>;
  }
}

// Componente de clase con destructuring
class Saludo extends React.Component {
  render() {
    const { nombre, edad } = this.props;
    return (
      <div>
        <h1>¡Hola, {nombre}!</h1>
        <p>Tienes {edad} años</p>
      </div>
    );
  }
}
```

### ⚠️ **IMPORTANTE: ¿Por qué usar SOLO Componentes Funcionales?**

> 🚨 **RECOMENDACIÓN OFICIAL:** React recomienda usar **exclusivamente componentes funcionales** para todos los nuevos proyectos. Los componentes de clase están en modo de mantenimiento y no recibirán nuevas características.

#### 🎯 **Razones para usar Componentes Funcionales:**

1. **✅ Sintaxis más simple y limpia**
   ```jsx
   // Funcional - Simple y directo
   function MiComponente({ nombre }) {
     return <h1>{nombre}</h1>;
   }
   
   // Clase - Más verboso
   class MiComponente extends React.Component {
     render() {
       return <h1>{this.props.nombre}</h1>;
     }
   }
   ```

2. **✅ Hooks modernos disponibles**
   ```jsx
   // Funcional - Puede usar todos los hooks
   function MiComponente() {
     const [estado, setEstado] = useState(0);
     useEffect(() => { /* lógica */ }, []);
     return <div>{estado}</div>;
   }
   
   // Clase - No puede usar hooks
   class MiComponente extends React.Component {
     constructor(props) {
       super(props);
       this.state = { estado: 0 };
     }
     // No puede usar useEffect, useState, etc.
   }
   ```

3. **✅ Mejor rendimiento**
   - Menos código JavaScript generado
   - Optimizaciones automáticas del compilador
   - Mejor tree-shaking

4. **✅ Más fácil de testear**
   - Funciones puras son más predecibles
   - Menos setup en las pruebas
   - Mejor aislamiento

5. **✅ Futuro de React**
   - Todas las nuevas características de React están diseñadas para componentes funcionales
   - La comunidad y documentación se enfocan en funcionales
   - Los componentes de clase no recibirán nuevas características

### 📊 **Comparación Detallada**

| Aspecto | Funcionales ✅ | De Clase ❌ |
|---------|----------------|-------------|
| **Sintaxis** | Simple y concisa | Verbosa y compleja |
| **Hooks** | ✅ Completamente compatibles | ❌ No pueden usar hooks |
| **Estado** | `useState` | `this.state` |
| **Efectos** | `useEffect` | `componentDidMount`, etc. |
| **Rendimiento** | Optimizado | Bueno pero no óptimo |
| **Testing** | Más fácil | Más complejo |
| **Curva de aprendizaje** | Suave | Más pronunciada |
| **Soporte futuro** | ✅ Activo | ⚠️ Solo mantenimiento |
| **Recomendación** | ✅ **USAR SIEMPRE** | ❌ **EVITAR** |

### 🎯 **Migración de Clase a Funcional**

Si encuentras código con componentes de clase, aquí tienes cómo migrarlo:

```jsx
// ❌ Componente de clase (LEGACY)
class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cuenta: 0 };
  }

  incrementar = () => {
    this.setState({ cuenta: this.state.cuenta + 1 });
  }

  render() {
    return (
      <div>
        <p>Cuenta: {this.state.cuenta}</p>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

// ✅ Componente funcional (MODERNO)
function Contador() {
  const [cuenta, setCuenta] = useState(0);

  const incrementar = () => {
    setCuenta(cuenta + 1);
  };

  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
```

### 🚨 **Regla de Oro: SIEMPRE usa Componentes Funcionales**

> **Para todos los nuevos proyectos y código nuevo, usa EXCLUSIVAMENTE componentes funcionales. Los componentes de clase solo deben usarse para mantener código legacy existente.**

---

## 🏷️ Props: Propiedades en React

### 📝 ¿Qué son las Props?

Las **props** (propiedades) son la forma principal de pasar datos de un componente padre a un componente hijo. Son inmutables y fluyen hacia abajo en el árbol de componentes.

### 🏗️ Características de las Props

- **Inmutables:** No se pueden modificar en el componente hijo
- **Unidireccionales:** Solo fluyen de padre a hijo
- **Tipadas:** Pueden ser de cualquier tipo de JavaScript
- **Opcionales:** Se pueden definir valores por defecto
- **Validadas:** Se pueden validar con PropTypes o TypeScript

### 📝 Sintaxis y Uso de Props

```jsx
// Pasar props simples
function Usuario({ nombre, edad, email }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Edad: {edad}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Uso del componente
<Usuario 
  nombre="María García" 
  edad={28} 
  email="maria@email.com" 
/>

// Props con valores por defecto
function Boton({ texto, color = "blue", onClick }) {
  return (
    <button 
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}

// Uso con props opcionales
<Boton texto="Hacer clic" />
<Boton texto="Cancelar" color="red" onClick={handleCancel} />
```

### 📝 Props Complejas

```jsx
// Props con objetos
function TarjetaProducto({ producto, onComprar }) {
  return (
    <div className="tarjeta">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <button onClick={() => onComprar(producto.id)}>
        Comprar
      </button>
    </div>
  );
}

// Props con arrays
function ListaTareas({ tareas, onToggleCompletada }) {
  return (
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
          <button onClick={() => onToggleCompletada(tarea.id)}>
            {tarea.completada ? 'Desmarcar' : 'Completar'}
          </button>
        </li>
      ))}
    </ul>
  );
}
```

---

## 🧩 Composición de Componentes

### 📝 ¿Qué es la Composición?

La **composición** es el proceso de construir interfaces complejas combinando componentes más pequeños y simples. Es uno de los principios fundamentales de React.

### 🏗️ Patrones de Composición

#### **Composición Básica**
```jsx
function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Main() {
  return (
    <main>
      <Sidebar />
      <Content />
    </main>
  );
}
```

#### **Composición con Children**
```jsx
// Componente contenedor que acepta children
function Tarjeta({ titulo, children }) {
  return (
    <div className="tarjeta">
      <h2>{titulo}</h2>
      <div className="contenido">
        {children}
      </div>
    </div>
  );
}

// Uso con children
function App() {
  return (
    <Tarjeta titulo="Mi Perfil">
      <p>Esta es mi información personal</p>
      <button>Editar</button>
    </Tarjeta>
  );
}
```

#### **Composición con Render Props**
```jsx
// Componente que acepta una función como prop
function DatosUsuario({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setUsuario({ nombre: "Ana", email: "ana@email.com" });
      setCargando(false);
    }, 1000);
  }, []);

  return children({ usuario, cargando });
}

// Uso del componente
function App() {
  return (
    <DatosUsuario>
      {({ usuario, cargando }) => (
        <div>
          {cargando ? (
            <p>Cargando...</p>
          ) : (
            <div>
              <h2>{usuario.nombre}</h2>
              <p>{usuario.email}</p>
            </div>
          )}
        </div>
      )}
    </DatosUsuario>
  );
}
```

---

## 🏗️ Children en React

### 📝 ¿Qué es Children?

**Children** es una prop especial que representa el contenido que se pasa entre las etiquetas de apertura y cierre de un componente.

### 📝 Uso de Children

```jsx
// Componente que usa children
function Boton({ children, onClick, variant = "primary" }) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Uso con diferentes tipos de children
function App() {
  return (
    <div>
      {/* Texto simple */}
      <Boton onClick={() => alert('Hola')}>
        Hacer clic
      </Boton>

      {/* Elementos JSX */}
      <Boton variant="secondary" onClick={() => console.log('Guardar')}>
        <span>💾</span> Guardar
      </Boton>

      {/* Múltiples elementos */}
      <Boton variant="danger" onClick={() => console.log('Eliminar')}>
        <span>🗑️</span>
        <span>Eliminar</span>
      </Boton>
    </div>
  );
}
```

### 📝 Manipulación de Children

```jsx
import { Children, cloneElement } from 'react';

function ListaBotones({ children, onButtonClick }) {
  return (
    <div className="lista-botones">
      {Children.map(children, (child, index) => {
        if (child.type === 'button') {
          return cloneElement(child, {
            key: index,
            onClick: () => onButtonClick(index)
          });
        }
        return child;
      })}
    </div>
  );
}

// Uso
function App() {
  return (
    <ListaBotones onButtonClick={(index) => console.log(`Botón ${index} clickeado`)}>
      <button>Botón 1</button>
      <button>Botón 2</button>
      <button>Botón 3</button>
    </ListaBotones>
  );
}
```

---

## 🚀 Ejercicio Práctico

### 📝 Crear un Sistema de Tarjetas de Productos

Vamos a crear un sistema completo de tarjetas de productos que demuestre el uso de props, composición y children.

```jsx
// Componente base de tarjeta
function Tarjeta({ children, className = "" }) {
  return (
    <div className={`tarjeta ${className}`}>
      {children}
    </div>
  );
}

// Componente de tarjeta de producto
function TarjetaProducto({ producto, onComprar, onFavorito }) {
  return (
    <Tarjeta className="producto">
      <div className="imagen-container">
        <img src={producto.imagen} alt={producto.nombre} />
        <button 
          className="favorito"
          onClick={() => onFavorito(producto.id)}
        >
          {producto.esFavorito ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="contenido">
        <h3>{producto.nombre}</h3>
        <p className="descripcion">{producto.descripcion}</p>
        <div className="precio">
          <span className="precio-actual">${producto.precio}</span>
          {producto.precioOriginal && (
            <span className="precio-original">${producto.precioOriginal}</span>
          )}
        </div>
        
        <div className="acciones">
          <button 
            className="btn-comprar"
            onClick={() => onComprar(producto.id)}
          >
            Comprar
          </button>
          <button className="btn-detalles">
            Ver detalles
          </button>
        </div>
      </div>
    </Tarjeta>
  );
}

// Componente de lista de productos
function ListaProductos({ productos, onComprar, onFavorito }) {
  return (
    <div className="lista-productos">
      {productos.map(producto => (
        <TarjetaProducto
          key={producto.id}
          producto={producto}
          onComprar={onComprar}
          onFavorito={onFavorito}
        />
      ))}
    </div>
  );
}

// Componente principal
function App() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Laptop Gaming",
      descripcion: "Laptop para gaming de alto rendimiento",
      precio: 1200,
      precioOriginal: 1500,
      imagen: "https://via.placeholder.com/300x200",
      esFavorito: false
    },
    {
      id: 2,
      nombre: "Mouse Inalámbrico",
      descripcion: "Mouse ergonómico con conexión inalámbrica",
      precio: 45,
      imagen: "https://via.placeholder.com/300x200",
      esFavorito: true
    }
  ]);

  const handleComprar = (productoId) => {
    console.log(`Comprando producto ${productoId}`);
    // Lógica de compra
  };

  const handleFavorito = (productoId) => {
    setProductos(prev => 
      prev.map(p => 
        p.id === productoId 
          ? { ...p, esFavorito: !p.esFavorito }
          : p
      )
    );
  };

  return (
    <div className="app">
      <header>
        <h1>🛍️ Tienda Online</h1>
      </header>
      
      <main>
        <ListaProductos
          productos={productos}
          onComprar={handleComprar}
          onFavorito={handleFavorito}
        />
      </main>
    </div>
  );
}

export default App;
```

**Archivo `src/App.css`:**

```css
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.lista-productos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.tarjeta {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.tarjeta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.imagen-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.imagen-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.favorito {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 20px;
}

.contenido {
  padding: 15px;
}

.contenido h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.descripcion {
  color: #666;
  margin-bottom: 15px;
  font-size: 14px;
}

.precio {
  margin-bottom: 15px;
}

.precio-actual {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
}

.precio-original {
  text-decoration: line-through;
  color: #999;
  margin-left: 10px;
}

.acciones {
  display: flex;
  gap: 10px;
}

.btn-comprar {
  flex: 1;
  background: #3498db;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.btn-comprar:hover {
  background: #2980b9;
}

.btn-detalles {
  background: #ecf0f1;
  color: #2c3e50;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-detalles:hover {
  background: #bdc3c7;
}
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio: Sistema de Blog Personal

Crea una aplicación React que incluya:

1. **Componente `Articulo`** que reciba props como título, autor, fecha, contenido y categoría
2. **Componente `ListaArticulos`** que reciba un array de artículos y los renderice
3. **Componente `Sidebar`** que muestre categorías y un formulario de búsqueda
4. **Componente `Comentario`** que reciba props de usuario, fecha y texto
5. **Componente `FormularioComentario`** que permita agregar nuevos comentarios

**Requisitos técnicos:**

- Usar props para pasar datos entre componentes
- Implementar composición con children donde sea apropiado
- Crear al menos 5 componentes diferentes
- Aplicar estilos CSS para una presentación atractiva
- Usar destructuring en las props
- Implementar funciones para manejar eventos

**Estructura sugerida:**
```
src/
├── App.jsx
├── components/
│   ├── Articulo.jsx
│   ├── ListaArticulos.jsx
│   ├── Sidebar.jsx
│   ├── Comentario.jsx
│   └── FormularioComentario.jsx
├── data/
│   └── articulos.js
└── App.css
```

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [Documentación Oficial de React - Componentes y Props](https://es.react.dev/learn/passing-props-to-a-component) - Guía completa de props
- [Composición vs Herencia](https://es.react.dev/learn/thinking-in-react) - Patrones de diseño en React
- [Children en React](https://es.react.dev/learn/passing-props-to-a-component#passing-jsx-as-children) - Uso avanzado de children
- [PropTypes](https://react.dev/reference/react/PropTypes) - Validación de props

### 📖 Conceptos para Investigar

- **Render Props Pattern** - Patrón avanzado de composición
- **Higher-Order Components (HOC)** - Componentes de orden superior
- **Compound Components** - Componentes compuestos
- **PropTypes y validación** - Validación de tipos de props

---

## ❓ Preguntas Frecuentes

### ¿Qué diferencia hay entre props y state?

- **Props** son datos externos que recibe el componente (inmutables), mientras que **state** es información interna del componente que puede cambiar y causar re-renderizados.

### ¿Puedo modificar las props?

- **No, las props son inmutables** en el componente hijo. Si necesitas cambiar datos, debes usar state o pasar funciones callback al componente padre.

### ¿Por qué usar componentes pequeños?

- **Facilitan el mantenimiento**, la reutilización, las pruebas y la comprensión del código. Un componente pequeño tiene una responsabilidad específica y es más fácil de debuggear.

### ¿Cuándo usar children vs props?

- **Children** se usa cuando quieres que el componente padre controle el contenido que se renderiza dentro del componente hijo. **Props** se usan para pasar datos específicos y configuración.

### ¿Es mejor usar componentes funcionales o de clase?

- **Componentes funcionales** son la práctica recomendada actual (2023+) porque son más simples, pueden usar hooks, y tienen mejor rendimiento. Los componentes de clase se consideran legacy.

### ¿Cómo paso funciones como props?

- **Pasa la función directamente** como prop. El componente hijo puede llamarla cuando sea necesario:

```jsx
// Componente padre
function App() {
  const handleClick = () => {
    console.log('Botón clickeado');
  };

  return <MiBoton onClick={handleClick} />;
}

// Componente hijo
function MiBoton({ onClick }) {
  return <button onClick={onClick}>Hacer clic</button>;
}
```

---

## 🎉 ¡Componentes y Props Dominados!

¡Excelente trabajo! Ya conoces los fundamentos de componentes y props en React, puedes crear interfaces reutilizables y aplicar patrones de composición efectivos. En la próxima clase profundizaremos en el estado, hooks y eventos para crear componentes interactivos.

**Recuerda:** La composición es clave en React. Construye interfaces complejas combinando componentes simples y reutilizables. ¡Experimenta con diferentes patrones de composición! 🚀

---

_📧 **Contacto:** Si tienes dudas sobre componentes y props en React, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
