// function Saludo() {
//   return <h1>¡Hola, React!</h1>;
// }
import './style.css';

function Saludo(props) {
  const nombre = 'Ana';

  // console.log(props);
  // console.log(nombre);

  return (
    <div className='saludo'>
      <h2>Bienvenida, {nombre}!</h2>
      <h3>Edad: {props.edad}</h3>
    </div>
  );
}

export default Saludo;
