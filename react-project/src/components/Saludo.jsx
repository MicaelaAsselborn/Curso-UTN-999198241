// function Saludo() {
//   return <h1>¡Hola, React!</h1>;
// }

function Saludo(props) {
  const nombre = 'Ana';

  // console.log(props);
  // console.log(nombre);

  return (
    <div>
      <h2>Bienvenida, {nombre}!</h2>
      <h3>Edad: {props.edad}</h3>
    </div>
  );
}

export default Saludo;
