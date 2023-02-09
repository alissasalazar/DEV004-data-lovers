import data from "./data/pokemon/pokemon.js";
import createCard from "./createCard.js";
import filter, {
  orderPok,
  ascOrder,
  descOrder,
  orderAbcPoke,
} from "./filter.js";
const allPokemons = data.pokemon;
const rootBody = document.getElementById("root");
window.onload = createCard(allPokemons, rootBody);

//Mostrar más informacion sobre el pokemon//
function allAboutPokemons(data, contaner) {
  contaner.innerHTML = "";
  contaner.innerHTML += `<div id="cards"class="cardPokemon">
   <img class="imgCard"src="${data.img}" ></img>
   <a><h3 class="numCard"> ${data.num}</h3></a>
   <h4 class="nameCard"> ${data.name}</h4>
    <h5 class="typeCard">SOBRE EL: ${data.about}</h5>
    <h5 class="typeCard">RESISTENTE A:${data.resistant}</h5>
    <h5 class="typeCard">DEBIL A: ${data.weaknesses}</h5> 
   </div>`;
}

const allPok = document.querySelectorAll(".numCard");
for (let i = 0; i < allPok.length; i++) {
  allPok[i].addEventListener("click", function (p) {
    console.log(p);
    console.log(p.target);
    const numPok = p.target.innerText;
    window.onload = allAboutPokemons(filterIdPok(numPok), rootBody);
  });
}

function filterIdPok(id) {
  const pokemonArray = allPokemons.filter((pokemon) => pokemon.num === id);
  const pokemonObj = pokemonArray[0];
  console.log("entro funcion filterIdPok", pokemonObj);
  return pokemonObj;
}

//Mostrar filtros en pantalla//
const btnArray = document.querySelectorAll("#btn-nav");
for (let i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener("click", function (e) {
    const self = e.target;

    window.onload = createCard(filter(self.innerText), rootBody);
    console.log(`se le dio clic a ${self.innerHTML}`);
  });
}

//Filtrado por generación
const btnsGen = document.querySelectorAll(".btnGen");
btnsGen.forEach((btnGen) =>
  btnGen.addEventListener("click", function (e) {
    const generacion = e.target.innerText.toLowerCase();
    const filtered = orderPok(generacion);
    createCard(filtered, rootBody);
  })
);

//Ordenado por número ascendente y descendente
const order = document.querySelector(".order");
order.addEventListener("change", (event) => {
  if (event.target.value === "order1") {
    let pokemonAsc = ascOrder(allPokemons);
    createCard(pokemonAsc, rootBody);
  } else if (event.target.value === "order2") {
    let pokemonDesc = descOrder(allPokemons);
    createCard(pokemonDesc, rootBody);
  }
});

const showOrderAbcPoke = document.getElementById("order-by");
showOrderAbcPoke.addEventListener("change", function () {
  orderAbcPoke(this);
});

//mostrar todos los pokemones//
function showAllPokemons() {
  createCard(allPokemons, rootBody);
}

const elementShowAll = document.getElementById("ver-todos");
elementShowAll.addEventListener("click", showAllPokemons);
