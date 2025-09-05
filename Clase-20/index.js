console.log('hola gente!');

const intentoPersona = {
  name: 'Pepe',
  lastname: 'Argento',
  id: 1,
};

class Persona {
  constructor(name, lastname, id) {
    this.name = name;
    this.lastname = lastname;
    this.id = id;
  }

  saludar() {
    console.log(`Hola soy ${this.name} ${this.lastname}`);
  }
}

let p1 = new Persona('Abel', 'Pintos', 2);
let p2 = new Persona('Ricardo', 'Arjona', 3);

console.log(p1.saludar());
p1.name = 'Pepe';

console.log(p1.saludar());
console.log(intentoPersona.name);

console.log(p2);
console.log(intentoPersona);

console.clear();

function promesaSimple(time) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (time >= 1000) {
        resolve({ name: 'pepe' });
      } else {
        reject(`Reject! ${time}`);
      }
    }, time)
  );
}
try {
  const promesa1 = await promesaSimple(1000);
  console.log('promesa1', promesa1);

  // al dar error por el reject corta la ejecucion y continua por el catch no ejecuta las lineas siguientes
  const promesa2 = await promesaSimple(500);
  console.log('promesa2', promesa2);

  // esto no se ejecuta ya que dio error la linea anterior
  const promesa3 = await promesaSimple(2000);
  console.log('promesa3', promesa3);
} catch (error) {
  console.log(error);
}

try {
  // yo aca coloco todo mi codigo
  // si por cualquier cosa esto da algun error
  let algo = null;

  console.log(algo.name); // el error esta aqui
  // a este codigo no llega
  console.log('llego o no llego?');
} catch (error) {
  // <- salta al catch
  console.log(error);
  console.log('pepe1');
  console.log('pepe2');
  console.log('pepe3');
  console.log('pepe4');
}

console.log('estamos bien'); // estamos bien gracias al trycatch

// muestro un cargando/loading que ocupa toda la pantalla
try {
  // llamo a un endpoint
} catch (error) {
  console.log(error);
  // mostrar en el html un mensaje 404 por ejemplo
}
// quito el cargando/loading
