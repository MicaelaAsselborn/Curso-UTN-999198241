# 📖 Clase 26: Redux en React - Gestión de Estado Global

## 🎯 Objetivos de la Clase

- **Comprender qué es Redux y por qué es importante para aplicaciones React** - Aprender los conceptos fundamentales y cuándo usar Redux en lugar de otras soluciones de estado
- **Instalar y configurar Redux Toolkit en proyectos React** - Configurar el entorno de desarrollo con las herramientas necesarias
- **Crear stores, reducers y actions para manejar el estado global** - Implementar la arquitectura básica de Redux con Redux Toolkit
- **Conectar componentes React con el store de Redux usando hooks** - Usar useSelector y useDispatch para interactuar con el estado
- **Implementar operaciones asíncronas con Redux Thunk** - Manejar llamadas a APIs y operaciones que toman tiempo
- **Aplicar Redux en aplicaciones reales con casos de uso prácticos** - Crear ejemplos funcionales como carrito de compras
- **Optimizar el rendimiento con selectores y memoización** - Mejorar la eficiencia de la aplicación

---

## 📚 ¿Qué es Redux?

### 🔍 Definición

**Redux** es una librería de gestión de estado predecible para aplicaciones JavaScript. Proporciona un contenedor de estado global que permite a los componentes acceder y modificar datos de manera consistente y predecible. Redux sigue el patrón de arquitectura Flux y es especialmente popular en aplicaciones React.

> **💡 Explicación simple:** Redux es como un "banco de datos" centralizado donde todos los componentes de tu aplicación pueden guardar y obtener información de manera organizada y predecible.

### 🏗️ Características Principales

- **Estado predecible:** Los cambios de estado siguen un patrón consistente - Siempre sabes cómo y cuándo cambia el estado
- **Estado centralizado:** Todo el estado de la aplicación en un solo lugar - No hay datos dispersos por diferentes componentes
- **Inmutabilidad:** El estado nunca se modifica directamente - Siempre se crea una nueva versión del estado
- **Tiempo de viaje:** Herramientas de debugging avanzadas - Puedes "viajar en el tiempo" para ver cómo cambió el estado
- **Middleware:** Extensibilidad para funcionalidades adicionales - Puedes agregar funcionalidades como logging o persistencia

### 📖 Historia Breve

- **2015:** Redux se lanza como librería independiente - Nace como una solución al problema de gestión de estado
- **2016:** Se convierte en el estándar para gestión de estado en React - La comunidad lo adopta masivamente
- **2018:** Redux Toolkit se lanza para simplificar el uso - Reduce la cantidad de código necesario
- **2020:** Redux Toolkit se convierte en la forma recomendada - Es la forma oficial de usar Redux
- **2022:** Redux Toolkit Query para manejo de datos del servidor - Simplifica las llamadas a APIs
- **2024:** Redux sigue siendo relevante junto con Context API - Ambas opciones tienen su lugar

---

## 🧑🏼‍🏫 Fundamentos de Redux

### 🏅 Los Tres Principios de Redux

1. 🥇 **Single Source of Truth:** Todo el estado de la aplicación se almacena en un solo store
   - **¿Por qué?** Evita inconsistencias y hace el debugging más fácil
2. 🥈 **State is Read-Only:** El estado solo puede cambiarse emitiendo actions
   - **¿Por qué?** Garantiza que los cambios sean predecibles y rastreables
3. 🥉 **Changes are Made with Pure Functions:** Los reducers son funciones puras que especifican cómo cambia el estado
   - **¿Por qué?** Las funciones puras son predecibles y fáciles de testear

### 📝 Instalación y Configuración

> **💡 Requisito:** Tener Node.js y npm instalados

```bash
npm create vite@latest example-redux

# Instalar Redux Toolkit y React Redux
npm install @reduxjs/toolkit react-redux
```

> **💡 Nota:** Redux Toolkit incluye Redux, Redux Thunk y otras utilidades. Es la forma moderna y recomendada de usar Redux. 🧑‍💻 Revisar la web [Redux Toolkit Oficial](https://redux-toolkit.js.org/) para más detalles.

### (PLUS) MUI Components

Es una **libreria** de componentes para React que implementa **Material Design**

[Instalacion MATERIALUI](https://mui.com/material-ui/getting-started/installation/)

```bash
npm install @mui/material @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material
```

```tsx
// src/main.tsx
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

---

## 🚨 Comenzamos!

> **Ejemplo:** A continuación, desarrollaremos un ejemplo práctico utilizando una lista de personas y tablas para ilustrar cómo gestionar el estado global con Redux en React.

    🧹 Borramos todo lo que no necesitemos en el proyecto vite

### Componentes Iniciales

Vamos a crear algunos componentes basicos para trabajar con redux,
podemos utilizar los componentes de MUI (Material UI) para hacer tablas y botones.

> (vamos a usar algunos componentes previamente creados para esta clase);

- `TableOfUsers`: Componente que muestra una tabla de usuarios
- `UserForm`: Componente para agregar/editar usuarios (lo crearemos mas adelante)

```tsx
// src/components/TableOfUsers/index.tsx

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createColumns } from './utils';

export interface IColumn<T extends object> {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center';
  render?: (row: T) => React.ReactNode;
}

export interface ITable<T extends object> {
  rows: T[];
  columns?: IColumn<T>[];
}

export default function TableOfUsers<T extends object>({
  rows,
  columns,
}: ITable<T>) {
  const resolvedColumns =
    columns ?? (rows.length > 0 ? createColumns(rows[0]) : []);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {resolvedColumns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow hover role='checkbox' tabIndex={-1} key={i}>
                {resolvedColumns.map((column) => {
                  const cellContent: React.ReactNode = column.render
                    ? column.render(row)
                    : String((row as Record<string, unknown>)[column.id] ?? '');

                  return (
                    <TableCell key={column.id} align={column.align}>
                      {cellContent}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
```

```ts
// src/utils.ts
import type { IColumn } from './components/TableOfUsers';

export const createColumns = <T extends object>(data: T): IColumn<T>[] => {
  try {
    if (!data || typeof data !== 'object') {
      throw new Error('Datos inválidos para generar columnas');
    }

    return Object.keys(data).map((key) => ({
      id: String(key),
      label: key.toUpperCase(),
      minWidth: 100,
      align: 'left',
    }));
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Error desconocido al crear columnas');
  }
};
```

```tsx
// src/components/UserForm.tsx
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import type { IUserWithId } from '../interfaces/user.interface';
import { useState, type FormEvent } from 'react';

interface UserFormProps {
  initialValues?: Partial<IUserWithId>;
  onSubmit: (user: Partial<IUserWithId>) => void;
}

export function UserForm({ initialValues, onSubmit }: UserFormProps) {
  const [formData, setFormData] = useState<Partial<IUserWithId>>(
    initialValues || { name: '', lastname: '' }
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name?.trim() || !formData.lastname?.trim()) return;
    onSubmit(formData);
  };

  return (
    <Box component='form' onSubmit={handleSubmit}>
      <Typography variant='h6' mb={2}>
        {initialValues ? 'Editar Usuario' : 'Crear Usuario'}
      </Typography>

      <Stack spacing={2}>
        <TextField
          label='Nombre'
          name='name'
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label='Apellido'
          name='lastname'
          value={formData.lastname}
          onChange={handleChange}
          fullWidth
          required
        />

        <Button type='submit' variant='contained' color='primary'>
          {initialValues ? 'Guardar Cambios' : 'Crear Usuario'}
        </Button>
      </Stack>
    </Box>
  );
}

export default UserForm;
```

Tambien necesitaremos algunos tipos e interfaces:

```ts
// src/interfaces/user.interface.ts

export interface IUser {
  name: string;
  lastname: string;
  email: string;
}

export interface IUserWithId extends IUser {
  id: string;
}

export interface IUserUpdate extends Partial<IUser> {
  id: string;
}
```

### 📝 Configuración Básica del Store

Lo primero que vamos a necesitar es crear el **Store**, es donde se va a guardar todo el estado de nuestra aplicación.

```ts
// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Aquí van los reducers de los slices que creemos
  },
});
```

> **💡 Explicación:** El store es el "banco de datos" central. Aquí combinamos todos los reducers (manejadores de estado) de nuestra aplicación.

### 📝 Configuración del Provider

```tsx
// src/main.tsx
...
import { store } from './store/index.ts';
import { Provider} from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

```

> **💡 Explicación:** El Provider **"envuelve"** toda la aplicación para que todos los componentes puedan acceder al store de Redux.

---

### 🏗️ Creando Slices con Redux Toolkit

```ts
// src/store/usersSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { IUserWithId } from '../../interfaces/user.interface';

const initialState: IUserWithId[] = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState, // como tiene el mismo nombre, no es necesario poner initialState: initialState
  reducers: {},
});

export default usersSlice.reducer;
```

> **💡 Explicación:** Un slice es como un **"pedazo"** del estado de la aplicación. Aquí definimos el estado inicial, las acciones que pueden modificar el estado, y Redux Toolkit genera automáticamente los action creators. Lo que nos
> interesa es el reducer que exportamos para usarlo en el store.

Vamos a usar el **userMock** para poblar el estado inicial:

```ts
import { usersMock } from '../../mocks/usersMock';

const initialState: IUserWithId[] = usersMock.map((user) => ({
  ...user,
  id: crypto.randomUUID(),
}));
```

Teniendo el **Slice** creado. Vamos a importarlo en el store:

```jsx
// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './userSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
```

> **💡 Explicación:** Importamos el usersReducer desde el slice que creamos, en el futuro podemos importar otros si asi lo necesitaramos.

---

### 🧑‍💻 Usando Redux en Componentes React

En nuestro componente principal `App.tsx`, vamos a usar los hooks `useSelector` y `useDispatch` para interactuar con el estado global.

```tsx
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // ...
  const users = useSelector((state) => state.users);
  // ...
  return <>...</>;
}
```

> **💡 Explicación:** `useSelector` nos permite acceder al estado global. Aquí estamos obteniendo la lista de usuarios desde el slice `users`.

En este punto podemos ver un error en visual studio code relacionado al state

    ⚠️ 'state' is of type 'unknown'.

Es complicado tipar en redux, ya que el state puede tener muchos tipos diferentes dependiendo de los slices que tengamos.

Para solucionarlo, vamos a crear un tipo para el estado global:

```ts
// src/store/index.ts
export type RootState = ReturnType<typeof store.getState>;
```

> **💡 Explicación:** `RootState` es un tipo que representa la forma completa del estado global. Usamos `ReturnType` para inferir el tipo automáticamente.

Tambien podemos crear un tipo para el dispatch:

```ts
// src/store/index.ts
export type AppDispatch = typeof store.dispatch;
```

> **💡 Explicación:** `AppDispatch` es un tipo que representa la función de dispatch. Esto es útil para tipar correctamente el dispatch en componentes.

luego, en nuestro componente `App.tsx`, podemos usar este tipo para tipar el estado:

```tsx
import type { RootState } from './store/index.ts';

...

const users = useSelector((state: RootState) => state.users);
```

Esta es una solucion factible pero conlleva un poco mas de trabajo, ya que cada vez que queramos usar el estado global, tenemos que importar el tipo `RootState` y tipar el estado.

una alternativa es crear un hook personalizado que ya tenga el tipo `RootState` incluido y el dispatch tipado:

```ts
// src/hooks/store.ts
import type { AppDispatch, RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
```

> **💡 Explicación:** `useAppSelector` es un hook personalizado que ya tiene el tipo `RootState` incluido. `useAppDispatch` es un hook personalizado que ya tiene el tipo `AppDispatch` incluido. Esto lo hacemos por unica vez y nos olvidamos 🤯

---

```tsx
// src/App.tsx
import { useAppSelector, useAppDispatch } from './hooks/store.ts';
const users = useAppSelector((state) => state.users);
const dispatch = useAppDispatch();
```

> **💡 Explicación:** Ahora podemos usar `useAppSelector` y `useAppDispatch` sin preocuparnos por tipar el estado o el dispatch cada vez.

En este punto, ya tenemos todo lo necesario para usar Redux en nuestra aplicación React, nos falta crear las acciones para modificar el estado.

### 🛠️ Creando Acciones y Reducers

```ts
// src/store/usersSlice.ts
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.push({ ...action.payload, id: crypto.randomUUID() });
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      return state.filter((user) => user.id !== action.payload);
    },
    editUser: (state, action: PayloadAction<IUserUpdate>) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

...

export const { addUser, deleteUser, editUser } = usersSlice.actions
```

Agregamos tambien un nuevo tipo `IUserUpdate` en el archivo de tipos:

```ts
// src/interfaces/user.interface.ts
export interface IUserUpdate extends Partial<IUser> {
  id: string;
}
```

> **💡 Explicación:** Aquí definimos tres acciones: `addUser`, `deleteUser` y `editUser`. Cada acción recibe un payload con los datos necesarios para modificar el estado. Redux Toolkit usa Immer bajo el capó, lo que nos permite escribir "mutaciones" de estado de manera segura.

Lo siguiente es usar estas acciones en nuestro componente `App.tsx`:

```tsx
// src/App.tsx
import { addUser, deleteUser, editUser } from './store/userSlice.ts';

const dispatch = useAppDispatch();
const handleAddUser = (user: IUser) => {
  dispatch(addUser(user));
};
const handleDeleteUser = (userId: string) => {
  dispatch(deleteUser(userId));
};
const handleEditUser = (user: IUserUpdate) => {
  dispatch(editUser(user));
};
```

> **💡 Explicación:** Usamos `dispatch` para enviar las acciones al store. Cada acción modifica el estado de acuerdo a la lógica definida en el slice.

Si bien, esto esta bien pensemos que cada ocacion que necesitemos hacer uso de los **Actions** hay que estar importando el dispatch y los actions que necesitemos, hay una manera de mejorar esto.

#### 🪄 Mejora!

Para esta mejora vamso a disponer de un custom hook mas.

```tsx
// src/hooks/useUserActions.ts

import { addUser, deleteUser, editUser } from '../store/userSlice';
import type { IUser, IUserUpdate } from '../types.ts';
import { useAppDispatch } from './store.ts';

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const remove = (id: string) => {
    dispatch(deleteUser(id));
  };

  const add = (user: IUser) => {
    dispatch(addUser(user));
  };

  const edit = (user: IUserUpdate) => {
    dispatch(editUser(user));
  };

  return { add, remove, edit };
};
```

En el `App.tsx`

```tsx
import { useUserActions } from './hooks/useUserActions.ts';

// ...

const { remove, edit } = useUserActions();

// ...

<Button onClick={() => edit(row)}>
	<EditDocumentIcon />
</Button>
<Button color='error' onClick={() => remove(row.id)}>
	<DeleteIcon />
</Button>

```

---

### 🧑‍💻 Integrando Componentes UI

En este punto ya tenemos todo lo necesario para mostrar y modificar el estado global con Redux en React. Vamos a integrar los componentes `TableOfUsers` y `UserForm` para mostrar la lista de usuarios y permitir agregar/editar usuarios.

```tsx
// src/App.tsx

import { Button, Dialog, DialogContent, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditDocumentIcon from '@mui/icons-material/EditDocument';

import type { IUser, IUserWithId } from './interfaces/user.interface';

import { createColumns } from './components/TableOfUsers/utils';
import TableOfUsers, { type IColumn } from './components/TableOfUsers';

import { useAppSelector } from './hooks/store.ts';
import { useUserActions } from './hooks/useUserActions.ts';
import UserForm from './components/UserForm.tsx';
import { useState } from 'react';

function App() {
  const users = useAppSelector((state) => state.users);
  const { remove, edit, add } = useUserActions();

  // 📌 Estado para controlar el formulario
  const [open, setOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<IUserWithId | null>(null);

  // 🛠️ Editar: abre formulario con datos del usuario
  const handleEdit = (user: IUserWithId) => {
    setEditingUser(user);
    setOpen(true);
  };

  // 🛠️ Crear: abre formulario vacío
  const handleCreate = () => {
    setEditingUser(null);
    setOpen(true);
  };

  // 🧪 Al enviar formulario
  const handleSubmit = (user: Partial<IUserWithId>) => {
    if (editingUser) {
      edit({ ...editingUser, ...user }); // editar existente
    } else {
      add(user as IUser); // crear nuevo
    }
    setOpen(false);
  };

  const baseColumns = createColumns(users[0]);

  const actionsColumn: IColumn<IUserWithId> = {
    id: 'actions',
    label: 'Acciones',
    align: 'center',
    render: (row: IUserWithId) => (
      <>
        <Button onClick={() => handleEdit(row)}>
          <EditDocumentIcon />
        </Button>
        <Button color='error' onClick={() => remove(row.id)}>
          <DeleteIcon />
        </Button>
      </>
    ),
  };

  const userColumns: IColumn<IUserWithId>[] = [...baseColumns, actionsColumn];

  return (
    <>
      <Stack direction='row' justifyContent='flex-end' mb={2} px={2}>
        <Button variant='contained' onClick={handleCreate}>
          + Crear Usuario
        </Button>
      </Stack>

      <TableOfUsers<IUserWithId> rows={users} columns={userColumns} />

      {/* 📦 Formulario en un Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth='sm'
      >
        <DialogContent>
          <UserForm
            initialValues={editingUser || undefined}
            onSubmit={handleSubmit}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio: Sistema de Gestión de Tareas con Redux

Crea una aplicación completa de gestión de tareas con las siguientes funcionalidades:

1. **Lista de tareas** con filtros por estado (pendiente, en progreso, completada) - Organiza las tareas por su estado actual
2. **Crear, editar y eliminar** tareas - Operaciones CRUD completas
3. **Marcar tareas como completadas** con animaciones - Mejora la experiencia de usuario
4. **Filtros avanzados** por prioridad, fecha y categoría - Búsqueda y organización eficiente
5. **Búsqueda en tiempo real** de tareas - Filtrado instantáneo
6. **Persistencia local** usando localStorage - Los datos se mantienen entre sesiones
7. **Estadísticas** de productividad y progreso - Métricas útiles para el usuario

Consejo: Divide la aplicación en componentes reutilizables y usa Redux para manejar el estado global de las tareas. Tambien puedes crear varias Paginas para diferentes vistas (todas las tareas, tareas completadas, estadísticas, etc.)

**Requisitos técnicos:**

- **Usar Redux Toolkit para toda la gestión de estado** - Aplicar todos los conceptos aprendidos
- **Implementar async thunks para operaciones complejas** - Manejar operaciones que toman tiempo
- **Crear selectores memoizados para optimizar rendimiento** - Mejorar la eficiencia
- **Usar TypeScript para tipado fuerte** - Añadir seguridad de tipos
- **Implementar middleware personalizado si es necesario** - Extender funcionalidades

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [Redux Toolkit Oficial](https://redux-toolkit.js.org/) - Documentación oficial y ejemplos
- [React Redux Hooks](https://react-redux.js.org/api/hooks) - Guía completa de hooks
- [Redux DevTools](https://github.com/reduxjs/redux-devtools) - Herramientas de debugging avanzadas
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview) - Para manejo eficiente de datos del servidor

### 📖 Conceptos para Investigar

- **Redux Middleware** - Funcionalidades adicionales como logging y persistencia
- **Redux Persist** - Mantener el estado en localStorage automáticamente
- **Redux Saga** - Manejo de efectos secundarios complejos con generadores
- **Zustand** - Alternativa moderna y más simple a Redux

---

## ❓ Preguntas Frecuentes

### ¿Cuándo debo usar Redux vs Context API?

- **Redux:** Aplicaciones complejas con mucho estado compartido - Cuando necesitas herramientas avanzadas de debugging y middleware
- **Context API:** Aplicaciones simples con poco estado global - Para casos básicos de compartir estado
- **Recomendación:** Empieza con Context API, migra a Redux si necesitas más funcionalidades

### ¿Redux Toolkit es obligatorio?

- **No:** Puedes usar Redux clásico, pero Redux Toolkit es la forma recomendada - Redux clásico requiere más código
- **Ventajas:** Menos código boilerplate, mejor TypeScript support, configuración automática
- **Recomendación:** Usa Redux Toolkit para nuevos proyectos - Es la forma oficial y moderna

### ¿Cómo manejo el estado del servidor con Redux?

- **Redux Toolkit Query:** La forma moderna y recomendada - Manejo automático de cache y sincronización
- **Async Thunks:** Para casos simples - Llamadas básicas a APIs
- **Redux Saga:** Para lógica compleja de efectos secundarios - Cuando necesitas control total

### ¿Puedo usar Redux con otros frameworks?

- **Sí:** Redux es agnóstico al framework - Funciona con cualquier framework JavaScript
- **React Redux:** Específico para React - Hooks y componentes optimizados
- **Vue, Angular:** Tienen sus propias implementaciones - NgRx para Angular, Vuex para Vue

---

## 🎉 ¡Redux en React Dominado!

¡Excelente trabajo! Ya conoces cómo implementar gestión de estado global con Redux en aplicaciones React. En la próxima clase veremos conceptos de automatización e IA.

**Recuerda:** Redux es una herramienta poderosa para aplicaciones complejas. ¡Practica creando diferentes tipos de estado y operaciones! 🚀

> **💡 Consejo final:** La clave para dominar Redux es la práctica. Empieza con ejemplos simples y ve aumentando la complejidad gradualmente. No tengas miedo de experimentar y hacer errores - es parte del aprendizaje.

---

_📧 **Contacto:** Si tienes dudas sobre Redux en React, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
