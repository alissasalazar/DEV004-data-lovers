import data from "./data/pokemon/pokemon.js";
const allPokemons = data.pokemon;
import createCard from "./createCard.js";
const rootBody = document.getElementById("root");
//Filtrado de los tipos
export  const  filterPok= (value) => {
  const pokeTypes = data.pokemon.filter((pok) => pok.type.includes(value));
  console.log("Entro",pokeTypes)
  return pokeTypes;
}

//Filtrado de la generación
export const orderPok = (generacion) => {
  const kanto = data.pokemon.filter(
    (pokemon) => pokemon.generation.name === generacion
  );
  return kanto;
};

//Ordenado ascendente
export const ascOrder = (pokemones) => {
  return pokemones.sort(function (a, b) {
    if (a.num < b.num) {
      return -1;
    }
    if (a.num > b.num) {
      return 1;
    }
  });
};
//Ordenado descendente
export const descOrder = (pokemones) => {
  return pokemones.sort(function (a, b) {
    if (b.num < a.num) {
      return -1;
    }
    if (b.num > a.num) {
      return 1;
    }
  });
};

//Ordenar alfabeticamente A a Z//
export function orderAbcPoke(selectCombo) {
  if (selectCombo.options.selectedIndex === 1) {
    allPokemons.sort((a, b) => (a.name <= b.name ? -1 : 1));
  } else {
    allPokemons.sort((a, b) => (b.name <= a.name ? -1 : 1));
  }
  createCard(allPokemons, rootBody);
}
