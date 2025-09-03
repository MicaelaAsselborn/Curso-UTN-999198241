import { Persona, Producto } from './modules/poo.js';
import { getPokemon, getMany } from './modules/pokeapi.js';

// Helpers UI
const $out = document.getElementById('output');

const log = (...args) => {
  const line = args
    .map((a) => (typeof a === 'string' ? a : JSON.stringify(a, null, 2)))
    .join(' ');
  $out.insertAdjacentText('beforeend', line + '\n');
};
const clear = () => ($out.textContent = '');

// Loading por botón
function setBtnLoading($btn, on) {
  if (!$btn) return;
  $btn.disabled = on;
  $btn.classList.toggle('loading', on);
}

function withBtnLoading($btn, fn) {
  return async (...args) => {
    try {
      setBtnLoading($btn, true);
      return await fn(...args);
    } finally {
      setBtnLoading($btn, false);
    }
  };
}

// POO
document.getElementById('btn-saludar').addEventListener('click', () => {
  clear();
  const p = new Persona('Ana', 28);
  log(p.saludar());
});

document.getElementById('btn-producto').addEventListener('click', () => {
  clear();
  const prod = new Producto('Notebook', 999.99);

  log(prod.info());
});

// Asincronía - Callback
function esperar(ms, callback) {
  setTimeout(callback, ms);
}

const $btnCallback = document.getElementById('btn-callback');
$btnCallback.addEventListener(
  'click',
  withBtnLoading($btnCallback, async () => {
    clear();
    log('Esperando 1 segundo...');
    await new Promise((res) => esperar(1000, res));
    log('Pasó 1 segundo (callback)');
  })
);

// Asincronía - Promesa
function promesaSimple() {
  return new Promise((resolve) => setTimeout(() => resolve('Resuelta!'), 1000));
}

const $btnPromesa = document.getElementById('btn-promesa');
$btnPromesa.addEventListener(
  'click',
  withBtnLoading($btnPromesa, async () => {
    clear();
    log('Creando promesa de 1s...');
    try {
      const msg = await promesaSimple();
      log('then:', msg);
    } catch (err) {
      log('catch:', err.message);
    } finally {
      log('finally: limpieza');
    }
  })
);

// Asincronía - Async/Await
async function demoAsyncAwait() {
  log('Inicio async/await');
  const msg = await promesaSimple();
  log('await:', msg);
  return 'Listo';
}

const $btnAsync = document.getElementById('btn-async');
$btnAsync.addEventListener(
  'click',
  withBtnLoading($btnAsync, async () => {
    clear();
    try {
      const result = await demoAsyncAwait();
      log(result);
    } catch (e) {
      log('Error en async:', e.message);
    }
  })
);

// Fetch + PokeAPI
const $input = document.getElementById('pokemon-input');

// Helper: genera 'count' enteros únicos entre [min, max]
function randomUnique(min, max, count) {
  const set = new Set();
  while (set.size < count) {
    const n = Math.floor(Math.random() * (max - min + 1)) + min;
    set.add(n);
  }
  return [...set];
}

const $btnFetchUno = document.getElementById('btn-fetch-uno');
$btnFetchUno.addEventListener(
  'click',
  withBtnLoading($btnFetchUno, async () => {
    clear();
    const name = ($input.value || 'gengar').toLowerCase().trim();
    try {
      const data = await getPokemon(name);
      renderPokemon(data);
    } catch (e) {
      log('Error en fetch:', e.message);
    }
  })
);

const $btnFetchParalelo = document.getElementById('btn-fetch-paralelo');
$btnFetchParalelo.addEventListener(
  'click',
  withBtnLoading($btnFetchParalelo, async () => {
    clear();
    try {
      const ids = randomUnique(1, 151, 3);
      log('IDs aleatorios:', ids.join(', '));
      const list = await getMany(ids);
      list.forEach(renderPokemon);
    } catch (e) {
      log('Error en paralelo:', e.message);
    }
  })
);

// POST demo (JSON) con reqres.in
const $postName = document.getElementById('post-name');
const $postJob = document.getElementById('post-job');

async function postDemo(payload) {
  const res = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1',
    },
    body: JSON.stringify(payload),
  });

  // en el body va el objeto que necesito mandar a la API,y este necesita ser un JSON
  // por eso lo transformo mediante el JSON.stringify(...)
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}

const $btnPost = document.getElementById('btn-post-demo');
$btnPost.addEventListener(
  'click',
  withBtnLoading($btnPost, async () => {
    clear();
    const nombre = ($postName?.value || 'Ana').trim();
    const trabajo = ($postJob?.value || 'Dev').trim();
    try {
      log('Enviando JSON →', { nombre, trabajo });
      // const data = await postDemo({ nombre: nombre, trabajo: trabajo });
      // javascript entiende que tiene que guardar con nombre la variable nombre
      // y su respectivo contenido, gracias a eso podemos hacer lo siguiente:
      const user = { nombre, trabajo }; //Defino lo que voy a mandar
      const data = await postDemo(user);
      log('Respuesta:', data);
    } catch (e) {
      log('Error POST:', e.message);
    }
  })
);

// Botón Limpiar salida
const $btnClear = document.getElementById('btn-clear');
if ($btnClear) {
  $btnClear.addEventListener('click', () => {
    clear();
  });
}

function renderPokemon(p) {
  log(`Pokemon → #${p.id} ${p.name} | types: ${p.types.join(', ')}`);
  if (p.sprite) {
    const img = new Image();
    img.id = p.id;
    img.src = p.sprite;
    img.alt = p.name;
    img.width = 64;
    img.height = 64;
    $out.appendChild(img);
    $out.appendChild(document.createTextNode('\n'));
  }
}
