import data from "./data/pokemon/pokemon.js";
import createCard from "./createCard.js";

import {
  filterPok,
  gensPok,
  orderPoke,
  calculateHp,
  searchPokemon,
} from "./data.js";
//Mostrar spinner//
const spinner = document.getElementById("spinner");
spinner.style.display = "block";
const allPokemons = data.pokemon;
const rootBody = document.getElementById("root");


window.onload = createCard(allPokemons, rootBody);
//Ocultar spinner/
spinner.style.display = "none";

//Mostrar filtros en pantalla//
const btnArray = document.querySelectorAll(".btn-nav");
for (let i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener("click", function (e) {
    const self = e.target.innerText.toLowerCase();
    createCard(filterPok(self, allPokemons), rootBody);
    //console.log(`se le dio clic a ${self.innerHTML}`);
  });
}
//
//Filtrado por generación
const btnsGen = document.querySelectorAll(".btnGen");
btnsGen.forEach((btnGen) =>
  btnGen.addEventListener("click", function (e) {
    const generacion = e.target.innerText.toLowerCase();
    const filtered = gensPok(generacion, allPokemons);
    createCard(filtered, rootBody);
  })
);

//Ordenar pokemones
const showOrderPoke = document.getElementById("order");
showOrderPoke.addEventListener("change", function () { 
  orderPoke(showOrderPoke.value, allPokemons);
  createCard(allPokemons, rootBody);
});

//Error búsqueda
const errorMsg = () => {
  rootBody.innerHTML = `<h3>No pokemon found.</h3>
  <img src= pokemon-sad.gif>`;
};

//Buscar pokemon por nombre
const inputSearch = document.getElementById("search");

inputSearch.addEventListener("input", () => {
  const pokeByName = searchPokemon(allPokemons, inputSearch.value);
  if (pokeByName.length === 0) {
    return errorMsg();
  } else {
    createCard(pokeByName, rootBody);
  }
});

//mostrar todos los pokemones//
function showAllPokemons() {
  createCard(allPokemons, rootBody);
}

const elementShowAll = document.getElementById("see-all");
elementShowAll.addEventListener("click", showAllPokemons);

//calcular Cp//
const hpPoke = document.getElementById("numHP");
const btnCalculate = document.getElementById("btn-calculate");
btnCalculate.addEventListener("click", function () {
  const calculateHpPoke = calculateHp(hpPoke.value, allPokemons);
  createCard(calculateHpPoke, rootBody);
});
