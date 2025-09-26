# 📖 Clase 26: Routing en React - Navegación en Aplicaciones SPA

## 🎯 Objetivos de la Clase

- Comprender qué es el routing en aplicaciones web y por qué es importante
- Instalar y configurar React Router en proyectos React
- Implementar navegación básica entre componentes usando React Router
- Crear rutas dinámicas y anidadas para aplicaciones complejas
- Manejar parámetros de URL y consultas (query parameters)
- Implementar navegación programática y redirecciones
- Aplicar lazy loading y code splitting para optimizar el rendimiento

---

## 📚 ¿Qué es Routing en React?

### 📖 Definición

**Routing en React** es el proceso de manejar la navegación entre diferentes "páginas" o vistas en una aplicación de página única (SPA - Single Page Application). A diferencia de las aplicaciones web tradicionales donde cada página es un archivo HTML separado, en React todas las vistas son componentes que se renderizan dinámicamente según la URL actual.

### 🏗️ Características Principales

- **Navegación sin recarga:** Las transiciones entre páginas son instantáneas
- **URLs amigables:** Las URLs son legibles y pueden ser compartidas
- **Historial del navegador:** Funciona con los botones atrás/adelante
- **Rutas anidadas:** Permite crear estructuras de navegación complejas
- **Lazy loading:** Carga componentes solo cuando se necesitan

### 📖 Historia Breve

- **2013:** React se lanza como librería de interfaz de usuario
- **2014:** Surge la necesidad de routing en aplicaciones React
- **2015:** React Router v1 se lanza como solución oficial
- **2017:** React Router v4 introduce un enfoque completamente nuevo
- **2019:** React Router v5 estabiliza la API actual
- **2021:** React Router v6 simplifica y mejora la API
- **2024:** React Router v6 sigue siendo el estándar actual

---

## 📝 Fundamentos de React Router

### Instalación y Configuración

Para usar React Router, primero necesitamos instalarlo en nuestro proyecto:

```bash
# Instalar React Router DOM
npm install react-router-dom
```

### 📝 Configuración Básica

El primer paso es envolver nuestra aplicación con el componente `BrowserRouter`:

```tsx
// src/main.tsx o src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### 📝 Crear Rutas Básicas

```tsx
// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
```

### 🚢 Navegación con Links

```tsx
// src/components/Navigation.tsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/about'>Acerca de</Link>
        </li>
        <li>
          <Link to='/contact'>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
```

---

## 🏗️ Conceptos Avanzados de Routing

### 🗺️ Rutas Dinámicas y Parámetros

```tsx
// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Routes>
      {/* Ruta con parámetro de usuario */}
      <Route path='/user/:userId' element={<UserProfile />} />

      {/* Ruta con múltiples parámetros */}
      <Route path='/product/:category/:productId' element={<ProductDetail />} />
    </Routes>
  );
}
```

### 🚥 Acceso a Parámetros en Componentes

```tsx
// src/components/UserProfile.tsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();

  return (
    <div>
      <h1>Perfil del Usuario {userId}</h1>
      {/* Lógica para mostrar datos del usuario */}
    </div>
  );
}

export default UserProfile;
```

### 🪆 Query Parameters

```tsx
// src/components/SearchResults.tsx
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q');
  const category = searchParams.get('category');

  return (
    <div>
      <h1>Resultados para: {query}</h1>
      <p>Categoría: {category}</p>
    </div>
  );
}

export default SearchResults;
```

### 📄 Navegación Programática

```tsx
// src/components/LoginForm.tsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginForm() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lógica de autenticación
    const success = await authenticateUser(credentials);

    if (success) {
      // Navegar programáticamente
      navigate('/dashboard');
    } else {
      // Navegar con reemplazo (no agrega al historial)
      navigate('/login?error=invalid', { replace: true });
    }
  };

  return <form onSubmit={handleSubmit}>{/* Formulario de login */}</form>;
}

export default LoginForm;
```

### 🛤️ Rutas Anidadas (Nested Routes)

```tsx
// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Routes>
  );
}
```

```tsx
// src/components/Layout.tsx
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

function Layout() {
  return (
    <div className='layout'>
      <Navigation />
      <main>
        <Outlet /> {/* Aquí se renderizan las rutas hijas */}
      </main>
    </div>
  );
}

export default Layout;
```

---

## 🚀 Ejercicio Práctico

### Aplicación de Blog con Routing

Vamos a crear una aplicación de blog completa con diferentes rutas:

```tsx
// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import PostDetail from './components/PostDetail';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:postId' element={<PostDetail />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
```

**Archivo `src/components/Layout.tsx`:**

```tsx
import { Outlet, Link, useLocation } from 'react-router-dom';
import './Layout.css';

function Layout() {
  const location = useLocation();

  return (
    <div className='layout'>
      <header className='header'>
        <h1>Mi Blog Personal</h1>
        <nav className='navigation'>
          <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
            Inicio
          </Link>
          <Link
            to='/blog'
            className={location.pathname === '/blog' ? 'active' : ''}
          >
            Blog
          </Link>
          <Link
            to='/about'
            className={location.pathname === '/about' ? 'active' : ''}
          >
            Acerca de
          </Link>
          <Link
            to='/contact'
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contacto
          </Link>
        </nav>
      </header>

      <main className='main-content'>
        <Outlet />
      </main>

      <footer className='footer'>
        <p>&copy; 2025 Mi Blog Personal. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Layout;
```

**Archivo `src/components/Blog.tsx`:**

```tsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simular carga de posts
    const mockPosts = [
      {
        id: 1,
        title: 'Introducción a React',
        excerpt: 'Aprende los fundamentos...',
      },
      { id: 2, title: 'Routing en React', excerpt: 'Domina la navegación...' },
      { id: 3, title: 'Estado en React', excerpt: 'Gestiona el estado...' },
    ];
    setPosts(mockPosts);
  }, []);

  return (
    <div className='blog'>
      <h1>Blog</h1>
      <div className='posts-grid'>
        {posts.map((post) => (
          <article key={post.id} className='post-card'>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className='read-more'>
              Leer más
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
```

**Archivo `src/components/PostDetail.tsx`:**

```tsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simular carga de post específico
    const mockPost = {
      id: postId,
      title: `Post ${postId}`,
      content: 'Contenido completo del post...',
      author: 'Autor del Post',
      date: '2025-01-15',
    };
    setPost(mockPost);
  }, [postId]);

  if (!post) return <div>Cargando...</div>;

  return (
    <div className='post-detail'>
      <button onClick={() => navigate(-1)} className='back-button'>
        ← Volver
      </button>

      <article>
        <h1>{post.title}</h1>
        <div className='post-meta'>
          <span>Por {post.author}</span>
          <span>{post.date}</span>
        </div>
        <div className='post-content'>{post.content}</div>
      </article>
    </div>
  );
}

export default PostDetail;
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio: E-commerce con Routing

Crea una aplicación de e-commerce con las siguientes funcionalidades:

1. **Página de inicio** con productos destacados
2. **Catálogo de productos** con filtros por categoría
3. **Página de detalle de producto** con información completa
4. **Carrito de compras** con persistencia en localStorage
5. **Página de checkout** con formulario de compra
6. **Página de perfil de usuario** con historial de compras
7. **Sistema de autenticación** con rutas protegidas

**Requisitos técnicos:**

- Usar React Router v6 para toda la navegación
- Implementar rutas anidadas para el dashboard de usuario
- Crear rutas dinámicas para productos y categorías
- Manejar parámetros de URL para filtros y búsquedas
- Implementar navegación programática para el carrito
- Usar lazy loading para optimizar el rendimiento

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [React Router Oficial](https://reactrouter.com/) - Documentación oficial completa
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial) - Tutorial paso a paso
- [React Router Examples](https://github.com/remix-run/react-router/tree/main/examples) - Ejemplos prácticos
- [React Router Hooks](https://reactrouter.com/en/main/hooks) - Referencia de hooks

### 📖 Conceptos para Investigar

- **Code Splitting** - División de código para optimizar carga
- **Lazy Loading** - Carga perezosa de componentes
- **Route Guards** - Protección de rutas con autenticación
- **SEO con React Router** - Optimización para motores de búsqueda

---

## ❓ Preguntas Frecuentes

### ¿Cuál es la diferencia entre BrowserRouter y HashRouter?

- **BrowserRouter:** Usa la API History del navegador, URLs limpias sin #
- **HashRouter:** Usa el hash (#) en la URL, más compatible con servidores estáticos
- **Recomendación:** Usa BrowserRouter para aplicaciones modernas

### ¿Cómo manejo el 404 en React Router?

- **Ruta comodín:** `<Route path="*" element={<NotFound />} />`
- **Redirección:** `<Route path="*" element={<Navigate to="/" replace />} />`
- **Manejo de errores:** Usa error boundaries para errores de renderizado

### ¿Puedo usar React Router con TypeScript?

- **Sí:** React Router tiene soporte completo para TypeScript
- **Tipos incluidos:** No necesitas instalar tipos adicionales
- **IntelliSense:** Autocompletado completo en el IDE

### ¿Cómo optimizo el rendimiento con React Router?

- **Lazy loading:** `const LazyComponent = lazy(() => import('./Component'))`
- **Suspense:** Envuelve rutas lazy con `<Suspense>`
- **Code splitting:** Divide tu aplicación en chunks más pequeños

---

## 🎉 ¡Routing en React Dominado!

¡Excelente trabajo! Ya conoces cómo implementar navegación completa en aplicaciones React usando React Router. En la próxima clase veremos Redux para la gestión de estado global.

**Recuerda:** El routing es fundamental para crear aplicaciones web modernas y profesionales. ¡Practica creando diferentes tipos de navegación! 🚀

---

_📧 **Contacto:** Si tienes dudas sobre routing en React, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
