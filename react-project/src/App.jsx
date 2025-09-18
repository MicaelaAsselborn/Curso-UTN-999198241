import { useState, useEffect } from 'react';
import './App.css';

function App({ saludar }) {
  // [0] ->> valor para consultar
  // [1] ->> manera de modificar el valor
  // Mantengo el estado de contador
  const [contador, setContador] = useState(0);

  // 	logica de js

  useEffect(() => {
    // Código que se ejecuta después del render
    console.log('Componente renderizado');

    // Función de limpieza (opcional)
    return () => {
      console.log('Componente se va a desmontar');
    };
  }, []);

  useEffect(() => {
    console.log('Effect Contador');
    saludar(contador);
  }, [contador]);

  return (
    <>
      <div className='card'>
        <button
          onClick={() => {
            setContador((contador) => contador - 1);
          }}
        >
          -
        </button>
        Contador is {contador}
        <button
          onClick={() => {
            setContador((contador) => contador + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
