import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';
import createCar from "./createCard.js";
import filter from "./filter.js";
const allPokemons = data.pokemon;
const rootBody = document.getElementById("root");
window.onload = createCar(allPokemons, rootBody);

//mostrar filtros en pantalla//

const btnArray = document.querySelectorAll("#btn-nav");
for (let i = 0; i < btnArray.length; i++) {
  //pasaremos el evento como parametro con `é`//
  btnArray[i].addEventListener("click", function (e) {
    //propiedad target, obtiene el elemento del evento//
    const self = e.target;

    createCar(filter(self.innerText), rootBody);
    console.log(`se le dio clic a ${self.innerHTML}`);
  });
}

//mostrar todos los pokemones//
function showAllPokemons() {
  createCar(allPokemons, rootBody);
}

const elementShowAll = document.getElementById("ver-todos");
elementShowAll.addEventListener("click", showAllPokemons);

//mostrar informacion sobre el pokemon//


