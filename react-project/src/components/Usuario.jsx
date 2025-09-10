// function Usuario(props) {
//   return (
//     <div>
//       <h2>{props.nombre}</h2>
//       <p>Edad: {props.edad}</p>
//       <p>Apellido: {props.apellido}</p>
//     </div>
//   );
// }

function Usuario({ nombre = 'ana', edad, apellido }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Edad: {edad}</p>
      <p>Apellido: {apellido}</p>
    </div>
  );
}

export default Usuario;
