import data from "./data/pokemon/pokemon.js";
// const allPokemons = data.pokemon;
//Filtrar los tipos
export const filterPok = (value, dataPoke) => {
  if (dataPoke === undefined) return "No se registró pokemon";
  const pokeTypes = dataPoke.filter((pok) => pok.type.includes(value));
  //console.log("Entro",pokeTypes)
  return pokeTypes;
};

//Filtrar la generación
export const gensPok = (generacion, dataPoke) => {
  if (dataPoke === undefined) return "No se registró pokemon";
  const genPok = dataPoke.filter(
    (pokemon) => pokemon.generation.name === generacion
  );
  return genPok;
};

//Ordenar de:1-251, 251-1, A a Z y Z a A//
export function orderPoke(selectCombo, dataPoke) {
  if (dataPoke === undefined) return "No se registró pokemon";
  if (selectCombo === "order1") {
    return dataPoke.sort((a, b) => (a.num < b.num ? -1 : 1));
  } else if (selectCombo === "order2") {
    return dataPoke.sort((a, b) => (a.num > b.num ? -1 : 1));
  } else if (selectCombo === "abc") {
    return dataPoke.sort((a, b) => (a.name <= b.name ? -1 : 1));
  } else {
    return dataPoke.sort((a, b) => (b.name <= a.name ? -1 : 1));
  }
}

//funcion filtrar Id para mostrar más caracteristicas del pokemon//
export function filterIdPok(id, dataPoke = data.pokemon) {
  const pokemonArray = dataPoke.filter((pokemon) => pokemon.num === id);
  const pokemonObj = pokemonArray[0];
  return pokemonObj;
}
//calcular CP//
export function calculateHp(hpPok, dataPoke) {
  const hpPoke = dataPoke.filter(
    (pok) => Number(pok.stats.max_hp) >= Number(hpPok)
  );
  return hpPoke;
}

//Buscar pokemon por nombre//
export const searchPokemon = (name, input) => {
  const pokeSearch = name.filter(pok => pok.name.startsWith(input.toLowerCase()));
  return pokeSearch;
}

