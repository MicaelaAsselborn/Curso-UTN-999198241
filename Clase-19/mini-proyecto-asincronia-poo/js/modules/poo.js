export class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
  }
}

export class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  info() {
    return `Producto: ${this.nombre} - Precio: $${this.precio}`;
  }
}
