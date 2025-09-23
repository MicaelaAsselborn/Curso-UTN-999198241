# 📖 Clase 24: Fragments, Formularios y Validaciones en React (TypeScript)

## 🎯 Objetivos de la Clase

- Comprender qué son los `Fragments` y cuándo utilizarlos.
- Implementar formularios controlados con `useState` y tipado con TypeScript.
- Aplicar validaciones básicas: HTML5 y personalizadas.
- Gestionar envío y manejo de errores en formularios.
- Conocer alternativas avanzadas: `useRef` (no controlados) y librerías.

---

## 📚 ¿Qué es React Fragment?

### 🔍 Definición

**React Fragment** es una forma de agrupar una lista de elementos hijos sin añadir nodos extra al DOM. Permite escribir estructuras JSX hermanas sin necesidad de envolverlas en contenedores como `div`.

### 🏗️ Características Principales

- **No añade nodos extra:** Limpia el HTML resultante.
- **Mejora accesibilidad y estilos:** Evita contenedores innecesarios.
- **Dos sintaxis:** `<React.Fragment>` y su atajo `<>...</>`.
- **Keys en Fragments:** Solo la forma larga (`<React.Fragment key={...}>`) acepta `key`.

### 📖 Historia Breve

- **2017:** Introducción de Fragments en React 16.2.
- **2018:** Atajo `<>...</>`.
- **2020+:** Uso extendido para listas y composición de componentes.
- **2022+:** Soporte con Server Components y mejoras de tipado.
- **Actualidad:** Patrón recomendado para agrupar sin contenedores extra.

---

## 🏛️ Formularios en React (Controlados)

### 📝 Control vs No Controlado

Un campo controlado mantiene su valor en el estado de React. Uno no controlado usa el DOM como fuente de la verdad (con `ref`).

```tsx
// Controlado
const [name, setName] = useState('');
<input value={name} onChange={(e) => setName(e.target.value)} />;

// No controlado
const inputRef = useRef<HTMLInputElement>(null);
<input ref={inputRef} />;
```

#### ✅ Recomendación práctica

- Usa formularios **controlados** por defecto cuando:

  - Necesites validar campo a campo, mostrar errores en tiempo real o deshabilitar/enviar condicionalmente.
  - Quieras transformar datos mientras escribe el usuario (trimming, formateo) o sincronizar con otros componentes/estado global.
  - Requieras una UI reactiva que dependa de los valores del formulario (por ejemplo, activar un botón solo si todo es válido).

- Considera formularios **no controlados** cuando:
  - El formulario es simple, sin validación compleja, y solo lees los valores al enviar.
  - Te preocupa el rendimiento en formularios muy grandes y no necesitas re-render en cada pulsación.

#### 🧭 Decisión rápida

1. ¿Mostraré errores por campo o necesito lógica reactiva? → Usa controlado.
2. ¿Solo leo valores al enviar (submit) y listo? → Puede ser no controlado.
3. ¿Formulario muy grande con performance ajustada? → Mezcla: controlado para campos críticos y `ref` para el resto.

### 📝 Tipado de Formularios con TypeScript

Define un tipo para el estado del formulario y usa `ChangeEvent`.

```tsx
import { useState, ChangeEvent, FormEvent } from 'react';

type LoginForm = {
  email: string;
  password: string;
  remember: boolean;
};

export function LoginForm() {
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
    remember: false,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginForm, string>>
  >({});

  // ¿Por qué "Partial<Record<keyof LoginForm, string>>"?
  // - Record<keyof LoginForm, string> define un objeto cuyas claves son exactamente las de LoginForm
  //   (email | password | remember) y cuyos valores son strings (los mensajes de error).
  // - Partial<> hace que TODAS esas claves sean opcionales, porque no siempre hay error en todos los campos.
  // Resultado: "errors.email" puede existir (string) o no existir (undefined) de forma segura y tipada.
  // Alternativas equivalentes:
  //   type LoginErrors = { email?: string; password?: string; remember?: string };
  //   type LoginErrors = Partial<Record<keyof LoginForm, string>>; // más DRY (Don’t Repeat Yourself) si cambian los campos del form

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, type } = e.target;
    const value =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate(values: LoginForm) {
    const errs: Partial<Record<keyof LoginForm, string>> = {};
    if (!values.email) errs.email = 'Email requerido';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email))
      errs.email = 'Email inválido';
    if (values.password.length < 6) errs.password = 'Mínimo 6 caracteres';
    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length === 0) {
      // realizar submit
      console.log('Login OK', form);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label>
        Email
        <input
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && (
          <small style={{ color: 'crimson' }}>{errors.email}</small>
        )}
      </label>

      <label>
        Password
        <input
          type='password'
          name='password'
          value={form.password}
          onChange={handleChange}
          minLength={6}
          required
        />
        {errors.password && (
          <small style={{ color: 'crimson' }}>{errors.password}</small>
        )}
      </label>

      <label>
        <input
          type='checkbox'
          name='remember'
          checked={form.remember}
          onChange={handleChange}
        />
        Recordarme
      </label>

      <button type='submit'>Ingresar</button>
    </form>
  );
}
```

### 📝 Fragmentos en la práctica

```tsx
function UserCard({ name, email }: { name: string; email: string }) {
  return (
    <>
      <h3>{name}</h3>
      <p>{email}</p>
    </>
  );
}
```

### 📝 Manejo de Estados y Errores

- Estado local con `useState` para valores y errores.
- Validación al `submit` y opcionalmente en `onBlur`.
- Deshabilitar botón mientras hay errores o enviando.

```tsx
const [submitting, setSubmitting] = useState(false);
<button type='submit' disabled={submitting}>
  Enviar
</button>;
```

---

## 🏗️ Conceptos Avanzados

### 📄 Formularios No Controlados con `useRef`

```tsx
import { useRef } from 'react';

function Uncontrolled() {
  const emailRef = useRef<HTMLInputElement>(null);
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(emailRef.current?.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input ref={emailRef} type='email' />
      <button>Enviar</button>
    </form>
  );
}
```

---

## 🚀 Ejercicio Práctico

### 📝 Formulario de Registro con Validación en TS

Construye un formulario controlado con campos: `name`, `email`, `password`, `confirmPassword`. Valida email, longitud y coincidencia de contraseñas. Muestra errores por campo.

```tsx
// Registro.tsx
import { useState, ChangeEvent, FormEvent } from 'react';

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Registro() {
  const [form, setForm] = useState<RegisterForm>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterForm, string>>
  >({});

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate(v: RegisterForm) {
    const errs: Partial<Record<keyof RegisterForm, string>> = {};
    if (!v.name.trim()) errs.name = 'Nombre requerido';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email))
      errs.email = 'Email inválido';
    if (v.password.length < 6) errs.password = 'Mínimo 6 caracteres';
    if (v.password !== v.confirmPassword) errs.confirmPassword = 'No coincide';
    return errs;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length === 0) {
      alert('Registro exitoso');
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <input
        name='name'
        value={form.name}
        onChange={onChange}
        placeholder='Nombre'
      />
      {errors.name && <small style={{ color: 'crimson' }}>{errors.name}</small>}

      <input
        name='email'
        type='email'
        value={form.email}
        onChange={onChange}
        placeholder='Email'
      />
      {errors.email && (
        <small style={{ color: 'crimson' }}>{errors.email}</small>
      )}

      <input
        name='password'
        type='password'
        value={form.password}
        onChange={onChange}
        placeholder='Contraseña'
      />
      {errors.password && (
        <small style={{ color: 'crimson' }}>{errors.password}</small>
      )}

      <input
        name='confirmPassword'
        type='password'
        value={form.confirmPassword}
        onChange={onChange}
        placeholder='Confirmar'
      />
      {errors.confirmPassword && (
        <small style={{ color: 'crimson' }}>{errors.confirmPassword}</small>
      )}

      <button>Crear cuenta</button>
    </form>
  );
}
```

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crea un formulario de contacto con campos `name`, `email`, `message`:

1. Validación por campo y al enviar.
2. Muestra mensajes de error accesibles.
3. Deshabilita el botón mientras haya errores.
4. Limpia el formulario tras enviar correctamente.
5. Usa tipos `ContactForm` y `Errors` correctamente.
6. Extra: Campo `topic` select con opciones.
7. Extra: Persistencia en `localStorage`.

**Requisitos técnicos:**

- React + TypeScript.
- Componentes funcionales y hooks (`useState`, `useRef` opcional).
- Validaciones con expresiones regulares y atributos HTML5.
- Tipado estricto de eventos y estado.

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [Fragments – React Docs](https://react.dev/reference/react/Fragment) - Documentación oficial.
- [Forms – React Docs](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components) - Controlados vs no controlados.
- [TypeScript Handbook: Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) - Tipos útiles.
- [MDN Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Validación en formularios.

### 📖 Conceptos para Investigar

- **`<></>` vs `<Fragment>`** Diferencias y uso de `key`.
- **`ChangeEvent` y `FormEvent`** en TS.
- **Validación accesible** con `aria-*`.
- **Librerías de formularios**: React Hook Form, Formik, Zod.

---

## ❓ Preguntas Frecuentes

### ¿Cuándo usar un Fragment y no un `div`?

- **Evitar wrappers** innecesarios que afectan estilos o accesibilidad.
- **Listas** donde se requiere `key` en el Fragment (usar forma larga).
- **Retornar múltiples elementos** desde un componente.

### ¿Cómo valido emails correctamente?

- **Suficiente** usar un regex simple + validación del backend.
- **Evita regex complejos** difíciles de mantener.
- **Aprovecha `type="email"`** para validación nativa.

### ¿Controlado o no controlado?

- **Controlado** para reglas y UI reactivas.
- **No controlado** para formularios simples y performance.

---

## 🎉 ¡Fragments y Formularios Dominados!

¡Excelente trabajo! Ya conoces cómo agrupar sin `div`, construir formularios controlados y validar datos con TS. En la próxima clase veremos listas, iteración y `key` para renderizar colecciones eficientemente.

**Recuerda:** practica creando pequeñas formas con distintos campos. ¡Tú puedes! 🚀

---

_📧 **Contacto:** Si tienes dudas sobre formularios en React con TypeScript, no dudes en consultar durante la clase o por los canales de comunicación establecidos._
