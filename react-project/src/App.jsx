import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App({ saludar }) {
  // [0] ->> valor para consultar
  // [1] ->> manera de modificar el valor
  // Mantengo el estado de contador
  const [contador, setcontador] = useState(0);

  // 	logica de js

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
            setcontador((contador) => contador - 1);
            saludar(contador);
          }}
        >
          -
        </button>
        Contador is {contador}
        <button
          onClick={() => {
            setcontador((contador) => contador + 1);
            saludar(contador);
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
