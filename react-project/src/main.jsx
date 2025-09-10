import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Saludo from './components/Saludo.jsx';
import Usuario from './components/Usuario.jsx';

const persona = {
  edad: 18,
  nombre: 'pepe',
  apellido: 'grillo',
  sangre: 'A+',
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    {/* <Saludo edad={persona.edad} /> */}

    <Usuario
      nombre={persona.nombre}
      apellido={persona.apellido}
      edad={persona.edad}
    />
    <Usuario apellido={persona.apellido} edad={persona.edad} />

    {/* <Usuario {...persona} /> */}
    {/*  */}
  </StrictMode>
);
