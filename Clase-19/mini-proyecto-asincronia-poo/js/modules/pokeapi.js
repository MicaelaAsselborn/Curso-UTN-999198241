const BASE = 'https://pokeapi.co/api/v2';

export async function getPokemon(poke) {
  const res = await fetch(`${BASE}/pokemon/${poke}`);
  if (!res.ok) throw new Error(`HTTP ${res.status} - No se encontró ${poke}`);
  const data = await res.json();
  console.log(data);
  return simplify(data);
}

export async function getMany(pokes) {
  const promises = pokes.map((n) => getPokemon(n));
  return Promise.all(promises);
}

export function simplify(data) {
  return {
    id: data.id,
    name: data.name,
    sprite: data.sprites?.front_default || null,
    types: data.types?.map((t) => t.type?.name) || [],
  };
}
