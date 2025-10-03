import { useEffect, useState } from 'react';
import './App.css';

const BASE = 'https://pokeapi.co/api/v2';
// https://pokeapi.co/api/v2/pokemon/2/

function App() {
  const [count, setCount] = useState(0);
  // const [pepe, setPepe] = useState(0);
  const [pokes, setPokes] = useState([]);

  const click = () => {
    setCount((count) => count + 1); // +1
    console.log('count click', count); // yo esperaria que sea el +1
  };

  useEffect(() => {
    console.log('che cambio count', count);
  }, [count]);

  //(LO QUE VOY A HACER, QUIEN LO DISPARA)
  useEffect(() => {
    console.log('al montar el componente');

    try {
      fetch(`${BASE}/pokemon/`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results);

          setPokes(data.results);
        });
    } catch (error) {
      console.log(error);
    }

    // const pokes = getPokemons();
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={click}>count is {count}</button>

        {pokes.map((poke, i) => {
          {
            /* esto tendria que ser un componente */
          }
          return (
            <div key={i}>
              <p>{poke.name}</p>
              <span>{poke.url}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
