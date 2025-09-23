import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Saludo from './components/Saludo/Saludo.jsx';
import Usuario from './components/Usuario.jsx';

const persona = {
  edad: 18,
  nombre: 'pepe',
  apellido: 'grillo',
  sangre: 'A+',
};
console.log(persona);

function hola(n) {
  console.log('Hola', n);
}

function chau(n) {
  console.log('Chau', n);
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <App saludar={hola} />

    <App saludar={chau} />

    {/* <Saludo edad={persona.edad} /> */}

    {/* <Usuario
      nombre={persona.nombre}
      apellido={persona.apellido}
      edad={persona.edad}
    />
    <Usuario apellido={persona.apellido} edad={persona.edad} /> */}

    {/* <Usuario {...persona} /> */}
    {/*  */}
  </>

  // </StrictMode>
);
