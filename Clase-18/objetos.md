# Objetos en JavaScript

## ¿Qué es un objeto en JavaScript?

Un objeto es una colección de propiedades, donde cada propiedad es un par clave-valor. Es una estructura de datos fundamental en JavaScript.

## 1. Creación de objetos

```javascript
// Notación literal (la más común)
const persona = {
  nombre: 'Ana',
  edad: 30,
  profesion: 'Desarrolladora',
};

// Usando new Object()
const auto = new Object();
auto.marca = 'Toyota';
auto.modelo = 'Corolla';
```

## 2. Acceso a propiedades

```javascript
// Notación de punto
console.log(persona.nombre); // "Ana"

// Notación de corchetes
console.log(persona['edad']); // 30
```

## 3. Métodos en objetos

```javascript
const calculadora = {
  sumar: function (a, b) {
    return a + b;
  },
  restar(a, b) {
    // Forma abreviada
    return a - b;
  },
};

console.log(calculadora.sumar(5, 3)); // 8
```

## 4. Palabra clave `this`

```javascript
const usuario = {
  nombre: 'Carlos',
  saludar: function () {
    return `Hola, soy ${this.nombre}`;
  },
};

console.log(usuario.saludar()); // "Hola, soy Carlos"
```

## 5. Constructor de objetos (Funciones constructoras)

```javascript
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.mostrarInfo = function () {
    return `${this.nombre}: $${this.precio}`;
  };
}

const producto1 = new Producto('Laptop', 1200);
console.log(producto1.mostrarInfo()); // "Laptop: $1200"
```

## 6. Clases (ES6+)

```javascript
class Animal {
  constructor(nombre, sonido) {
    this.nombre = nombre;
    this.sonido = sonido;
  }

  hacerSonido() {
    return `${this.nombre} hace ${this.sonido}`;
  }
}

const perro = new Animal('Perro', 'Guau!');
console.log(perro.hacerSonido()); // "Perro hace Guau!"
```

## 7. Métodos útiles de objetos

```javascript
const usuario = { nombre: 'Ana', edad: 30, ciudad: 'Madrid' };

// Obtener claves
console.log(Object.keys(usuario)); // ["nombre", "edad", "ciudad"]

// Obtener valores
console.log(Object.values(usuario)); // ["Ana", 30, "Madrid"]

// Verificar si una propiedad existe
console.log('edad' in usuario); // true
console.log(usuario.hasOwnProperty('email')); // false

// Copiar objetos (shallow copy)
const copiaUsuario = { ...usuario };
const otraCopia = Object.assign({}, usuario);
```

## 8. Desestructuración de objetos

```javascript
const estudiante = {
  nombre: 'Laura',
  edad: 25,
  carrera: 'Ingeniería',
};

const { nombre, carrera } = estudiante;
console.log(nombre, carrera); // "Laura" "Ingeniería"
```

## 9. Spread operator con objetos 👉 ...

```javascript
const datosPersonales = { nombre: 'Pedro', edad: 35 };
const datosContacto = { email: 'pedro@ejemplo.com', telefono: '123456789' };

const perfilCompleto = { ...datosPersonales, ...datosContacto };
console.log(perfilCompleto);
// { nombre: "Pedro", edad: 35, email: "pedro@ejemplo.com", telefono: "123456789" }
```

## Ejercicio práctico: Cuenta Bancaria

```javascript
// Crea un objeto "cuentaBancaria" con:
// - Propiedades: titular, saldo, moneda
// - Métodos: depositar(cantidad), retirar(cantidad), consultarSaldo()

const cuentaBancaria = {
  titular: 'Juan Pérez',
  saldo: 1000,
  moneda: 'USD',

  depositar(cantidad) {
    this.saldo += cantidad;
    return `Depósito exitoso. Nuevo saldo: ${this.saldo} ${this.moneda}`;
  },

  retirar(cantidad) {
    if (cantidad > this.saldo) {
      return 'Saldo insuficiente';
    }
    this.saldo -= cantidad;
    return `Retiro exitoso. Nuevo saldo: ${this.saldo} ${this.moneda}`;
  },

  consultarSaldo() {
    return `Saldo actual: ${this.saldo} ${this.moneda}`;
  },
};

// Prueba los métodos
console.log(cuentaBancaria.consultarSaldo()); // "Saldo actual: 1000 USD"
console.log(cuentaBancaria.depositar(500)); // "Depósito exitoso. Nuevo saldo: 1500 USD"
console.log(cuentaBancaria.retirar(200)); // "Retiro exitoso. Nuevo saldo: 1300 USD"
console.log(cuentaBancaria.retirar(1500)); // "Saldo insuficiente"
```

## Recursos adicionales

- [MDN Web Docs: Trabajando con objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects)
- [JavaScript.info: Objetos](https://es.javascript.info/object)
- [W3Schools: JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)
