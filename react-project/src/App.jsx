import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
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
      {/* <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1> */}
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
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
