import data from "./data/pokemon/pokemon.js";
import createCard from "./createCard.js";
import { filterPok, gensPok, orderPoke, calculateHp } from "./data.js";
const allPokemons = data.pokemon;
const rootBody = document.getElementById("root");
window.onload = createCard(allPokemons, rootBody);

//Mostrar filtros en pantalla//
const btnArray = document.querySelectorAll(".btn-nav");
for (let i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener("click", function (e) {
    const self = e.target.innerText.toLowerCase();

    createCard(filterPok(self), rootBody);
    //console.log(`se le dio clic a ${self.innerHTML}`);
  });
}
//
//Filtrado por generación
const btnsGen = document.querySelectorAll(".btnGen");
btnsGen.forEach((btnGen) =>
  btnGen.addEventListener("click", function (e) {
    const generacion = e.target.innerText.toLowerCase();
    const filtered = gensPok(generacion);
    createCard(filtered, rootBody);
  })
);

const showOrderPoke = document.getElementById("order");
showOrderPoke.addEventListener("change", function () {
  orderPoke(showOrderPoke.value, allPokemons);
  createCard(allPokemons, rootBody);
});

//mostrar todos los pokemones//
function showAllPokemons() {
  createCard(allPokemons, rootBody);
}

const elementShowAll = document.getElementById("ver-todos");
elementShowAll.addEventListener("click", showAllPokemons);

//calcular Cp//
const hpPoke=document.getElementById("numHP");

const btnCalculate = document.getElementById("btn-calculate");
btnCalculate.addEventListener("click", function () {
  // console.log("valor que coloco en el input:", hpPoke.value);
  const calculateHpPoke = calculateHp(hpPoke.value, allPokemons);
  createCard(calculateHpPoke, rootBody);
});


// createCard(calculateCp, rootBody)
// function calculateCp(value, dataPoke = data.pokemon){
// const cpPoke= dataPoke.filter((pok) => pok.stats.max_cp > valueInputCp )
// }
